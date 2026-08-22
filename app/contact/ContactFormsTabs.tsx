'use client';

import { useEffect, useState } from 'react';
import styles from './contact.module.scss';

const tabs = [
  {
    id: 'business',
    title: 'BUSINESS WITH US',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 20V14.5C22 12 24 10 26.5 10h11C40 10 42 12 42 14.5V20" />
        <path d="M10 24.5C10 22 12 20 14.5 20h35C52 20 54 22 54 24.5v25C54 52 52 54 49.5 54h-35C12 54 10 52 10 49.5v-25Z" />
        <path d="M10 31h44" />
        <path d="M26 36h12" />
      </svg>
    ),
  },
  {
    id: 'slot',
    title: 'BOOK YOUR SLOT',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 12v8" />
        <path d="M46 12v8" />
        <path d="M13 18h38c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4H13c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4Z" />
        <path d="M9 29h46" />
        <path d="M21 39h8" />
        <path d="M37 39h8" />
        <path d="M21 47h8" />
      </svg>
    ),
  },
] as const;

export default function ContactFormsTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('business');
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    setTodayDate(new Date().toISOString().split('T')[0]);
  }, []);

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
        setMessage('Thank you — your details have been sent successfully.');
        return;
      }

      const email = String(formData.get('email') ?? '').trim();
      const phoneRaw = String(formData.get('phone') ?? '').trim();
      const countryCode = String(formData.get('countryCode') ?? '').trim();
      const phone = phoneRaw.startsWith('+') ? phoneRaw : `${countryCode === 'US' ? '+1' : '+91'} ${phoneRaw}`;

      let payload: any;
      if (activeTab === 'business') {
        const businessName = String(formData.get('businessName') ?? '').trim();
        const company = String(formData.get('company') ?? '').trim();
        const businessInterest = String(formData.get('businessInterest') ?? '').trim();
        const messageVal = String(formData.get('message') ?? '').trim();

        payload = {
          formType: 'Business With Us',
          name: businessName,
          company,
          email,
          phone,
          businessInterest,
          message: messageVal,
        };
      } else {
        const slotName = String(formData.get('slotName') ?? '').trim();
        const guestsVal = formData.get('guests');
        const guests = guestsVal ? parseInt(String(guestsVal), 10) : 0;
        const preferredDate = String(formData.get('preferredDate') ?? '').trim();
        const preferredTime = String(formData.get('preferredTime') ?? '').trim();
        const messageVal = String(formData.get('message') ?? '').trim();

        payload = {
          formType: 'Book Your Slot',
          name: slotName,
          guests,
          email,
          phone,
          preferredDate,
          preferredTime,
          message: messageVal,
        };
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your enquiry.');
      form.reset();
      setSubmissionState('success');
      setMessage('Thank you — your details have been sent successfully.');
    } catch (error) {
      setSubmissionState('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your enquiry.');
    }
  };

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label="Contact form options">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-form-panel`}
            className={`${styles.tabs__tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabs__icon}>{tab.icon}</span>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.formPanels}>
        {activeTab === 'business' && (
          <form id="business-form-panel" role="tabpanel" className={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="formType" value="business" />
            <input className={styles.form__honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <h3 className={styles.form__title}>Business With Us</h3>

            <div className={styles.form__row}>
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="business-name">
                  Name
                </label>
                <input
                  id="business-name"
                  type="text"
                  name="businessName"
                  className={styles.form__input}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="business-company">
                  Company
                </label>
                <input
                  id="business-company"
                  type="text"
                  name="company"
                  className={styles.form__input}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="business-email">
                Email
              </label>
              <input
                id="business-email"
                type="email"
                name="email"
                className={styles.form__input}
                  placeholder="you@company.com"
                  required
              />
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="business-phone">
                Phone number
              </label>

              <div className={styles.form__phone}>
                <select className={styles.form__country} name="countryCode">
                  <option>IN</option>
                  <option>US</option>
                </select>

                <input
                  id="business-phone"
                  type="tel"
                  name="phone"
                  className={styles.form__phoneInput}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="business-interest">
                Business interest
              </label>
              <select
                id="business-interest"
                name="businessInterest"
                className={styles.form__input}
                required
              >
                <option>Retail partnership</option>
                <option>Bulk organic produce</option>
                <option>Corporate wellness</option>
                <option>Farm collaboration</option>
              </select>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="business-message">
                Message
              </label>
              <textarea
                id="business-message"
                name="message"
                className={styles.form__textarea}
                placeholder="Tell us what you would like to build together"
              />
            </div>

            <button type="submit" className={styles.form__submit} disabled={submissionState === 'sending'}>
              {submissionState === 'sending' ? 'Sending…' : 'Send Business Enquiry'}
            </button>
            {message && <p className={`${styles.form__feedback} ${styles[`form__feedback--${submissionState}`]}`} role="status">{message}</p>}
          </form>
        )}

        {activeTab === 'slot' && (
          <form id="slot-form-panel" role="tabpanel" className={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="formType" value="slot" />
            <input className={styles.form__honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <h3 className={styles.form__title}>Book Your Slot</h3>

            <div className={styles.form__row}>
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="slot-name">
                  Name
                </label>
                <input
                  id="slot-name"
                  type="text"
                  name="slotName"
                  className={styles.form__input}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="slot-guests">
                  Guests
                </label>
                <input
                  id="slot-guests"
                  type="number"
                  name="guests"
                  className={styles.form__input}
                  placeholder="2"
                  required
                  min="1"
                />
              </div>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="slot-email">
                Email
              </label>
              <input
                id="slot-email"
                type="email"
                name="email"
                className={styles.form__input}
                  placeholder="you@company.com"
                  required
              />
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="slot-phone">
                Phone number
              </label>

              <div className={styles.form__phone}>
                <select className={styles.form__country} name="countryCode">
                  <option>IN</option>
                  <option>US</option>
                </select>

                <input
                  id="slot-phone"
                  type="tel"
                  name="phone"
                  className={styles.form__phoneInput}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className={styles.form__row}>
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="slot-date">
                  Preferred date
                </label>
                <input
                  id="slot-date"
                  type="date"
                  name="preferredDate"
                  className={styles.form__input}
                  required
                  min={todayDate}
                />
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="slot-time">
                  Preferred time
                </label>
                <input
                  id="slot-time"
                  type="time"
                  name="preferredTime"
                  className={styles.form__input}
                  required
                />
              </div>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="slot-message">
                Message
              </label>
              <textarea
                id="slot-message"
                name="message"
                className={styles.form__textarea}
                placeholder="Share any details for your visit"
              />
            </div>

            <button type="submit" className={styles.form__submit} disabled={submissionState === 'sending'}>
              {submissionState === 'sending' ? 'Sending…' : 'Book Your Slot'}
            </button>
            {message && <p className={`${styles.form__feedback} ${styles[`form__feedback--${submissionState}`]}`} role="status">{message}</p>}
          </form>
        )}
      </div>
    </>
  );
}
