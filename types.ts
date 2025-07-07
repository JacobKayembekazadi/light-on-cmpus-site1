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
