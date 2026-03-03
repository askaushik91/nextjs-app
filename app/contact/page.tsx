import Image from 'next/image';
import type { Metadata } from 'next';
import { Container } from '@/components/Container/Container';
import BannerSection from '../../components/BannerSection/BannerSection';
import { CONTACT_INFO } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import styles from './contact.module.scss';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gill Organics. Address, phone, email, and contact form coming soon.',
  openGraph: {
    title: 'Contact | Gill Organics',
    description: 'Address, phone, email, and contact form for Gill Organics.',
  },
};

export default function ContactPage() {
  return (
    <div>
      <BannerSection
        bannerImage={IMAGES.aboutinner}
        bannerImageAlt="About Banner"
        title="From Our Soil to Your Table."
        description="Reclaiming the connection between people and the food they eat through sustainable, transparent, and community-driven farming."
        btnText="Get Started"
        btnPath="/contact"
      />

      <div className={styles.page}>
      <section className={styles.contactSection}>
        <Container>
          <div className={styles.header}>
            <h1>Get in touch</h1>
            <p>
              We'd love to hear from you. Reach out anytime — we're here to help.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>📍</div>
              <h3>Visit Us</h3>
              <p>{CONTACT_INFO.address}</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>📞</div>
              <h3>Call Us</h3>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>✉️</div>
              <h3>Email Us</h3>
              <a href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>

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
    </div>
  );
}
