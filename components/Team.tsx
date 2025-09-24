import React from 'react';

// Minimal Team section keeping ONLY the original recruitment card as requested.

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white -mx-4 md:-mx-6 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle decorative background for continuity */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-mint/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-electric-mint/10 to-amber/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <div className="bg-gradient-to-r from-electric-mint/10 via-white to-amber/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-100 shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-midnight-ink">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students who want to make a difference. 
              Discover leadership opportunities and help us build an even stronger community.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-electric-mint to-amber text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric-mint/60"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
