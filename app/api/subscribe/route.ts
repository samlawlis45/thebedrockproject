import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// File-based storage - emails saved to data/emails.json
const EMAILS_FILE = path.join(process.cwd(), 'data', 'emails.json');

function loadEmails(): string[] {
  try {
    if (!fs.existsSync(EMAILS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(EMAILS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveEmail(email: string): boolean {
  const emails = loadEmails();
  const emailLower = email.toLowerCase();
  
  if (emails.includes(emailLower)) {
    return false; // Already exists
  }
  
  emails.push(emailLower);
  
  // Ensure directory exists
  const dir = path.dirname(EMAILS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Save to file
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
  return true;
}

// Option 2: Resend API (uncomment and add RESEND_API_KEY to .env)
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
//
// async function sendNotificationEmail(userEmail: string) {
//   try {
//     await resend.emails.send({
//       from: 'The Bedrock Project <onboarding@resend.dev>', // Update with your domain
//       to: process.env.NOTIFICATION_EMAIL || 'inquiries@thebedrockproject.com',
//       subject: 'New subscriber: The Bedrock Project',
//       html: `<p>New subscriber: ${userEmail}</p>`,
//     });
//   } catch (error) {
//     console.error('Failed to send notification email:', error);
//   }
// }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = emailSchema.parse(body);

    // If Supabase env vars are present, store in Supabase; otherwise fallback to file
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE;

    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false },
      });

      // Create table schema (SQL provided in docs); relies on unique index on email
      const { error } = await supabase
        .from('subscribers')
        .insert({ email: email.toLowerCase() });

      if (error) {
        // Unique violation code from Postgres
        if ((error as any).code === '23505') {
          return NextResponse.json(
            { message: "You're already subscribed!" },
            { status: 200 }
          );
        }
        console.error('Supabase insert error:', error);
        return NextResponse.json(
          { message: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        );
      }

      console.log('New subscription (supabase):', email);
      return NextResponse.json(
        { message: 'Successfully subscribed!' },
        { status: 200 }
      );
    } else {
      // Fallback: Save email to file
      const wasNew = saveEmail(email);
      if (!wasNew) {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 }
        );
      }
      console.log('New subscription (file):', email);
      return NextResponse.json(
        { message: 'Successfully subscribed!' },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

