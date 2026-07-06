import React from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import styles from './MapSection.module.scss';

export function MapSection() {
  return (
    <section className={styles.mapSection} aria-label="Our Location Map">
      <div className={styles.mapSection__overlay}>
        <div className={styles.mapSection__card}>
          <span className={styles.mapSection__tag}>Our Farm Headquarters</span>
          <h3>Gill Organics</h3>
          <p className={styles.mapSection__sub}>Cloud Farms, Patiala</p>
          
          <div className={styles.mapSection__details}>
            <div className={styles.mapSection__item}>
              <span className={styles.mapSection__icon}>📍</span>
              <p>{CONTACT_INFO.address}</p>
            </div>
            <div className={styles.mapSection__item}>
              <span className={styles.mapSection__icon}>📞</span>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
            </div>
            <div className={styles.mapSection__item}>
              <span className={styles.mapSection__icon}>✉️</span>
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/tmCHPAqBYsrLq5XR7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.mapSection__btn}
          >
            <span>Get Directions</span>
            <span className={styles.mapSection__btnArrow}>→</span>
          </a>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.9038221882676!2d76.31911601205314!3d30.418629299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910311482032cb5%3A0xba17b27b57ed65e1!2sGill%20Organics%20-%20Cloud%20Farms!5e0!3m2!1sen!2sin!4v1717600000000!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gill Organics - Cloud Farms Location on Google Maps"
      ></iframe>
    </section>
  );
}
