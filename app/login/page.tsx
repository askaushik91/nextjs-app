'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import { WAITLIST_HREF } from '@/lib/constants';
import styles from './login.module.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    // Simulate login success
    setSuccess(true);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          {/* Left panel: visual branding */}
          <div className={styles.visualPanel}>
            <div className={styles.imageOverlay} />
            <Image
              src={IMAGES.aboutcore || IMAGES.whyUs}
              alt="Organic farm fresh harvest"
              fill
              priority
              sizes="(max-width: 992px) 0vw, 50vw"
              className={styles.backgroundImage}
            />
            <div className={styles.visualContent}>
              <h2>Fresh. Pure. Community-Driven.</h2>
              <p>Sign in to manage your farmland lease, view harvest delivery schedules, and customize your seasonal vegetable box.</p>
            </div>
          </div>

          {/* Right panel: Login form */}
          <div className={styles.formPanel}>
            <div className={styles.formContent}>
              <div className={styles.header}>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Log in to your Gill Organics account</p>
              </div>

              {success ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2>Login Successful!</h2>
                  <p>Welcome back to Gill Organics. Redirecting you to your dashboard...</p>
                  <Button href="/" label="Go to Home" variant="primary" />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {error && <div className={styles.errorMessage}>{error}</div>}

                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.passwordLabelRow}>
                      <label htmlFor="password">Password</label>
                      <a href="#forgot" className={styles.forgotLink}>Forgot Password?</a>
                    </div>
                    <div className={styles.passwordWrapper}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                      />
                      <button
                        type="button"
                        className={styles.passwordToggle}
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.eyeIcon}>
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.eyeIcon}>
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className={styles.rememberGroup}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span className={styles.checkboxCustom} />
                      <span className={styles.checkboxText}>Remember me</span>
                    </label>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Sign In
                  </button>

                  <div className={styles.footer}>
                    <p>
                      Don&apos;t have an account?{' '}
                      <Link href={WAITLIST_HREF} className={styles.signupLink} target="_blank" rel="noreferrer">
                        Join the Wait List
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
