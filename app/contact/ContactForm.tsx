'use client';

import { useEffect, useState } from 'react';
import styles from './contact.module.scss';

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (submissionState !== 'success') return;

    const timeout = window.setTimeout(() => {
      setSubmissionState('idle');
      setMessage('');
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [submissionState]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState('sending');
    setMessage('');

    try {
      const formData = new FormData(form);
      const honeypot = formData.get('website');
      if (honeypot) {
        form.reset();
        setSubmissionState('success');
        setMessage('Thank you — your message has been sent successfully.');
        return;
      }

      const email = String(formData.get('email') ?? '').trim();
      const phoneRaw = String(formData.get('phone') ?? '').trim();
      const countryCode = String(formData.get('countryCode') ?? '').trim();
      const phone = phoneRaw.startsWith('+') ? phoneRaw : `${countryCode === 'US' ? '+1' : '+91'} ${phoneRaw}`;
      const name = String(formData.get('name') ?? '').trim();
      const messageVal = String(formData.get('message') ?? '').trim();

      const payload = {
        name,
        email,
        phone,
        message: messageVal,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your message.');
      form.reset();
      setSubmissionState('success');
      setMessage('Thank you — your message has been sent successfully.');
    } catch (error) {
      setSubmissionState('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.form__honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={styles.form__group}>
        <label className={styles.form__label} htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          className={styles.form__input}
          placeholder="Your name"
          required
        />
      </div>

      <div className={styles.form__group}>
        <label className={styles.form__label} htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          className={styles.form__input}
          placeholder="you@company.com"
          required
        />
      </div>

      <div className={styles.form__group}>
        <label className={styles.form__label} htmlFor="contact-phone">
          Phone number
        </label>
        <div className={styles.form__phone}>
          <select className={styles.form__country} name="countryCode">
            <option>IN</option>
            <option>US</option>
          </select>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            className={styles.form__phoneInput}
            placeholder="+91 98765 43210"
            required
          />
        </div>
      </div>

      <div className={styles.form__group}>
        <label className={styles.form__label} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.form__textarea}
          placeholder="Write your message here..."
          required
        />
      </div>

      <button type="submit" className={styles.form__submit} disabled={submissionState === 'sending'}>
        {submissionState === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {message && (
        <p className={`${styles.form__feedback} ${styles[`form__feedback--${submissionState}`]}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}
