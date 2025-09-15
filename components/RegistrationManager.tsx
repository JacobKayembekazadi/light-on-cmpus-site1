import React, { useState, useEffect } from 'react';
import type { Event, EventRegistration } from '../types';
import { notificationService } from '../services/notificationService';

interface RegistrationManagerProps {
  events: Event[];
}

interface RegistrationStats {
  totalRegistrations: number;
  upcomingEvents: number;
  activeReminders: number;
  completedEvents: number;
}

const RegistrationManager: React.FC<RegistrationManagerProps> = ({ events }) => {
  const [registrations, setRegistrations] = useState<EventRegistration[]>([]);
  const [stats, setStats] = useState<RegistrationStats>({
    totalRegistrations: 0,
    upcomingEvents: 0,
    activeReminders: 0,
    completedEvents: 0
  });

  // Mock localStorage-based storage (in real app, use proper database)
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('eventRegistrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  useEffect(() => {
    // Calculate statistics
    const now = new Date();
    const upcoming = events.filter(event => new Date(`${event.date} ${event.time}`) > now);
    const completed = events.filter(event => new Date(`${event.date} ${event.time}`) <= now);
    
    const activeReminders = events.reduce((count, event) => {
      return count + event.notifications.reminders.filter(reminder => !reminder.sent).length;
    }, 0);

    setStats({
      totalRegistrations: registrations.length,
      upcomingEvents: upcoming.length,
      activeReminders,
      completedEvents: completed.length
    });
  }, [registrations, events]);

  const cancelRegistration = async (eventId: string, participantEmail: string) => {
    const updatedRegistrations = registrations.filter(
      reg => !(reg.eventId === eventId && reg.participantEmail === participantEmail)
    );
    setRegistrations(updatedRegistrations);
    localStorage.setItem('eventRegistrations', JSON.stringify(updatedRegistrations));

    // Cancel scheduled notifications
    await notificationService.cancelReminders(eventId, participantEmail);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
      <h3 className="font-serif text-2xl font-bold text-midnight-ink mb-6">
        📊 Registration Dashboard
      </h3>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-electric-mint/10 to-electric-mint/5 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-electric-mint">{stats.totalRegistrations}</div>
          <div className="text-sm text-gray-600">Total Registrations</div>
        </div>
        <div className="bg-gradient-to-br from-amber/10 to-amber/5 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-amber">{stats.upcomingEvents}</div>
          <div className="text-sm text-gray-600">Upcoming Events</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-500">{stats.activeReminders}</div>
          <div className="text-sm text-gray-600">Active Reminders</div>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-green-500">{stats.completedEvents}</div>
          <div className="text-sm text-gray-600">Completed Events</div>
        </div>
      </div>

      {/* Recent Registrations */}
      {registrations.length > 0 && (
        <div>
          <h4 className="font-semibold text-lg text-midnight-ink mb-4">Recent Registrations</h4>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {registrations.slice(-5).reverse().map((registration, index) => {
              const event = events.find(e => e.id === registration.eventId);
              if (!event) return null;

              return (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="font-medium text-midnight-ink">{registration.participantName}</div>
                    <div className="text-sm text-gray-600">{event.title}</div>
                    <div className="text-xs text-gray-500">
                      Registered: {new Date(registration.registrationDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {registration.notificationPreferences.email && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-electric-mint/10 text-electric-mint">
                        📧 Email
                      </span>
                    )}
                    <button
                      onClick={() => cancelRegistration(registration.eventId, registration.participantEmail)}
                      className="text-red-500 hover:text-red-700 text-sm"
                      title="Cancel Registration"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {registrations.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">📝</div>
          <h4 className="font-semibold text-gray-700 mb-2">No Registrations Yet</h4>
          <p className="text-gray-600 text-sm">Register for events to see your dashboard here!</p>
        </div>
      )}
    </div>
  );
};

// Export utilities for use in other components
export const registrationManager = {
  addRegistration: async (registration: EventRegistration) => {
    const savedRegistrations = localStorage.getItem('eventRegistrations');
    const registrations = savedRegistrations ? JSON.parse(savedRegistrations) : [];
    const updatedRegistrations = [...registrations, registration];
    localStorage.setItem('eventRegistrations', JSON.stringify(updatedRegistrations));
    return updatedRegistrations;
  },

  getRegistrations: (): EventRegistration[] => {
    const savedRegistrations = localStorage.getItem('eventRegistrations');
    return savedRegistrations ? JSON.parse(savedRegistrations) : [];
  },

  isRegistered: (eventId: string, userEmail: string): boolean => {
    const registrations = registrationManager.getRegistrations();
    return registrations.some(reg => reg.eventId === eventId && reg.participantEmail === userEmail);
  },

  getEventRegistrationCount: (eventId: string): number => {
    const registrations = registrationManager.getRegistrations();
    return registrations.filter(reg => reg.eventId === eventId).length;
  }
};

export default RegistrationManager;