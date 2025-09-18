import { useState } from 'react';
import type { Event, EventRegistration } from '../types';
import EventVideoPromo from './EventVideoPromo';
import RegistrationManager from './RegistrationManager';
import { notificationService, sampleEventsWithVideos, calculateTimeUntilEvent } from '../services/notificationService';

// Simple icons
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

// Local sample events (clean)
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Leadership Workshop',
    description: 'Build practical leadership skills with peer exercises and real scenarios.',
    date: '2025-07-18',
    time: '5:00 PM - 7:00 PM',
    location: 'Student Center Room 201',
    type: 'workshop',
    image: '/images/light-on-campus-1.png',
    capacity: 40,
    registered: 28,
    featured: true,
    tags: ['leadership', 'skills', 'community'],
    registrationLink: '#register',
    notifications: { enabled: true, reminders: [
      { timeBeforeEvent: '1 day', message: 'Leadership Workshop is tomorrow! See you there.', sent: false },
      { timeBeforeEvent: '1 hour', message: 'Workshop starts in 1 hour in Room 201.', sent: false }
    ]}
  },
  {
    id: '2',
    title: 'Tech Careers Talk',
    description: 'Insights from alumni working in leading tech companies.',
    date: '2025-07-19',
    time: '6:00 PM - 7:30 PM',
    location: 'Engineering Hall Auditorium',
    type: 'talk',
    image: '/images/light-on-campus-2.png',
    capacity: 100,
    registered: 78,
    featured: false,
    tags: ['career', 'technology', 'networking'],
    registrationLink: '#register',
    notifications: { enabled: true, reminders: [] }
  },
  {
    id: '3',
    title: 'Pizza & Game Night',
    description: 'Relax with friends, play games, and enjoy free pizza.',
    date: '2025-07-20',
    time: '7:00 PM - 10:00 PM',
    location: 'Campus Recreation Center',
    type: 'social',
    image: '/images/light-on-campus-3.jpg',
    capacity: 80,
    registered: 45,
    featured: false,
    tags: ['social', 'fun', 'community'],
    registrationLink: '#register',
    notifications: { enabled: true, reminders: [
      { timeBeforeEvent: '2 hours', message: 'Pizza & Game Night starts in 2 hours!', sent: false }
    ]}
  },
  {
    id: '4',
    title: 'Financial Literacy Seminar',
    description: 'Budgeting, saving, and building credit—essentials for students.',
    date: '2025-07-22',
    time: '4:30 PM - 6:00 PM',
    location: 'Library Conference Room A',
    type: 'seminar',
    image: '/images/light-on-campus-4.jpg',
    capacity: 40,
    registered: 22,
    featured: false,
    tags: ['finance', 'life-skills', 'education'],
    registrationLink: '#register',
    notifications: { enabled: true, reminders: [
      { timeBeforeEvent: '1 day', message: 'Financial Literacy Seminar tomorrow!', sent: false },
      { timeBeforeEvent: '30 minutes', message: 'Starting in 30 minutes – see you there.', sent: false }
    ]}
  },
  {
    id: '5',
    title: 'Resume Writing Workshop',
    description: 'Hands-on session to polish your resume with expert feedback.',
    date: '2025-07-25',
    time: '3:00 PM - 5:00 PM',
    location: 'Career Services Center',
    type: 'workshop',
    image: '/images/light-on-campus-5.jpg',
    capacity: 30,
    registered: 27,
    featured: true,
    tags: ['career', 'job-search', 'professional-development'],
    registrationLink: '#register',
    notifications: { enabled: true, reminders: [
      { timeBeforeEvent: '2 days', message: 'Resume Workshop in 2 days. Bring your current resume.', sent: false }
    ]}
  },
  {
    id: '6',
    title: 'Mental Health & Wellness Talk',
    description: 'Stress management and building resilience during college.',
    date: '2025-07-28',
    time: '4:00 PM - 5:30 PM',
    location: 'Health & Wellness Center',
    type: 'talk',
    image: '/images/light-on-campus-6.png',
    capacity: 60,
    registered: 41,
    featured: false,
    tags: ['mental-health', 'wellness', 'self-care'],
    registrationLink: '#register',
    notifications: { enabled: true, reminders: [
      { timeBeforeEvent: '1 day', message: 'Wellness talk tomorrow. Take care of yourself!', sent: false },
      { timeBeforeEvent: '1 hour', message: 'Starts in 1 hour at the Health & Wellness Center.', sent: false }
    ]}
  }
];

