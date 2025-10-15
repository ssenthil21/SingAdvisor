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
    photos: ['/Images/Events/Aug-25 (1).jpeg'],
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
    photos: ['/Images/Events/Sep-29 (1).jpeg'],
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
