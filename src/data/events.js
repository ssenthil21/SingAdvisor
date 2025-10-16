export const events = [
  {
    id: 'client-appreciation-july-2024',
    title: 'Client Appreciation Evening: Mobility & Financial Wellness',
    date: 'July 25, 2024',
    location: '3 Tampines Grande, Singapore 528733',
    speakers: ['Mr. S G Sivakumar', 'Venkat Kumar', 'Akila Manikandan'],
    thumbnail: '/Images/Events/Aug-25 (1).jpeg',
    summary:
      'A heartfelt gathering focused on holistic wellbeing where healthcare experts and financial strategists shared practical advice for living with confidence and independence.',
    highlights: [
      'Live medical insights on emerging osteoarthritis knee treatments.',
      'Actionable frameworks to stretch CPF and SRS savings for retirement.',
      'Collaborative planning clinic for families managing long-term care goals.'
    ],
    photos: [
      {
        src: '/Images/Events/Aug-25 (1).jpeg',
        alt: 'Guests arriving for the Client Appreciation Evening',
        layout: 'large'
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Speaker sharing wellness insights on stage',
        layout: 'tall'
      },
      {
        src: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Participants engaging in roundtable discussions',
        layout: 'wide'
      },
      {
        src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80',
        alt: 'Close-up of mobility wellness demonstration',
        layout: 'square'
      },
      {
        src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80',
        alt: 'Guests networking over refreshments',
        layout: 'wide'
      },
      {
        src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1000&q=80',
        alt: 'Event team supporting attendees at registration',
        layout: 'square'
      }
    ],
    videos: [
      {
        title: 'Evening Highlights',
        url: 'https://www.youtube.com/embed/ysz5S6PUM-U'
      }
    ],
    takeaways: [
      'Understand the latest non-invasive support options for joint mobility.',
      'Map CPF and SRS contributions to real retirement milestones.',
      'Build a shared action plan that keeps loved ones aligned on priorities.'
    ]
  },
  {
    id: 'client-appreciation-september-2024',
    title: 'Client Appreciation Forum: Breathing Easy & Future Ready',
    date: 'September 29, 2024',
    location: '3 Tampines Grande, Singapore 528733',
    speakers: ['Venkat Kumar', 'Akila Manikandan', 'Dakshaini'],
    thumbnail: '/Images/Events/Sep-29 (1).jpeg',
    summary:
      'An energising afternoon centred on respiratory wellness and financial readiness, designed to help families act on expert guidance with clarity.',
    highlights: [
      'ENT specialist Q&A addressing real-life sinus and allergy challenges.',
      'Interactive walkthrough on optimising CPF and SRS portfolios.',
      'Breakout conversations on preparing households for the unexpected.'
    ],
    photos: [
      {
        src: '/Images/Events/Sep-29 (1).jpeg',
        alt: 'Crowd gathered for the Client Appreciation Forum',
        layout: 'large'
      },
      {
        src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80',
        alt: 'Healthcare expert answering audience questions',
        layout: 'wide'
      },
      {
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Attendees taking notes during the planning clinic',
        layout: 'tall'
      },
      {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80',
        alt: 'Small group breakout conversation on financial readiness',
        layout: 'square'
      },
      {
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=80',
        alt: 'Guests sharing experiences during networking session',
        layout: 'wide'
      },
      {
        src: 'https://images.unsplash.com/photo-1545239351-325dd9ec0d43?auto=format&fit=crop&w=1000&q=80',
        alt: 'Event coordinators preparing materials',
        layout: 'square'
      }
    ],
    videos: [
      {
        title: 'Forum Recap',
        url: 'https://www.youtube.com/embed/2uH6R0f3cCk'
      }
    ],
    takeaways: [
      'Spot everyday triggers that aggravate sinus issues and how to respond.',
      'Rebalance savings vehicles to stay on track with lifestyle ambitions.',
      'Translate big-picture visions into next-step commitments with your family.'
    ]
  }
];

export const getEventById = (id) => events.find((event) => event.id === id);
