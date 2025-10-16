import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';
import { events } from '../data/events';
import styles from './Events.module.css';

function Events() {
  const upcomingEvents = [...events]
    .filter((event) => event.isUpcoming)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const pastEvents = [...events]
    .filter((event) => !event.isUpcoming)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.eyebrow}>Signature experiences</p>
              <h1 className={styles.title}>Where leaders connect, learn, and celebrate</h1>
            </div>
            <p className={styles.subtitle}>
              Browse upcoming gatherings and revisit highlights without the extra scroll. We&apos;ve trimmed the details so you can quickly decide what to explore next.
            </p>
          </div>
        </section>

        {upcomingEvents.length > 0 && (
          <section className={styles.upcomingSection}>
            <div className={styles.sectionHeader}>
              <h2>Upcoming experience</h2>
              <p>Secure your seat at our next gathering and stay ahead of the curve.</p>
            </div>
            <div className={styles.upcomingGrid}>
              {upcomingEvents.map((event) => (
                <article key={event.id} className={styles.upcomingCard}>
                  <img src={event.thumbnail} alt={`${event.title} preview`} loading="lazy" />
                  <div className={styles.upcomingBody}>
                    <header className={styles.upcomingHeader}>
                      <h3>{event.title}</h3>
                      <div className={styles.upcomingMeta}>
                        <span className={styles.dateBadge}>{event.date}</span>
                        <span className={styles.locationPill}>{event.location}</span>
                      </div>
                    </header>
                    <p className={styles.upcomingSummary}>{event.summary}</p>
                    <div className={styles.upcomingActions}>
                      {event.registration && (
                        <a
                          href={event.registration.ctaUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.primaryCta}
                        >
                          {event.registration.ctaLabel}
                        </a>
                      )}
                      <Link className={styles.secondaryCta} to={`/events/${event.id}`}>
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className={styles.gridSection}>
          <div className={styles.sectionHeader}>
            <h2>Latest highlights</h2>
            <p>Catch up on recent gatherings and reserve your spot for what&apos;s coming up next.</p>
          </div>
          <div className={styles.cardGrid}>
            {pastEvents.map((event) => (
              <article key={event.id} className={styles.card}>
                <div className={styles.cardMedia}>
                  <img src={event.thumbnail} alt={`${event.title} highlight`} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.dateBadge}>{event.date}</span>
                  <h3>{event.title}</h3>
                  <p className={styles.cardSummary}>{event.summary}</p>
                </div>
                <footer className={styles.cardFooter}>
                  <span className={styles.locationPill}>{event.location}</span>
                  <Link className={styles.cardCta} to={`/events/${event.id}`}>
                    {event.isUpcoming ? 'View details' : 'View recap'}
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Events;
