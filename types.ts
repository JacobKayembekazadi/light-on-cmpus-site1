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
  studentId?: string;
  residence?: string;
  roomNumber?: string;
  phoneNumber?: string;
  year?: 'freshman' | 'sophomore' | 'junior' | 'senior' | 'graduate';
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  registrationDate: string;
  notificationPreferences: {
    email: boolean;
    sms?: boolean;
    push?: boolean;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate: string;
  lastModified: string;
  category: 'student-life' | 'academic-success' | 'career-development' | 'wellness' | 'campus-news' | 'events';
  tags: string[];
  featured: boolean;
  image: string;
  readTime: number; // in minutes
  likes: number;
  comments: number;
  // Facebook integration
  facebookPost?: {
    postId: string;
    pageId: string;
    postUrl: string;
    embedUrl: string;
    discussionCount: number;
    reactions: {
      like: number;
      love: number;
      haha: number;
      wow: number;
      sad: number;
      angry: number;
    };
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: 'electric-mint' | 'amber' | 'blue' | 'purple' | 'green' | 'red';
  icon: React.ReactNode;
}
