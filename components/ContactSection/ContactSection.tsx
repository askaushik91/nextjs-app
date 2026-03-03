import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import styles from './ContactSection.module.scss';

import { IMAGES } from '@/lib/images';

export function ContactSection() {
  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      
      <div className={styles.section__container}>   {/* full width bg */}

        <div className={styles.section__inner}>     {/* NEW 1400px */}

          <div className={styles.section__grid}>
            
            <div className={styles.section__formWrap}>
              <h2 id="contact-heading" className={styles.section__heading}>
                Let&apos;s Grow Something Healthy Together
              </h2>

              <p className={styles.section__subtitle}>
                  Our friendly team would love to hear from you.
                </p>

              <form className={styles.form} action="#" method="post">
                <div className={styles.form__row}>
                  <div className={styles.form__group}>
                    <label className={styles.form__label} htmlFor="first-name">
                      First name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      name="firstName"
                      className={styles.form__input}
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className={styles.form__group}>
                    <label className={styles.form__label} htmlFor="last-name">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      name="lastName"
                      className={styles.form__input}
                      placeholder="Last name"
                      required
                    />
                  </div>
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
                    <select className={styles.form__country}>
                      <option>US</option>
                      <option>IN</option>
                    </select>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      className={styles.form__phoneInput}
                      placeholder="+1 (555) 000-0000"
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
                    placeholder=""
                  />
                </div>

                <div className={styles.form__checkbox}>
                  <input type="checkbox" id="privacy" />
                  <label htmlFor="privacy">
                    You agree to our <a href="#">privacy policy</a>.
                  </label>
                </div>

                <button type="submit" className={styles.form__submit}>
                  Reserve Your Farm Plot Today
                </button>

              </form>
            </div>

            <div className={styles.section__imageWrap}>
              <Image
                src={IMAGES.contact}
                alt="Gill Organics produce bag"
                width={500}
                height={600}
                className={styles.section__image}
              />
            </div>

          </div>

        </div> {/* END inner */}

      </div>

    </section>
  );
}
