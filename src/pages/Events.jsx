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
            <p className={styles.eyebrow}>Signature Experiences</p>
            <h1 className={styles.title}>Events designed to inspire action</h1>
            <p className={styles.subtitle}>
              Explore the conversations, masterclasses, and appreciation evenings that bring our community together.
              Each event is carefully crafted so you walk away with clarity, confidence, and next steps you can act on right away.
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
                  <div className={styles.upcomingMedia}>
                    <img src={event.thumbnail} alt={`${event.title} preview`} loading="lazy" />
                  </div>
                  <div className={styles.upcomingContent}>
                    <header className={styles.upcomingHeader}>
                      <div className={styles.upcomingMeta}>
                        <span className={styles.dateBadge}>{event.date}</span>
                        <span className={styles.locationPill}>{event.location}</span>
                      </div>
                      <h3>{event.title}</h3>
                    </header>
                    <p className={styles.upcomingSummary}>{event.summary}</p>
                    <ul className={styles.highlightList}>
                      {event.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {event.registration && (
                      <div className={styles.registrationBlock}>
                        <p>{event.registration.note}</p>
                        <div className={styles.registrationActions}>
                          <a
                            href={event.registration.ctaUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.primaryCta}
                          >
                            {event.registration.ctaLabel}
                          </a>
                          <Link className={styles.secondaryCta} to={`/events/${event.id}`}>
                            View full details
                          </Link>
                        </div>
                        {event.registration.contactNumber && (
                          <span className={styles.contactNote}>
                            Call {event.registration.contactNumber} for assistance
                          </span>
                        )}
                      </div>
                    )}
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
                <header className={styles.cardHeader}>
                  <div className={styles.headerText}>
                    <span className={styles.dateBadge}>{event.date}</span>
                    <h3>{event.title}</h3>
                  </div>
                  <div className={styles.locationPill}>{event.location}</div>
                </header>
                <div className={styles.cardBody}>
                  <p className={styles.cardSummary}>{event.summary}</p>
                  <ul className={styles.highlightList}>
                    {event.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.speakers}>
                    <span className={styles.speakersLabel}>Featured voices</span>
                    <p>{event.speakers.join(' • ')}</p>
                  </div>
                  <Link className={styles.cardCta} to={`/events/${event.id}`}>
                    View recap
                  </Link>
                </div>
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
