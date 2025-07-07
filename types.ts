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
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'talk' | 'social' | 'meeting';
  spotsAvailable: number;
  totalSpots: number;
  image?: string;
  isRegistrationOpen: boolean;
}
