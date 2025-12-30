import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

// GET endpoint to fetch subscribers (JSON)
export async function GET(request: NextRequest) {
  try {
    const emails = loadEmails();
    const format = request.nextUrl.searchParams.get('format');

    // Return CSV format if requested
    if (format === 'csv') {
      const csv = ['email', ...emails].join('\n');
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="subscribers-${new Date().toISOString().split('T')[0]}.csv"`,
        },
      });
    }

    // Return JSON format (default)
    return NextResponse.json({
      count: emails.length,
      subscribers: emails,
      exportedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { message: 'Failed to export subscribers' },
      { status: 500 }
    );
  }
}

