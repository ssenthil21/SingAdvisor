import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { getEventById } from '../data/events';
import styles from './EventDetails.module.css';

function EventDetails() {
  const { id } = useParams();
  const event = getEventById(id);

  if (!event) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <section className={styles.notFound}>
            <h1>Event not found</h1>
            <p>The event you are looking for may have been moved or is no longer available.</p>
            <Link to="/events" className={styles.backLink}>
              Browse events
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div
            className={styles.heroMedia}
            style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.75)), url(${event.thumbnail})` }}
          >
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Event recap</p>
              <h1>{event.title}</h1>
              <div className={styles.meta}>
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.summarySection}>
          <div className={styles.summaryContent}>
            <h2>What happened</h2>
            <p>{event.summary}</p>
            <ul className={styles.summaryList}>
              {event.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.sectionHeader}>
            <h2>Moments from the day</h2>
            <p>A look at the atmosphere our community created together.</p>
          </div>
          <div className={styles.photoGrid}>
            {event.photos.map((photo, index) => (
              <figure key={photo} className={styles.photoCard}>
                <img src={photo} alt={`${event.title} highlight ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.videoSection}>
          <div className={styles.sectionHeader}>
            <h2>Watch the highlights</h2>
            <p>Relive the key moments and share them with your team.</p>
          </div>
          <div className={styles.videoGrid}>
            {event.videos.map((video) => (
              <div key={video.url} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.takeawaySection}>
          <div className={styles.sectionHeader}>
            <h2>Key takeaways</h2>
            <p>Bring these ideas into your next conversation or planning session.</p>
          </div>
          <ul className={styles.takeawayList}>
            {event.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
          <Link to="/events" className={styles.backLink}>
            Back to events
          </Link>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default EventDetails;
