'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import styles from './FAQSection.module.scss';

const FAQ_ITEMS = [
  {
    question: 'Are the vegetables completely organic?',
    answer:
      'Yes. We follow natural farming practices and avoid harmful chemicals and synthetic pesticides. You can select seasonal vegetables based on availability and farming suitability.',
  },
  {
    question: 'Can I choose which vegetables to grow?',
    answer:
      'You choose a plot size (Basic, Premium, or Family), and we assign you a section of our farmland. Our team prepares the soil, plants seasonal varieties, tends the crops, and harvests when ready. You receive the produce on a delivery schedule that works for you.',
  },
  {
    question: 'How often will I receive delivery?',
    answer:
      'Your box includes seasonal vegetables grown on your plot—whatever is ripe that week. Typical crops include tomatoes, leafy greens, root vegetables, and more, depending on the season and your region.',
  },
  {
    question: 'Do I need to manage the farm?',
    answer:
      'Delivery frequency depends on your subscription tier. Most families receive a weekly or bi-weekly box during the growing season. We’ll confirm your schedule when you sign up.',
  },
  {
    question: 'Is there a minimum lease duration?',
    answer:
      'Delivery frequency depends on your subscription tier. Most families receive a weekly or bi-weekly box during the growing season. We’ll confirm your schedule when you sign up.',
  },
  {
    question: 'Are the vegetables completely organic?',
    answer:
      'Delivery frequency depends on your subscription tier. Most families receive a weekly or bi-weekly box during the growing season. We’ll confirm your schedule when you sign up.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <Container>
        <h5 className={styles.section__subheading}>
          FAQs
        </h5>
        <h2 id="faq-heading" className={styles.section__heading}>
          Frequently <br />asked questions
        </h2>
        <ul className={styles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <li key={i} className={styles.list__item}>
              <button
                type="button"
                className={styles.list__question}
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.question}</span>
                <span
                  className={`${styles.list__arrow} ${openIndex === i ? styles['list__arrow--open'] : ''}`}
                  aria-hidden
                >
                  →
                </span>
              </button>
              <div
                className={`${styles.list__answerWrap} ${openIndex === i ? styles['list__answerWrap--open'] : ''}`}
              >
                <p className={styles.list__answer}>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.ctaBar}>
          <Image
              src={IMAGES.faqquest}
              alt="Faq Get In Touch"
              width={120}
              height={56}
              className={styles.section__image}
            />
          <p className={styles.ctaBar__head}>
            Still have questions?
          </p>
           <p className={styles.ctaBar__text}>
            Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
          <Button href="/contact" label="Get In Touch" variant="primary" />
        </div>
      </Container>
    </section>
  );
}
