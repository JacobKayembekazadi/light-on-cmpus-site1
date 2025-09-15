import type { Event, EventRegistration } from '../types';

export interface NotificationService {
  scheduleEventReminders: (event: Event, registration: EventRegistration) => Promise<void>;
  sendImmediateNotification: (registration: EventRegistration, message: string) => Promise<void>;
  getNextReminder: (event: Event) => string | null;
  cancelReminders: (eventId: string, participantEmail: string) => Promise<void>;
}

// Mock notification service - in a real app, this would connect to email/SMS services
class MockNotificationService implements NotificationService {
  private scheduledReminders: Map<string, NodeJS.Timeout> = new Map();
  private sentNotifications: Set<string> = new Set();

  async scheduleEventReminders(event: Event, registration: EventRegistration): Promise<void> {
    const eventDate = new Date(`${event.date} ${event.time}`);
    const now = new Date();

    // Clear any existing reminders for this registration
    await this.cancelReminders(event.id, registration.participantEmail);

    for (const reminder of event.notifications.reminders) {
      const reminderKey = `${event.id}-${registration.participantEmail}-${reminder.timeBeforeEvent}`;
      
      // Skip if already sent
      if (reminder.sent || this.sentNotifications.has(reminderKey)) {
        continue;
      }

      const timeBeforeMs = this.parseTimeBeforeEvent(reminder.timeBeforeEvent);
      const reminderTime = new Date(eventDate.getTime() - timeBeforeMs);

      // Only schedule if the reminder time is in the future
      if (reminderTime > now) {
        const timeout = setTimeout(async () => {
          await this.sendReminderNotification(event, registration, reminder.message, reminder.timeBeforeEvent);
          this.sentNotifications.add(reminderKey);
          this.scheduledReminders.delete(reminderKey);
        }, reminderTime.getTime() - now.getTime());

        this.scheduledReminders.set(reminderKey, timeout);
        
        // Log scheduling (in real app, this would be stored in database)
        console.log(`📅 Scheduled reminder for ${registration.participantName} (${registration.participantEmail}) - ${reminder.timeBeforeEvent} before ${event.title}`);
      }
    }
  }

  async sendImmediateNotification(registration: EventRegistration, message: string): Promise<void> {
    // Simulate sending notification
    console.log(`🔔 Immediate notification sent to ${registration.participantName} (${registration.participantEmail}): ${message}`);
    
    // In a real app, this would integrate with:
    // - Email service (SendGrid, AWS SES, etc.)
    // - SMS service (Twilio, AWS SNS, etc.)
    // - Push notifications (Firebase, OneSignal, etc.)
    
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API call
  }

  getNextReminder(event: Event): string | null {
    const eventDate = new Date(`${event.date} ${event.time}`);
    const now = new Date();
    
    // Find the next unsent reminder
    const futureReminders = event.notifications.reminders
      .filter(reminder => !reminder.sent)
      .map(reminder => ({
        ...reminder,
        triggerTime: new Date(eventDate.getTime() - this.parseTimeBeforeEvent(reminder.timeBeforeEvent))
      }))
      .filter(reminder => reminder.triggerTime > now)
      .sort((a, b) => a.triggerTime.getTime() - b.triggerTime.getTime());

    return futureReminders.length > 0 ? futureReminders[0].timeBeforeEvent : null;
  }

