import { NextResponse } from 'next/server';

const RECIPIENTS = ['kaushik.ashish91@outlook.com', 'kaushikashish952@gmail.com'];

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
    return NextResponse.json({ error: 'Email delivery has not been configured yet.' }, { status: 503 });
  }

  const entries = Array.from(formData.entries())
    .filter(([key]) => !['formType', 'website'].includes(key))
    .map(([key, value]) => `<tr><th>${escapeHtml(key.replace(/([A-Z])/g, ' $1'))}</th><td>${escapeHtml(String(value) || '—')}</td></tr>`)
    .join('');
  const subject = formType === 'business' ? `New business enquiry from ${name}` : `New slot booking from ${name}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? 'Gill Organics <onboarding@resend.dev>',
      to: RECIPIENTS,
      reply_to: email,
      subject,
      html: `<h2>${escapeHtml(subject)}</h2><table>${entries}</table>`,
    }),
  });

  if (!response.ok) {
    console.error('Email provider error:', await response.text());
    return NextResponse.json({ error: 'We could not send your enquiry. Please try again shortly.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
