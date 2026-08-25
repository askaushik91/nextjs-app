import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const escapeHtml = (value: string): string =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character] ?? character));

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email ?? '').trim();
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const name = String(body.name ?? '').trim();
    if (!name) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    const phone = String(body.phone ?? '').trim();
    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }

    const message = String(body.message ?? '').trim();
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const adminSubject = 'New Contact Message - Gill Organics';
    const customerSubject = 'We received your message - Gill Organics';
    const customerConfirmationMessage =
      'Gill Organics has received your message and our team will get back to you shortly.';

    const emailFieldsHtml = `
      <div class="field-group">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field-group">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
      </div>
      <div class="field-group">
        <div class="label">Phone Number</div>
        <div class="value">${escapeHtml(phone)}</div>
      </div>
      <div class="field-group">
        <div class="label">Message</div>
        <div class="value value-message">${escapeHtml(message)}</div>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 're_your_resend_api_key' || apiKey === 'MY_SECRET_RESEND_API_KEY') {
      console.error('Resend API key is missing or invalid in environment variables.');
      return NextResponse.json({ error: 'Email delivery has not been configured yet.' }, { status: 503 });
    }

    const emailFrom = process.env.EMAIL_FROM || 'forms@gillorganics.com';
    const sender = emailFrom.includes('<') ? emailFrom : `Gill Organics <${emailFrom}>`;
    const adminRecipient = process.env.EMAIL_TO || 'gillorganics@gmail.com';

    const resend = new Resend(apiKey);

    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${escapeHtml(adminSubject)}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
            color: #333333;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            border: 1px solid #e1e8ed;
          }
          .header {
            background-color: #1b5e20;
            padding: 24px;
            text-align: center;
            color: #ffffff;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.5px;
          }
          .content {
            padding: 32px 24px;
          }
          .field-group {
            margin-bottom: 20px;
            border-bottom: 1px solid #f0f4f8;
            padding-bottom: 12px;
          }
          .field-group:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #718096;
            font-weight: bold;
            margin-bottom: 4px;
          }
          .value {
            font-size: 15px;
            color: #2d3748;
            line-height: 1.5;
          }
          .value-message {
            white-space: pre-wrap;
            background: #f7f9fc;
            padding: 12px;
            border-radius: 6px;
            border-left: 4px solid #1b5e20;
            font-size: 14px;
          }
          .footer {
            background-color: #f7f9fc;
            padding: 16px;
            text-align: center;
            font-size: 12px;
            color: #a0aec0;
            border-top: 1px solid #e1e8ed;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${escapeHtml(adminSubject)}</h1>
          </div>
          <div class="content">
            ${emailFieldsHtml}
          </div>
          <div class="footer">
            This is an automated notification from Gill Organics.
          </div>
        </div>
      </body>
      </html>
    `;

    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${escapeHtml(customerSubject)}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
            color: #333333;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            border: 1px solid #e1e8ed;
          }
          .header {
            background-color: #1b5e20;
            padding: 24px;
            text-align: center;
            color: #ffffff;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
          }
          .content {
            padding: 32px 24px;
            line-height: 1.6;
            font-size: 15px;
            color: #2d3748;
          }
          .content p {
            margin-top: 0;
            margin-bottom: 16px;
          }
          .footer {
            background-color: #f7f9fc;
            padding: 16px;
            text-align: center;
            font-size: 12px;
            color: #a0aec0;
            border-top: 1px solid #e1e8ed;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Gill Organics</h1>
          </div>
          <div class="content">
            <p>Hello ${escapeHtml(name)},</p>
            <p>${escapeHtml(customerConfirmationMessage)}</p>
            <p>Best regards,<br><strong>Gill Organics Team</strong></p>
          </div>
          <div class="footer">
            This is an automated confirmation email from Gill Organics.
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. Send the admin email
    const adminEmailResult = await resend.emails.send({
      from: sender,
      to: adminRecipient,
      replyTo: email,
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminEmailResult.error) {
      console.error('Resend Admin Email error:', adminEmailResult.error);
      return NextResponse.json({ error: 'Failed to submit request. Please try again later.' }, { status: 502 });
    }

    // 2. Send the customer confirmation email
    const customerEmailResult = await resend.emails.send({
      from: sender,
      to: email,
      replyTo: adminRecipient,
      subject: customerSubject,
      html: customerHtml,
    });

    if (customerEmailResult.error) {
      // Log the customer email failure but do not fail the overall request since the admin email was sent.
      console.error('Resend Customer Email error:', customerEmailResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}
