import React, { useState } from 'react';
import type { Event } from '../types';

interface EventVideoPromoProps {
  event: Event;
  onRegister?: (eventId: string) => void;
}

const PlayIcon = () => (
  <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EventVideoPromo: React.FC<EventVideoPromoProps> = ({ event, onRegister }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const getTimeUntilEvent = () => {
    const eventDate = new Date(`${event.date} ${event.time}`);
    const now = new Date();
    const timeDiff = eventDate.getTime() - now.getTime();
    
    if (timeDiff <= 0) return "Event started!";
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days} days, ${hours} hours`;
    if (hours > 0) return `${hours} hours, ${minutes} minutes`;
    return `${minutes} minutes`;
  };

  if (!event.promotionalVideo) return null;

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-all duration-500">
      {/* Video Section */}
      <div className="relative aspect-video bg-midnight-ink overflow-hidden">
        {!isVideoPlaying ? (
          <>
            {/* Video Thumbnail */}
            <img
              src={event.promotionalVideo.thumbnail}
              alt={`${event.title} promotional video`}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="bg-electric-mint/90 hover:bg-electric-mint text-white rounded-full p-4 md:p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-electric-mint/30"
                aria-label={`Play ${event.title} promotional video`}
              >
                <PlayIcon />
              </button>
            </div>
            
            {/* Video Info Badge */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {event.promotionalVideo.duration}
            </div>
            
            {/* Event Type Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
              event.type === 'workshop' ? 'bg-electric-mint text-white' :
              event.type === 'talk' ? 'bg-amber text-white' :
              event.type === 'social' ? 'bg-purple-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {event.type}
            </div>
          </>
        ) : (
          <iframe
            src={event.promotionalVideo.url}
            title={event.promotionalVideo.title}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>

      {/* Event Details */}
      <div className="p-6 md:p-8">
        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-electric-mint/10 to-amber/10 rounded-2xl p-4 mb-6 text-center">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Event starts in:</h3>
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
            {getTimeUntilEvent()}
          </div>
        </div>

        {/* Event Title & Description */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-midnight-ink mb-4">
          {event.title}
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          {event.description}
        </p>

        {/* Event Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <CalendarIcon />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <ClockIcon />
            <span className="text-sm font-medium">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <LocationIcon />
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-gradient-to-r from-electric-mint/5 to-amber/5 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-semibold text-midnight-ink">Registration</h4>
              <p className="text-sm text-gray-600">
                {event.registered} / {event.capacity} registered
              </p>
            </div>
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-electric-mint to-amber transition-all duration-500 ${
                  event.registered >= event.capacity * 0.8 ? 'w-full' :
                  event.registered >= event.capacity * 0.6 ? 'w-4/5' :
                  event.registered >= event.capacity * 0.4 ? 'w-3/5' :
                  event.registered >= event.capacity * 0.2 ? 'w-2/5' : 'w-1/5'
                }`}
              />
            </div>
          </div>

          {!showRegistration ? (
            <button
              onClick={() => setShowRegistration(true)}
              className="w-full bg-gradient-to-r from-electric-mint to-amber text-white py-3 px-6 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              Register Now & Get Reminders
            </button>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric-mint focus:ring-2 focus:ring-electric-mint/20 outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-electric-mint focus:ring-2 focus:ring-electric-mint/20 outline-none transition-all duration-300"
                />
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <h5 className="font-semibold text-sm text-gray-700 mb-3">Get countdown reminders:</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {event.notifications.reminders.map((reminder, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-electric-mint focus:ring-electric-mint" />
                      <span className="text-gray-600">{reminder.timeBeforeEvent} before</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    onRegister?.(event.id);
                    setShowRegistration(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-electric-mint to-amber text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                >
                  Complete Registration
                </button>
                <button
                  onClick={() => setShowRegistration(false)}
                  className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventVideoPromo;