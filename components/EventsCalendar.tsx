import React, { useState } from 'react';
import type { Event } from '../types';

// Event type icons
const WorkshopIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const TalkIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m1 0V2a1 1 0 011-1h8a1 1 0 011 1v2m1 0V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4v16a1 1 0 001 1h8a1 1 0 001-1V4M7 4h10m-5 4h.01M12 12h.01M12 16h.01" />
  </svg>
);

const SocialIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SeminarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

// Sample events data
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Time Management Mastery Workshop',
    description: 'Learn proven strategies to maximize your productivity and balance academic and personal life effectively.',
    date: '2025-07-15',
    time: '2:00 PM - 4:00 PM',
    location: 'Student Union Building, Room 201',
    type: 'workshop',
    image: '/images/light-on-campus-1.png',
    capacity: 50,
    registered: 35,
    featured: true,
    tags: ['productivity', 'study-skills', 'life-balance'],
    registrationLink: '#register'
  },
  {
    id: '2',
    title: 'Industry Leaders Talk: Tech Careers',
    description: 'Hear from successful alumni working in top tech companies about their career journeys and advice.',
    date: '2025-07-18',
    time: '6:00 PM - 8:00 PM',
    location: 'Virtual Event (Zoom)',
    type: 'talk',
    image: '/images/light-on-campus-2.png',
    capacity: 100,
    registered: 78,
    featured: true,
    tags: ['career', 'technology', 'networking'],
    registrationLink: '#register'
  },
  {
    id: '3',
    title: 'Pizza & Game Night',
    description: 'Join us for a fun evening of board games, video games, and delicious pizza with fellow students.',
    date: '2025-07-20',
    time: '7:00 PM - 10:00 PM',
    location: 'Campus Recreation Center',
    type: 'social',
    image: '/images/light-on-campus-3.jpg',
    capacity: 80,
    registered: 45,
    featured: false,
    tags: ['social', 'fun', 'community'],
    registrationLink: '#register'
  },
  {
    id: '4',
    title: 'Financial Literacy Seminar',
    description: 'Essential money management skills for students: budgeting, saving, and building credit.',
    date: '2025-07-22',
    time: '1:00 PM - 3:00 PM',
    location: 'Library Conference Room A',
    type: 'seminar',
    image: '/images/light-on-campus-4.jpg',
    capacity: 40,
    registered: 22,
    featured: false,
    tags: ['finance', 'life-skills', 'education'],
    registrationLink: '#register'
  },
  {
    id: '5',
    title: 'Resume Writing Workshop',
    description: 'Craft a compelling resume that stands out to employers with personalized feedback and tips.',
    date: '2025-07-25',
    time: '3:00 PM - 5:00 PM',
    location: 'Career Services Center',
    type: 'workshop',
    image: '/images/light-on-campus-5.jpg',
    capacity: 30,
    registered: 28,
    featured: true,
    tags: ['career', 'job-search', 'professional-development'],
    registrationLink: '#register'
  },
  {
    id: '6',
    title: 'Mental Health & Wellness Talk',
    description: 'Understanding stress management and building resilience during your college years.',
    date: '2025-07-28',
    time: '4:00 PM - 5:30 PM',
    location: 'Health & Wellness Center',
    type: 'talk',
    image: '/images/light-on-campus-6.png',
    capacity: 60,
    registered: 41,
    featured: false,
    tags: ['mental-health', 'wellness', 'self-care'],
    registrationLink: '#register'
  }
];

const EventsCalendar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'workshop' | 'talk' | 'social' | 'seminar'>('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'workshop': return <WorkshopIcon />;
      case 'talk': return <TalkIcon />;
      case 'social': return <SocialIcon />;
      case 'seminar': return <SeminarIcon />;
      default: return <CalendarIcon />;
    }
  };

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'workshop': return 'electric-mint';
      case 'talk': return 'amber';
      case 'social': return 'electric-mint';
      case 'seminar': return 'amber';
      default: return 'electric-mint';
    }
  };

  const filteredEvents = sampleEvents.filter(event => {
    const matchesType = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesFeatured = !showFeaturedOnly || event.featured;
    return matchesType && matchesFeatured;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getAvailabilityStatus = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return { status: 'Almost Full', color: 'text-red-600' };
    if (percentage >= 70) return { status: 'Filling Up', color: 'text-amber-600' };
    return { status: 'Available', color: 'text-green-600' };
  };

  return (
    <section id="events" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 -mx-4 md:-mx-6 px-4 md:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-electric-mint/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-electric-mint/3 to-amber/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
            Events Calendar
            <span className="block bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
              What's Coming Up
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Join us for workshops, talks, and social events designed to enhance your college experience and help you grow personally and professionally.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          <div className="flex flex-wrap gap-2">
            {['all', 'workshop', 'talk', 'social', 'seminar'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === filter
                    ? 'bg-electric-mint text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {filter === 'all' ? 'All Events' : filter.charAt(0).toUpperCase() + filter.slice(1) + 's'}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              showFeaturedOnly
                ? 'bg-amber text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            Featured Only
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4">
          {filteredEvents.map((event, index) => {
            const availability = getAvailabilityStatus(event.registered, event.capacity);
            const eventColor = getEventTypeColor(event.type);
            
            return (
              <div
                key={event.id}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 overflow-hidden ${
                  index % 2 === 0 ? 'md:mt-8' : 'lg:mt-12'
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber to-electric-mint text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}

                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Event Type Badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium ${
                    eventColor === 'electric-mint' ? 'bg-electric-mint/90' : 'bg-amber/90'
                  } backdrop-blur-sm`}>
                    {getEventIcon(event.type)}
                    <span className="capitalize">{event.type}</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  {/* Event Title */}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-midnight-ink mb-3 group-hover:text-electric-mint transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Event Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CalendarIcon />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <LocationIcon />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <UsersIcon />
                      <span className="text-gray-700">{event.registered}/{event.capacity} registered</span>
                      <span className={`font-medium ${availability.color}`}>• {availability.status}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Registration Button */}
                  <button
                    onClick={() => window.open(event.registrationLink, '_blank')}
                    className={`w-full py-3 px-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      eventColor === 'electric-mint' 
                        ? 'bg-gradient-to-r from-electric-mint to-electric-mint/80 hover:from-electric-mint/90 hover:to-electric-mint' 
                        : 'bg-gradient-to-r from-amber to-amber/80 hover:from-amber/90 hover:to-amber'
                    }`}
                  >
                    {event.registered >= event.capacity ? 'Join Waitlist' : 'Register Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="font-serif text-2xl font-bold text-gray-700 mb-2">No Events Found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more events.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsCalendar;
