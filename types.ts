import React from 'react';

export interface Offering {
  title: string;
  description: string;
  image: string;
}

export interface CoreValue {
  name: string;
  icon: React.ReactNode;
  color: 'electric-mint' | 'amber';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedIn?: string;
  email?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'talk' | 'social' | 'seminar';
  image: string;
  capacity: number;
  registered: number;
  featured: boolean;
  tags: string[];
  registrationLink?: string;
  // Video advertisement features
  promotionalVideo?: {
    url: string;
    thumbnail: string;
    duration: string;
    title: string;
    description: string;
  };
  // Notification settings
  notifications: {
    enabled: boolean;
    reminders: Array<{
      timeBeforeEvent: string; // e.g., "2 days", "3 hours", "1 hour"
      message: string;
      sent: boolean;
    }>;
  };
}

export interface EventRegistration {
  eventId: string;
  participantEmail: string;
  participantName: string;
  registrationDate: string;
  notificationPreferences: {
    email: boolean;
    sms?: boolean;
    push?: boolean;
  };
}
