// Facebook Integration Service for Light on Campus Blog
// This service handles Facebook page integration for blog discussions

// Extend Window interface to include Facebook SDK
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export interface FacebookPost {
  id: string;
  message: string;
  created_time: string;
  permalink_url: string;
  likes?: {
    summary: {
      total_count: number;
    };
  };
  comments?: {
    summary: {
      total_count: number;
    };
    data?: FacebookComment[];
  };
  reactions?: {
    summary: {
      total_count: number;
    };
  };
}

export interface FacebookComment {
  id: string;
  message: string;
  created_time: string;
  from: {
    name: string;
    id: string;
  };
  like_count?: number;
}

export interface FacebookPageInfo {
  id: string;
  name: string;
  access_token?: string;
}

class FacebookService {
  // Using numeric profile/page ID provided instead of vanity username
  private pageId: string = '100084610977889';

  constructor() {
    // In production, this would come from environment variables
    // this.accessToken = process.env.FACEBOOK_ACCESS_TOKEN || '';
  }

  /**
   * Initialize Facebook SDK and authenticate
   */
  async initializeFacebookSDK(): Promise<void> {
    return new Promise((resolve) => {
      // Load Facebook SDK
      if (typeof window !== 'undefined' && !window.FB) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: process.env.FACEBOOK_APP_ID || 'your-app-id',
            cookie: true,
            xfbml: true,
            version: 'v18.0'
          });
          resolve();
        };
        
