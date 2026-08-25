'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container/Container';
import { FAQ_ITEMS } from '@/lib/faqs';
import styles from './FAQSection.module.scss';

type FAQSectionProps = {
  showAll?: boolean;
};

export function FAQSection({ showAll = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 4);

  return (
    <section
      className={`${styles.section} ${showAll ? styles['section--inner'] : ''}`}
      aria-labelledby={!showAll ? 'faq-heading' : undefined}
      aria-label={showAll ? 'Frequently asked questions' : undefined}
    >
      <Container>
        {!showAll && (
          <>
            <h5 className={styles.section__subheading}>
              FAQs
            </h5>
            <h2 id="faq-heading" className={styles.section__heading}>
              Frequently <br />asked questions
            </h2>
          </>
        )}
        <ul className={styles.list}>
          {items.map((item, i) => (
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
        {!showAll && (
          <div className={styles.section__action}>
            <Link href="/faqs" className={styles.section__button}>
              View all FAQs <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