  async cancelReminders(eventId: string, participantEmail: string): Promise<void> {
    const keysToRemove: string[] = [];
    
    for (const [key, timeout] of this.scheduledReminders.entries()) {
      if (key.startsWith(`${eventId}-${participantEmail}-`)) {
        clearTimeout(timeout);
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => {
      this.scheduledReminders.delete(key);
      this.sentNotifications.delete(key);
    });
    
    console.log(`❌ Cancelled ${keysToRemove.length} reminders for ${participantEmail} for event ${eventId}`);
  }

  private parseTimeBeforeEvent(timeString: string): number {
    const timeMap: Record<string, number> = {
      '1 minute': 1 * 60 * 1000,
      '5 minutes': 5 * 60 * 1000,
      '15 minutes': 15 * 60 * 1000,
      '30 minutes': 30 * 60 * 1000,
      '1 hour': 60 * 60 * 1000,
      '2 hours': 2 * 60 * 60 * 1000,
      '3 hours': 3 * 60 * 60 * 1000,
      '6 hours': 6 * 60 * 60 * 1000,
      '12 hours': 12 * 60 * 60 * 1000,
      '1 day': 24 * 60 * 60 * 1000,
      '2 days': 2 * 24 * 60 * 60 * 1000,
      '3 days': 3 * 24 * 60 * 60 * 1000,
      '1 week': 7 * 24 * 60 * 60 * 1000,
    };

    return timeMap[timeString] || 60 * 60 * 1000; // Default to 1 hour
  }

  private async sendReminderNotification(
    event: Event, 
    registration: EventRegistration, 
    message: string, 
    timeBeforeEvent: string
  ): Promise<void> {
    const eventDate = new Date(`${event.date} ${event.time}`);
    
    const personalizedMessage = message
      .replace('{participantName}', registration.participantName)
      .replace('{eventTitle}', event.title)
      .replace('{timeUntilEvent}', timeBeforeEvent)
      .replace('{eventDate}', eventDate.toLocaleDateString())
      .replace('{eventTime}', event.time)
      .replace('{eventLocation}', event.location);

    console.log(`⏰ REMINDER SENT: ${personalizedMessage}`);
    
    // Here you would integrate with actual notification services:
    if (registration.notificationPreferences.email) {
      await this.sendEmail(registration.participantEmail, `Reminder: ${event.title}`, personalizedMessage);
    }
    
    if (registration.notificationPreferences.sms) {
      // await this.sendSMS(registration.phoneNumber, personalizedMessage);
    }
    
    if (registration.notificationPreferences.push) {
      // await this.sendPushNotification(registration.deviceToken, event.title, personalizedMessage);
    }
  }

  private async sendEmail(email: string, subject: string, message: string): Promise<void> {
    // Mock email sending - replace with actual email service
    console.log(`📧 Email sent to ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    
    // In production, integrate with:
    // - SendGrid: sgMail.send({ to: email, subject, text: message })
    // - AWS SES: ses.sendEmail({ Destination: { ToAddresses: [email] }, Message: { Subject: { Data: subject }, Body: { Text: { Data: message } } } })
    // - NodeMailer: transporter.sendMail({ to: email, subject, text: message })
  }
}

// Utility functions for countdown display
export const calculateTimeUntilEvent = (eventDate: string, eventTime: string): string => {
  const event = new Date(`${eventDate} ${eventTime}`);
  const now = new Date();
  const diff = event.getTime() - now.getTime();

  if (diff <= 0) return "Event has started!";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

export const getCountdownMessage = (timeUntilEvent: string, eventTitle: string): string => {
  const messages = [
    `🎉 Only ${timeUntilEvent} until ${eventTitle}! Are you ready?`,
    `⏰ ${timeUntilEvent} to go until ${eventTitle} begins!`,
    `🚀 ${eventTitle} starts in ${timeUntilEvent}! Don't miss out!`,
    `📅 Reminder: ${eventTitle} is coming up in ${timeUntilEvent}!`,
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
};

// Create and export the notification service instance
export const notificationService = new MockNotificationService();

// Sample event data with promotional videos
export const sampleEventsWithVideos: Event[] = [
  {
    id: 'workshop-success-strategies',
    title: 'Student Success Strategies Workshop',
    description: 'Join us for an interactive workshop where we\'ll share proven strategies for academic success, time management, and building meaningful connections on campus.',
    date: '2025-07-15',
    time: '14:00',
    location: 'Student Union Building, Room 201',
    type: 'workshop',
    image: '/images/light-on-campus-1.png',
    capacity: 50,
    registered: 35,
    featured: true,
    tags: ['academic success', 'productivity', 'networking'],
    registrationLink: '#register',
    promotionalVideo: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      thumbnail: '/images/light-on-campus-1.png',
      duration: '2:30',
      title: 'Student Success Strategies - Preview',
      description: 'Get a sneak peek at the life-changing strategies we\'ll be sharing!'
    },
    notifications: {
      enabled: true,
      reminders: [
        {
          timeBeforeEvent: '2 days',
          message: 'Hi {participantName}! Just 2 days until our {eventTitle} workshop. We can\'t wait to see you there! 🎓',
          sent: false
        },
        {
          timeBeforeEvent: '1 day',
          message: 'Tomorrow is the big day, {participantName}! {eventTitle} starts at {eventTime} in {eventLocation}. See you there! 🌟',
          sent: false
        },
        {
          timeBeforeEvent: '3 hours',
          message: 'Only 3 hours left, {participantName}! Don\'t forget to bring a notebook to {eventTitle}. We have exciting strategies to share! 📝',
          sent: false
        },
        {
          timeBeforeEvent: '30 minutes',
          message: 'Starting soon! {eventTitle} begins in 30 minutes at {eventLocation}. We\'re ready for you! 🚀',
          sent: false
        }
      ]
    }
  }
];