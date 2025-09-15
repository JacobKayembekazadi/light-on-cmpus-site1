import React, { useState, useMemo } from 'react';
import type { BlogPost, BlogCategory } from '../types';

// Category icons
const StudentLifeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const AcademicIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CareerIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
  </svg>
);

const WellnessIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CampusNewsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const EventsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Blog categories
const blogCategories: BlogCategory[] = [
  {
    id: 'all',
    name: 'All Posts',
    description: 'View all blog posts',
    color: 'electric-mint',
    icon: <div className="text-electric-mint">📚</div>
  },
  {
    id: 'student-life',
    name: 'Student Life',
    description: 'Campus living, friendships, and social experiences',
    color: 'electric-mint',
    icon: <StudentLifeIcon />
  },
  {
    id: 'academic-success',
    name: 'Academic Success',
    description: 'Study tips, time management, and academic strategies',
    color: 'blue',
    icon: <AcademicIcon />
  },
  {
    id: 'career-development',
    name: 'Career Development',
    description: 'Job preparation, internships, and professional growth',
    color: 'amber',
    icon: <CareerIcon />
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'Mental health, physical wellness, and self-care',
    color: 'green',
    icon: <WellnessIcon />
  },
  {
    id: 'campus-news',
    name: 'Campus News',
    description: 'Latest updates and announcements',
    color: 'purple',
    icon: <CampusNewsIcon />
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Upcoming events and recaps',
    color: 'red',
    icon: <EventsIcon />
  }
];

