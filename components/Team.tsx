import React from 'react';
import type { TeamMember } from '../types';

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Sample team data - replace with actual team member information
const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "President & Founder",
    bio: "A passionate leader dedicated to creating inclusive spaces where every student can thrive. Currently studying Business Administration with a focus on nonprofit management.",
    image: "/images/light-on-campus-1.png", // Using placeholder for now
    linkedIn: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@lightoncampus.org"
  },
  {
    name: "Michael Chen",
    role: "Vice President",
    bio: "Computer Science major with a heart for community building. Leads our tech initiatives and mentorship programs with creativity and dedication.",
    image: "/images/light-on-campus-2.png", // Using placeholder for now
    linkedIn: "https://linkedin.com/in/michaelchen",
    email: "michael@lightoncampus.org"
  },
  {
    name: "Emma Rodriguez",
    role: "Programs Director",
    bio: "Psychology major passionate about student wellness and personal development. Coordinates our workshops and support programs with empathy and innovation.",
    image: "/images/light-on-campus-3.jpg", // Using placeholder for now
    linkedIn: "https://linkedin.com/in/emmarodriguez",
    email: "emma@lightoncampus.org"
  },
  {
    name: "David Kim",
    role: "Community Outreach",
    bio: "Marketing major who believes in the power of connection. Builds bridges between our organization and the broader campus community.",
    image: "/images/light-on-campus-4.jpg", // Using placeholder for now
    linkedIn: "https://linkedin.com/in/davidkim",
    email: "david@lightoncampus.org"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white -mx-4 md:-mx-6 px-4 md:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-amber/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-mint/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-electric-mint/3 to-amber/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
            Meet the Team
            <span className="block bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
              Behind the Magic
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Our dedicated team of student leaders brings diverse backgrounds, unique perspectives, and a shared passion for making campus life extraordinary.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group relative bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 ${
                index % 2 === 0 ? 'md:mt-8' : 'lg:mt-12'
              }`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-electric-mint/5 via-electric-mint/10 to-transparent' 
                  : 'bg-gradient-to-br from-amber/5 via-amber/10 to-transparent'
              }`}></div>
              
              {/* Floating accent circle */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 ${
                index % 2 === 0 ? 'bg-electric-mint/10' : 'bg-amber/10'
              } rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-150`}></div>
              
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6 group/image">
                  <div className={`absolute inset-0 rounded-2xl ${
                    index % 2 === 0 ? 'bg-gradient-to-br from-electric-mint/20 to-electric-mint/10' : 'bg-gradient-to-br from-amber/20 to-amber/10'
                  } transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}></div>
                  
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="relative w-full h-48 md:h-56 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-midnight-ink mb-2 group-hover:text-electric-mint transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm md:text-base font-semibold mb-3 ${
                    index % 2 === 0 ? 'text-electric-mint' : 'text-amber'
                  }`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Connect with ${member.name} on LinkedIn`}
                      className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                        index % 2 === 0 
                          ? 'bg-electric-mint/10 text-electric-mint hover:bg-electric-mint hover:text-white shadow-lg shadow-electric-mint/20' 
                          : 'bg-amber/10 text-amber hover:bg-amber hover:text-white shadow-lg shadow-amber/20'
                      }`}
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      title={`Email ${member.name}`}
                      className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                        index % 2 === 0 
                          ? 'bg-electric-mint/10 text-electric-mint hover:bg-electric-mint hover:text-white shadow-lg shadow-electric-mint/20' 
                          : 'bg-amber/10 text-amber hover:bg-amber hover:text-white shadow-lg shadow-amber/20'
                      }`}
                    >
                      <EmailIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-electric-mint/10 via-white to-amber/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-100 shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-midnight-ink">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students who want to make a difference. 
              Discover leadership opportunities and help us build an even stronger community.
            </p>
            <button className="bg-gradient-to-r from-electric-mint to-amber text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
