import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import styles from './BannerSection.module.scss'

export type BannerProps = {
  overlayImage?: string
  overlayImageAlt?: string
  bannerImage?: string
  bannerImageAlt?: string
  title?: string
  description?: string
  btnText?: string
  btnPath?: string
  isShort?: boolean
}

const BannerSection = ({
  overlayImage,
  overlayImageAlt,
  bannerImage,
  bannerImageAlt,
  title,
  description,
  btnText,
  btnPath,
  isShort
}: BannerProps) => {
  return (
    <div className={styles.bannerWrapper}>
      {bannerImage && (
        <Image
          priority={false}
          width={1920}
          height={850}
          src={bannerImage}
          alt={bannerImageAlt ?? 'Banner Image'}
          className={`${styles.bannerImage} ${isShort ? styles.short : styles.tall}`}
        />
      )}

      <div className={styles.overlayImageWrapper}>
        {overlayImage && (
          <Image
            priority={false}
            width={1350}
            height={850}
            src={overlayImage}
            alt={overlayImageAlt ?? 'Banner Overlay'}
            className={styles.overlayImage}
          />
        )}
      </div>

      <div className={styles.darkOverlay}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default BannerSection