export default function EventsCalendar() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'workshop' | 'talk' | 'social' | 'seminar'>('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const handleEventRegistration = async (eventId: string, registrationData?: any) => {
    const event = sampleEvents.find(e => e.id === eventId);
    if (event) {
      const registration: EventRegistration = {
        eventId,
        participantEmail: registrationData?.email || 'user@example.com',
        participantName: registrationData?.name || 'Sample User',
        studentId: registrationData?.studentId,
        residence: registrationData?.residence,
        roomNumber: registrationData?.roomNumber,
        phoneNumber: registrationData?.phoneNumber,
        year: registrationData?.year,
        address: registrationData?.address,
        registrationDate: new Date().toISOString(),
        notificationPreferences: { email: true, sms: false, push: false }
      };
      await notificationService.scheduleEventReminders(event, registration);
      const successMessage = registrationData?.residence
        ? `Successfully registered for ${event.title}! We'll send reminders to ${registrationData.email}. ${registrationData.residence !== 'Off-Campus Housing' && registrationData.residence !== 'Commuter Student' ? `We have you down as living in ${registrationData.residence}${registrationData.roomNumber ? ` room ${registrationData.roomNumber}` : ''}.` : ''}`
        : `Successfully registered for ${event.title}! You'll receive countdown reminders.`;
      alert(successMessage);
    }
  };

  const filteredEvents = sampleEvents.filter(event => {
    const matchesType = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesFeatured = !showFeaturedOnly || event.featured;
    return matchesType && matchesFeatured;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const availability = (registered: number, capacity: number) => {
    const pct = (registered / capacity) * 100;
    if (pct >= 90) return { status: 'Almost Full', color: 'text-red-600' };
    if (pct >= 70) return { status: 'Filling Up', color: 'text-amber-600' };
    return { status: 'Available', color: 'text-green-600' };
  };

  return (
    <section id="events" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Events <span className="bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">Calendar</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for workshops, talks, and social events designed to enhance your college experience.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {['all', 'workshop', 'talk', 'social', 'seminar'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                selectedFilter === filter ? 'bg-electric-mint text-white border-electric-mint' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {filter === 'all' ? 'All Events' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
          <button
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              showFeaturedOnly ? 'bg-amber text-white border-amber' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            Featured Only
          </button>
        </div>

        {/* Featured Video */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          {sampleEventsWithVideos.slice(0, 1).map(event => (
            <EventVideoPromo key={event.id} event={event} onRegister={handleEventRegistration} />
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredEvents.map((event) => {
            const avail = availability(event.registered, event.capacity);
            return (
              <div key={event.id} className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  {event.featured && (
                    <div className="absolute top-4 right-4 bg-amber text-white text-xs font-bold px-3 py-1 rounded-full">Featured</div>
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-midnight-ink">{event.title}</h3>
                  <div className="bg-gray-50 rounded-lg p-2 mb-3 text-center">
                    <span className="text-xs font-semibold text-gray-600">Starts in: </span>
                    <span className="text-sm font-bold bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
                      {calculateTimeUntilEvent(event.date, event.time)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2"><CalendarIcon /><span>{formatDate(event.date)}</span></div>
                    <div className="flex items-center gap-2"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{event.time}</span></div>
                    <div className="flex items-center gap-2"><LocationIcon /><span>{event.location}</span></div>
                    <div className="flex items-center gap-2"><UsersIcon /><span>{event.registered}/{event.capacity} registered</span><span className={`font-medium ${avail.color}`}>• {avail.status}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                  <button onClick={() => handleEventRegistration(event.id)} className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-electric-mint hover:brightness-95">
                    {event.registered >= event.capacity ? 'Join Waitlist' : 'Quick Register'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="font-serif text-2xl font-bold text-gray-700 mb-2">No Events Found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more events.</p>
          </div>
        )}

        <div className="mt-12 md:mt-16">
          <RegistrationManager events={sampleEvents} />
        </div>

        <div className="text-center mt-16 md:mt-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-midnight-ink">Have an Event Idea?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">We're always looking for new workshop ideas, speakers, and social activities. Share your suggestions and help us create events that matter to you.</p>
            <button className="px-6 py-3 rounded-xl bg-amber text-white font-semibold hover:brightness-95">Suggest an Event</button>
          </div>
        </div>
      </div>
    </section>
  );
}
