"use client";

import styles from "./CtaSection.module.css";

export default function CTASection() {
  return (
    <section className={`${styles.ctaSection} finishGradientBackground`}>
      <div className={styles.ctaContent}>
        <h2 className="text-3xl mb-5">
          Let’s <span className="font-bold">Get In Touch.</span>
        </h2>
        <p className="paragraph-text mb-8">
          Discover breathtaking landscapes and unique adventures. Let me guide
          you to unforgettable natural experiences tailored just for you.
        </p>
        <div className={styles.ctaButtons}>
          <a href="/contact" className={styles.btn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
