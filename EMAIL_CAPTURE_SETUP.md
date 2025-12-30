# Email Capture Setup Guide

## Current Implementation ✅

The email capture is set up with **file-based storage**. Subscriptions are:
- ✅ Saved to `data/emails.json` (persists across restarts)
- ✅ Validated with Zod
- ✅ Prevents duplicates
- ✅ Logged to console for monitoring

**Your emails are being saved to:** `bedrock-website/data/emails.json`

⚠️ **Important:** The `data/` folder is in `.gitignore` to keep emails private. Do not commit this folder to git.

## Supabase Setup (Recommended)

Create a `subscribers` table and a unique index on `email`.

SQL (run in Supabase SQL editor):

```sql
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

-- prevent duplicates
create unique index if not exists subscribers_email_key on public.subscribers (lower(email));

-- Row Level Security (RLS) on, but allow anonymous inserts
alter table public.subscribers enable row level security;

create policy "Allow anonymous inserts" on public.subscribers
  for insert to anon
  with check (true);
```

Environment variables (server-only) in `.env.local`:

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE=eyJ...  # Service Role Key (server only)
```

The API route will automatically use Supabase when these are present; otherwise it falls back to file storage.

## Upgrade Options

### Option 1: File-Based Storage (Simple, No External Dependencies)

Uncomment the file-based storage code in `app/api/subscribe/route.ts`. This will:
- Save emails to `data/emails.json`
- Persist across server restarts
- No external dependencies

**Steps:**
1. Uncomment the file import and functions in the API route
2. Create a `data` folder in the project root
3. Emails will be saved to `data/emails.json`

### Option 2: Resend API (Email Notifications)

Send yourself an email notification whenever someone subscribes.

**Steps:**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   NOTIFICATION_EMAIL=inquiries@thebedrockproject.com
   ```
4. Uncomment the Resend code in `app/api/subscribe/route.ts`
5. Update the `from` email address (requires domain verification)

### Option 3: Database Storage (Production-Ready)

Store emails in a database for better management and scaling.

**Popular Options:**
- **Supabase** (PostgreSQL, free tier)
- **PlanetScale** (MySQL, free tier)
- **Vercel Postgres** (if deploying on Vercel)
- **MongoDB Atlas** (NoSQL, free tier)

**Example with Supabase:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

// In POST handler:
await supabase.from('subscribers').insert({ email: email.toLowerCase(), created_at: new Date() });
```

### Option 4: Third-Party Services

Integrate with email marketing platforms:
- **ConvertKit** - Good for creators, free tier
- **Mailchimp** - Popular, free tier up to 500 contacts
- **Buttondown** - Simple, developer-friendly

## Environment Variables

Create a `.env.local` file in the project root:

```env
# For Resend (if using Option 2)
RESEND_API_KEY=re_xxxxxxxxxxxxx
NOTIFICATION_EMAIL=inquiries@thebedrockproject.com

# For Supabase (if using Option 3)
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=xxxxx

# For other services, add as needed
```

## Testing

Test the subscription form:
1. Enter a valid email and submit
2. Check console logs for "New subscription: [email]"
3. Try duplicate emails to see the "already subscribed" message
4. Test invalid email formats for validation errors

## Production Considerations

- ✅ Email validation (already implemented with Zod)
- ✅ Rate limiting (add if expecting high traffic)
- ✅ Spam protection (consider adding reCAPTCHA)
- ✅ Database backup (if using database)
- ✅ GDPR compliance (add privacy policy link)
- ✅ Double opt-in (send confirmation email)