// Sample blog posts with Facebook integration
const sampleBlogPosts: BlogPost[] = [
  {
    id: 'time-management-tips',
    title: 'Master Your Time: 5 Proven Strategies for Student Success',
    excerpt: 'Discover the time management techniques that top-performing students use to balance academics, social life, and personal growth.',
    content: `Time management is one of the most crucial skills you can develop in college. Here are five proven strategies that will transform how you approach your daily schedule...`,
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/light-on-campus-1.png',
      role: 'Academic Success Coach'
    },
    publishDate: '2025-07-10',
    lastModified: '2025-07-10',
    category: 'academic-success',
    tags: ['productivity', 'study-tips', 'time-management'],
    featured: true,
    image: '/images/light-on-campus-1.png',
    readTime: 5,
    likes: 24,
    comments: 8,
    facebookPost: {
      postId: '123456789',
      pageId: 'lightoncampus',
      postUrl: 'https://facebook.com/lightoncampus/posts/123456789',
      embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://facebook.com/lightoncampus/posts/123456789',
      discussionCount: 15,
      reactions: { like: 18, love: 6, haha: 0, wow: 2, sad: 0, angry: 0 }
    }
  },
  {
    id: 'networking-guide',
    title: 'The Ultimate Student Networking Guide: Building Connections That Matter',
    excerpt: 'Learn how to build meaningful professional relationships during your college years that will benefit your career for decades.',
    content: `Networking isn't just about collecting business cards – it's about building genuine relationships...`,
    author: {
      name: 'Michael Chen',
      avatar: '/images/light-on-campus-2.png',
      role: 'Career Development Specialist'
    },
    publishDate: '2025-07-08',
    lastModified: '2025-07-08',
    category: 'career-development',
    tags: ['networking', 'professional-development', 'career-tips'],
    featured: true,
    image: '/images/light-on-campus-2.png',
    readTime: 7,
    likes: 32,
    comments: 12,
    facebookPost: {
      postId: '123456790',
      pageId: 'lightoncampus',
      postUrl: 'https://facebook.com/lightoncampus/posts/123456790',
      embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://facebook.com/lightoncampus/posts/123456790',
      discussionCount: 23,
      reactions: { like: 25, love: 7, haha: 0, wow: 0, sad: 0, angry: 0 }
    }
  },
  {
    id: 'mental-health-awareness',
    title: 'College Mental Health: Recognizing Signs and Finding Support',
    excerpt: 'A comprehensive guide to understanding mental health challenges in college and accessing the resources you need.',
    content: `College can be an exciting but challenging time. It's important to recognize when you might need support...`,
    author: {
      name: 'Dr. Emma Rodriguez',
      avatar: '/images/light-on-campus-3.jpg',
      role: 'Wellness Coordinator'
    },
    publishDate: '2025-07-05',
    lastModified: '2025-07-05',
    category: 'wellness',
    tags: ['mental-health', 'wellness', 'support-resources'],
    featured: false,
    image: '/images/light-on-campus-3.jpg',
    readTime: 8,
    likes: 45,
    comments: 18,
    facebookPost: {
      postId: '123456791',
      pageId: 'lightoncampus',
      postUrl: 'https://facebook.com/lightoncampus/posts/123456791',
      embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://facebook.com/lightoncampus/posts/123456791',
      discussionCount: 31,
      reactions: { like: 30, love: 15, haha: 0, wow: 0, sad: 0, angry: 0 }
    }
  },
  {
    id: 'dorm-life-tips',
    title: '10 Dorm Life Hacks That Will Change Your College Experience',
    excerpt: 'Transform your dorm room into a comfortable, functional space with these creative tips and tricks.',
    content: `Living in a dorm doesn't mean sacrificing comfort or style. Here are our top 10 hacks...`,
    author: {
      name: 'David Kim',
      avatar: '/images/light-on-campus-4.jpg',
      role: 'Resident Advisor'
    },
    publishDate: '2025-07-03',
    lastModified: '2025-07-03',
    category: 'student-life',
    tags: ['dorm-life', 'college-tips', 'student-living'],
    featured: false,
    image: '/images/light-on-campus-4.jpg',
    readTime: 4,
    likes: 19,
    comments: 6,
    facebookPost: {
      postId: '123456792',
      pageId: 'lightoncampus',
      postUrl: 'https://facebook.com/lightoncampus/posts/123456792',
      embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://facebook.com/lightoncampus/posts/123456792',
      discussionCount: 12,
      reactions: { like: 16, love: 3, haha: 0, wow: 0, sad: 0, angry: 0 }
    }
  }
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFacebookComments, setShowFacebookComments] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? sampleBlogPosts 
      : sampleBlogPosts.filter(post => post.category === selectedCategory);

    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (categoryId: string) => {
    const category = blogCategories.find(cat => cat.id === categoryId);
    return category?.color || 'electric-mint';
  };

  const toggleFacebookComments = (postId: string) => {
    setShowFacebookComments(showFacebookComments === postId ? null : postId);
  };

  return (
    <section id="blog" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 -mx-4 md:-mx-6 px-4 md:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-electric-mint/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-electric-mint/3 to-amber/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
            Light on Campus
            <span className="block bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
              Blog & Discussions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Discover insights, tips, and stories from our community. Join the conversation on Facebook and share your experiences!
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 px-4">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-2xl border border-gray-200 focus:border-electric-mint focus:ring-2 focus:ring-electric-mint/20 outline-none transition-all duration-300 bg-white shadow-lg"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-electric-mint text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16 px-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8 text-midnight-ink">
              ⭐ Featured Posts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  {/* Post Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      getCategoryColor(post.category) === 'electric-mint' ? 'bg-electric-mint' :
                      getCategoryColor(post.category) === 'amber' ? 'bg-amber' :
                      getCategoryColor(post.category) === 'blue' ? 'bg-blue-500' :
                      getCategoryColor(post.category) === 'green' ? 'bg-green-500' :
                      getCategoryColor(post.category) === 'purple' ? 'bg-purple-500' :
                      'bg-red-500'
                    }`}>
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber to-electric-mint text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 md:p-8">
                    {/* Author & Date */}
                    <div className="flex items-center mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold text-sm text-midnight-ink">{post.author.name}</p>
                        <p className="text-xs text-gray-600">{formatDate(post.publishDate)} • {post.readTime} min read</p>
                      </div>
                    </div>

                    {/* Post Title & Excerpt */}
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-midnight-ink mb-3 group-hover:text-electric-mint transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Post Stats & Facebook Integration */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          {post.comments}
                        </span>
                      </div>
                      
                      {/* Facebook Discussion Link */}
                      {post.facebookPost && (
                        <button
                          onClick={() => toggleFacebookComments(post.id)}
                          className="flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs hover:bg-blue-700 transition-colors duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>Join Discussion ({post.facebookPost.discussionCount})</span>
                        </button>
                      )}
                    </div>

                    {/* Facebook Comments Embed */}
                    {showFacebookComments === post.id && post.facebookPost && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="font-semibold text-sm text-gray-700 mb-3">Facebook Discussion</h4>
                          <div className="bg-white rounded-lg p-3 text-center">
                            <p className="text-sm text-gray-600 mb-2">
                              Join the conversation on our Facebook page!
                            </p>
                            <a
                              href={post.facebookPost.postUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300"
                            >
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                              View on Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="px-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8 text-midnight-ink">
              📚 Latest Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                    index % 2 === 0 ? 'md:mt-8' : ''
                  }`}
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      getCategoryColor(post.category) === 'electric-mint' ? 'bg-electric-mint' :
                      getCategoryColor(post.category) === 'amber' ? 'bg-amber' :
                      getCategoryColor(post.category) === 'blue' ? 'bg-blue-500' :
                      getCategoryColor(post.category) === 'green' ? 'bg-green-500' :
                      getCategoryColor(post.category) === 'purple' ? 'bg-purple-500' :
                      'bg-red-500'
                    }`}>
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Author & Date */}
                    <div className="flex items-center mb-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="font-semibold text-xs text-midnight-ink">{post.author.name}</p>
                        <p className="text-xs text-gray-600">{formatDate(post.publishDate)} • {post.readTime} min</p>
                      </div>
                    </div>

                    {/* Post Title & Excerpt */}
                    <h3 className="font-serif text-lg font-bold text-midnight-ink mb-2 group-hover:text-electric-mint transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Post Stats & Facebook Integration */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-3 text-xs text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          {post.comments}
                        </span>
                      </div>
                      
                      {/* Facebook Discussion Link */}
                      {post.facebookPost && (
                        <button
                          onClick={() => toggleFacebookComments(post.id)}
                          className="flex items-center space-x-1 px-2 py-1 bg-blue-600 text-white rounded-full text-xs hover:bg-blue-700 transition-colors duration-300"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>({post.facebookPost.discussionCount})</span>
                        </button>
                      )}
                    </div>

                    {/* Facebook Comments Embed for Regular Posts */}
                    {showFacebookComments === post.id && post.facebookPost && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <p className="text-xs text-gray-600 mb-2">
                            Join the Facebook discussion!
                          </p>
                          <a
                            href={post.facebookPost.postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition-colors duration-300"
                          >
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            View Discussion
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="font-serif text-2xl font-bold text-gray-700 mb-2">No Posts Found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20 px-4">
          <div className="bg-gradient-to-r from-electric-mint/10 via-white to-amber/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-100 shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-midnight-ink">
              Join Our Community
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Follow us on Facebook for daily discussions, live Q&As, and exclusive content. 
              Your voice matters in our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://facebook.com/lightoncampus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>
              <button className="px-8 py-4 bg-gradient-to-r from-electric-mint to-amber text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                Submit a Blog Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;