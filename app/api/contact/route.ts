import { NextResponse } from 'next/server';

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[character] ?? character));

const field = (formData: FormData, name: string) => String(formData.get(name) ?? '').trim();

export async function POST(request: Request) {
  const formData = await request.formData();
  const formType = field(formData, 'formType');
  const name = field(formData, formType === 'business' ? 'businessName' : 'slotName');
  const email = field(formData, 'email');
  const honeypot = field(formData, 'website');

  if (honeypot) return NextResponse.json({ success: true });
  if (!['business', 'slot'].includes(formType) || !name || !email || !email.includes('@')) {
    return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Resend API key missing from environment variables.');
    return NextResponse.json({ error: 'Email delivery has not been configured yet.' }, { status: 503 });
  }

  const entries = Array.from(formData.entries())
    .filter(([key]) => !['formType', 'website'].includes(key))
    .map(([key, value]) => `<tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()))}</th><td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(String(value) || '—')}</td></tr>`)
    .join('');

  const subject = formType === 'business' ? `New business enquiry from ${name}` : `New slot booking from ${name}`;
  const confirmationSubject = formType === 'business'
    ? 'We received your business enquiry'
    : 'We received your slot booking request';
  
  const from = process.env.EMAIL_FROM || 'Gill Organics <onboarding@resend.dev>';
  const to = process.env.EMAIL_TO || 'gillorganics@gmail.com';

  const batchPayload = [
    {
      from,
      to: [to],
      reply_to: email,
      subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2e7d32; border-bottom: 2px solid #2e7d32; padding-bottom: 10px;">${escapeHtml(subject)}</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            ${entries}
          </table>
        </div>
      `,
    },
  ];

  // Note: Resend's onboarding@resend.dev ONLY allows sending to your own registered email.
  // If the user hasn't verified their custom domain yet, sending to [email] (the customer) will fail.
  // We condition sending the confirmation email if they are using a verified sender domain.
  const isUsingDefaultOnboarding = from.includes('onboarding@resend.dev');
  if (!isUsingDefaultOnboarding) {
    batchPayload.push({
      from,
      to: [email],
      reply_to: to,
      subject: confirmationSubject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2e7d32;">Thank you, ${escapeHtml(name)}.</h2>
          <p>Your ${formType === 'business' ? 'business enquiry' : 'slot booking request'} has been received. Our team will be in touch shortly.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This is an automated confirmation from Gill Organics.</p>
        </div>
      `,
    });
  }

  const response = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(batchPayload),
  });

  if (!response.ok) {
    console.error('Resend provider error:', await response.text());
    return NextResponse.json({ error: 'We could not send your enquiry. Please try again shortly.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
