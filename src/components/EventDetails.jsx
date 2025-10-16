import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { getEventById } from '../data/events';
import styles from './EventDetails.module.css';

function EventDetails() {
  const { id } = useParams();
  const event = getEventById(id);
  const hasPhotos = event?.photos?.length > 0;
  const hasVideos = event?.videos?.length > 0;
  const [activePhoto, setActivePhoto] = useState(null);

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
          <div className={styles.heroInner}>
            <div className={styles.heroInfo}>
              <p className={styles.eyebrow}>{event.isUpcoming ? 'Upcoming event' : 'Event recap'}</p>
              <h1>{event.title}</h1>
              <div className={styles.meta}>
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
            </div>
            <button
              type="button"
              className={styles.heroMedia}
              onClick={() => setActivePhoto({ src: event.thumbnail, alt: `${event.title} overview` })}
              aria-label="View featured event photo"
            >
              <img src={event.thumbnail} alt={`${event.title} overview`} loading="lazy" />
            </button>
          </div>
        </section>

        <section className={styles.summarySection}>
          <div className={styles.summaryContent}>
            <h2>{event.isUpcoming ? 'What to expect' : 'What happened'}</h2>
            <p>{event.summary}</p>
            <ul className={styles.summaryList}>
              {event.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {(event.schedule?.length || event.registration) && (
              <div className={styles.summaryExtras}>
                {event.schedule?.length > 0 && (
                  <div className={styles.scheduleCard}>
                    <h3>Event essentials</h3>
                    <ul>
                      {event.schedule.map((detail) => (
                        <li key={`${detail.label}-${detail.value}`}>
                          <span>{detail.label}</span>
                          <span>{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.registration && (
                  <div className={styles.registrationCard}>
                    <h3>Reserve your seat</h3>
                    <p>{event.registration.note}</p>
                    <a
                      href={event.registration.ctaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.registrationButton}
                    >
                      {event.registration.ctaLabel}
                    </a>
                    {event.registration.contactNumber && (
                      <span className={styles.registrationContact}>
                        Need help? Call {event.registration.contactNumber}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {hasPhotos && (
          <section className={styles.gallerySection}>
            <div className={styles.sectionHeader}>
              <h2>Moments from the day</h2>
              <p>A look at the atmosphere our community created together.</p>
            </div>
            <div className={styles.photoGrid}>
              {event.photos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`${styles.photoCard} ${photo.layout ? styles[photo.layout] : ''}`.trim()}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActivePhoto({ src: photo.src, alt: photo.alt || `${event.title} highlight ${index + 1}` })
                    }
                    className={styles.photoButton}
                    aria-label={`View ${photo.alt || `${event.title} highlight ${index + 1}`}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt || `${event.title} highlight ${index + 1}`}
                      loading="lazy"
                    />
                  </button>
                </figure>
              ))}
            </div>
          </section>
        )}

        {hasVideos && (
          <section className={styles.videoSection}>
            <div className={styles.sectionHeader}>
              <h2>{event.isUpcoming ? 'Preview the experience' : 'Watch the highlights'}</h2>
              <p>
                {event.isUpcoming
                  ? 'Share this preview with loved ones you would like to invite.'
                  : 'Relive the key moments and share them with your team.'}
              </p>
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
        )}

        <section className={styles.takeawaySection}>
          <div className={styles.sectionHeader}>
            <h2>{event.isUpcoming ? 'Why join us' : 'Key takeaways'}</h2>
            <p>
              {event.isUpcoming
                ? 'Here’s what you will walk away with when you spend the afternoon with us.'
                : 'Bring these ideas into your next conversation or planning session.'}
            </p>
          </div>
          <ul className={styles.takeawayList}>
            {event.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
          <Link to="/events" className={styles.backLink}>
            {event.isUpcoming ? 'Explore other events' : 'Back to events'}
          </Link>
        </section>
        {activePhoto && (
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded event photo"
            onClick={() => setActivePhoto(null)}
          >
            <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo preview"
              >
                ×
              </button>
              <img src={activePhoto.src} alt={activePhoto.alt} />
              {activePhoto.alt && <p>{activePhoto.alt}</p>}
            </div>
          </div>
        )}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default EventDetails;