        document.head.appendChild(script);
      } else {
        resolve();
      }
    });
  }

  /**
   * Get posts from Light on Campus Facebook page
   */
  async getPagePosts(_limit: number = 10): Promise<FacebookPost[]> {
    try {
      // In production, this would make an actual API call
      // For now, return mock data that matches our blog posts
      return this.getMockFacebookPosts();
    } catch (error) {
      console.error('Error fetching Facebook posts:', error);
      return [];
    }
  }

  /**
   * Get a specific Facebook post by ID
   */
  async getPost(postId: string): Promise<FacebookPost | null> {
    try {
      // In production, this would make an actual API call
      const mockPosts = this.getMockFacebookPosts();
      return mockPosts.find(post => post.id === postId) || null;
    } catch (error) {
      console.error('Error fetching Facebook post:', error);
      return null;
    }
  }

  /**
   * Get comments for a specific post
   */
  async getPostComments(postId: string, _limit: number = 25): Promise<FacebookComment[]> {
    try {
      // In production, this would make an actual API call
      return this.getMockComments(postId);
    } catch (error) {
      console.error('Error fetching post comments:', error);
      return [];
    }
  }

  /**
   * Generate Facebook embed URL for a post
   */
  getPostEmbedUrl(postUrl: string): string {
    const encodedUrl = encodeURIComponent(postUrl);
    return `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500`;
  }

  /**
   * Generate Facebook comments plugin URL
   */
  getCommentsPluginUrl(postUrl: string): string {
    const encodedUrl = encodeURIComponent(postUrl);
    return `https://www.facebook.com/plugins/comments.php?href=${encodedUrl}&width=500&numposts=5`;
  }

  /**
   * Check if a blog post has an associated Facebook discussion
   */
  hasFacebookDiscussion(blogPostId: string): boolean {
    const mockPosts = this.getMockFacebookPosts();
    return mockPosts.some(post => post.id.includes(blogPostId));
  }

  /**
   * Get Facebook page URL
   */
  getPageUrl(): string {
    return `https://www.facebook.com/profile.php?id=${this.pageId}`;
  }

  /**
   * Generate direct link to create a new post about a blog article
   */
  getShareUrl(blogTitle: string, blogUrl: string): string {
    const text = encodeURIComponent(`Check out this great article: ${blogTitle}`);
    const url = encodeURIComponent(blogUrl);
    return `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
  }

  /**
   * Mock Facebook posts data (for development and demonstration)
   * In production, this would be replaced with actual API calls
   */
  private getMockFacebookPosts(): FacebookPost[] {
    return [
      {
        id: '123456789',
        message: '🎯 Time management is crucial for student success! Check out our latest blog post with 5 proven strategies that top-performing students use. What\'s your best time management tip? Share in the comments! 👇 #StudentSuccess #TimeManagement #LightOnCampus',
        created_time: '2025-07-10T10:00:00Z',
  permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=123456789&id=100084610977889',
        likes: {
          summary: {
            total_count: 18
          }
        },
        comments: {
          summary: {
            total_count: 15
          }
        },
        reactions: {
          summary: {
            total_count: 26
          }
        }
      },
      {
        id: '123456790',
        message: '🤝 Networking isn\'t just about collecting business cards – it\'s about building genuine relationships! Our new blog post breaks down how to network effectively as a student. What\'s been your best networking experience? #Networking #CareerDevelopment #StudentLife',
        created_time: '2025-07-08T14:30:00Z',
  permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=123456790&id=100084610977889',
        likes: {
          summary: {
            total_count: 25
          }
        },
        comments: {
          summary: {
            total_count: 23
          }
        },
        reactions: {
          summary: {
            total_count: 32
          }
        }
      },
      {
        id: '123456791',
        message: '💚 Your mental health matters! College can be challenging, but you don\'t have to face it alone. Check out our comprehensive guide to mental health resources and support. Remember: it\'s okay to ask for help. 🤗 #MentalHealth #Wellness #StudentSupport',
        created_time: '2025-07-05T16:45:00Z',
  permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=123456791&id=100084610977889',
        likes: {
          summary: {
            total_count: 30
          }
        },
        comments: {
          summary: {
            total_count: 31
          }
        },
        reactions: {
          summary: {
            total_count: 45
          }
        }
      },
      {
        id: '123456792',
        message: '🏠 Dorm life doesn\'t have to be cramped and uncomfortable! Check out our top 10 dorm hacks that will transform your space. Which hack surprised you the most? Share your own dorm tips below! #DormLife #StudentLiving #CollegeTips',
        created_time: '2025-07-03T12:15:00Z',
  permalink_url: 'https://www.facebook.com/permalink.php?story_fbid=123456792&id=100084610977889',
        likes: {
          summary: {
            total_count: 16
          }
        },
        comments: {
          summary: {
            total_count: 12
          }
        },
        reactions: {
          summary: {
            total_count: 19
          }
        }
      }
    ];
  }

  /**
   * Mock comments data for development
   */
  private getMockComments(postId: string): FacebookComment[] {
    const commentSets: Record<string, FacebookComment[]> = {
      '123456789': [
        {
          id: 'comment_1',
          message: 'Great tips! I especially love the Pomodoro Technique. It\'s been a game-changer for my study sessions! 🍅',
          created_time: '2025-07-10T11:00:00Z',
          from: {
            name: 'Sarah M.',
            id: 'user_1'
          },
          like_count: 5
        },
        {
          id: 'comment_2',
          message: 'Time blocking has saved my life! I now schedule everything, even my breaks. Thanks for sharing these strategies!',
          created_time: '2025-07-10T12:30:00Z',
          from: {
            name: 'Mike Chen',
            id: 'user_2'
          },
          like_count: 3
        },
        {
          id: 'comment_3',
          message: 'The two-minute rule is so simple but so effective. If it takes less than 2 minutes, just do it immediately!',
          created_time: '2025-07-10T14:15:00Z',
          from: {
            name: 'Emma Rodriguez',
            id: 'user_3'
          },
          like_count: 7
        }
      ],
      '123456790': [
        {
          id: 'comment_4',
          message: 'I met my current mentor at a career fair! Sometimes the most casual conversations lead to the best opportunities.',
          created_time: '2025-07-08T15:00:00Z',
          from: {
            name: 'David Kim',
            id: 'user_4'
          },
          like_count: 8
        },
        {
          id: 'comment_5',
          message: 'LinkedIn has been amazing for connecting with professionals in my field. Great advice in this post!',
          created_time: '2025-07-08T16:45:00Z',
          from: {
            name: 'Jessica Liu',
            id: 'user_5'
          },
          like_count: 4
        }
      ]
    };

    return commentSets[postId] || [];
  }

  /**
   * Simulate posting a comment (for development)
   */
  async postComment(postId: string, message: string): Promise<boolean> {
    try {
      // In production, this would make an actual API call
      console.log(`Posting comment to ${postId}: ${message}`);
      return true;
    } catch (error) {
      console.error('Error posting comment:', error);
      return false;
    }
  }

  /**
   * Simulate liking a post (for development)
   */
  async likePost(postId: string): Promise<boolean> {
    try {
      // In production, this would make an actual API call
      console.log(`Liking post: ${postId}`);
      return true;
    } catch (error) {
      console.error('Error liking post:', error);
      return false;
    }
  }
}

// Export singleton instance
export const facebookService = new FacebookService();

// Utility functions for Facebook integration
export const FacebookUtils = {
  /**
   * Format Facebook timestamp to readable date
   */
  formatFacebookDate: (timestamp: string): string => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  /**
   * Truncate Facebook post message for display
   */
  truncateMessage: (message: string, maxLength: number = 150): string => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength).trim() + '...';
  },

  /**
   * Extract hashtags from Facebook post
   */
  extractHashtags: (message: string): string[] => {
    const hashtagRegex = /#[\w]+/g;
    return message.match(hashtagRegex) || [];
  },

  /**
   * Get reaction emoji by type
   */
  getReactionEmoji: (reactionType: string): string => {
    const reactionMap: Record<string, string> = {
      'LIKE': '👍',
      'LOVE': '❤️',
      'HAHA': '😂',
      'WOW': '😮',
      'SAD': '😢',
      'ANGRY': '😠'
    };
    return reactionMap[reactionType] || '👍';
  }
};

export default facebookService;