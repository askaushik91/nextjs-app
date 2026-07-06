'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import styles from './FAQSection.module.scss';

const FAQ_ITEMS = [
  {
    question: 'How much yield will my allotted farm grow?',
    answer:
      "The amount of yield from a 150 sq. yd. land is enough to cover 60-70% weekly vegetable requirement for a family of 4-5 members. Please note that we grow seasonal vegetables only as per nature's timing, so for anything non-seasonal you will have to rely on the regular market.",
  },
  {
    question: 'How far is the farm located from Patiala city?',
    answer:
      "The Farm is located in a lush green and serene village at the outskirts of Patiala, a 20-minute drive from the 22 No. market, Patiala.",
  },
  {
    question: 'Can I join in the middle of the season if I could not join at the start of it?',
    answer:
      "Yes you can join in the middle of a season as well, provided we have slots available, you will just have to wait couple of days for the first yield of your crops.",
  },
  {
    question: 'What are the durations of the seasons under your program?',
    answer:
      "The summer season is from April to October; the winter season is from October to April. You will get yield from your allotted land all round the year except for a few days during the start of each season as crops are rotated.",
  },
  {
    question: 'Which cities do you deliver in?',
    answer:
      "Currently we are serving to Patiala, Chandigarh and Ludhiana locations only, we plan to expand our services to more locations in the near future.",
  },
  {
    question: 'Do you also grow organic wheat/rice/millets?',
    answer:
      "Yes, we will grow organic grains and shakkar separately as per the season which will be available for order only to our customers.",
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
