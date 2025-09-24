
import React from 'react';
import type { Offering } from '../types';

// Core development & life skills offerings
const offeringsData: Offering[] = [
    {
        title: "Love, Dating & Relationships",
        description: "Learn respectful communication, consent, and how to build healthy boundaries.",
        image: "/images/light-on-campus-2.png"
    },
    {
        title: "Personal Branding & Etiquette",
        description: "Dining etiquette, communication skills, public speaking, and professional presence for every setting.",
        image: "/images/light-on-campus-3.jpg"
    },
    {
        title: "Getting Ready for Employment",
        description: "CV clinics, mock interviews, and LinkedIn audits to land your dream job.",
        image: "/images/light-on-campus-4.jpg"
    },
    {
        title: "Let's Talk About Money",
        description: "Master budgeting, student investing, and managing debt effectively.",
        image: "/images/light-on-campus-5.jpg"
    },
    {
        title: "Leadership Training",
        description: "Build confidence and command the room with our leadership bootcamps and debate clubs.",
        image: "/images/lighton-campus-blog-1.jpg"
    },
    {
        title: "Guided Educational Tours",
        description: "Experience learning outside the classroom with 'edutainment' trips.",
        image: "/images/lighton-campus-blog-2.jpg"
    }
];

// Spiritual development offerings (renamed per request)
const spiritualOfferings: Offering[] = [
    {
        title: "Prayer",
        description: "Find peace and purpose through prayer groups, spiritual mentorship, and faith-based community.",
        image: "/images/light-on-campus-6.png"
    },
    {
        title: "Counselling",
        description: "Professional counselling services and peer support for emotional and mental well-being.",
        image: "/images/our-community.jpg"
    },
    {
        title: "Bible Study",
        description: "Dive deep into scripture through guided Bible studies, discussions, and spiritual growth sessions.",
        image: "/images/more-than-an-org-1.jpg"
    }
];

const OfferingCard: React.FC<{ offering: Offering }> = ({ offering }) => (
    <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="relative h-48 sm:h-56 overflow-hidden">
            <img 
                src={offering.image} 
                alt={offering.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-6 md:p-7">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-midnight-ink">
                {offering.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {offering.description}
            </p>
        </div>
    </div>
);


const Offerings: React.FC = () => {
    return (
        <section id="offerings" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="text-center mb-12 md:mb-14">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        What We 
                        <span className="bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent"> Offer</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover programs designed to empower your journey through college and beyond
                    </p>
                </div>
                {/* General Offerings */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {offeringsData.map((offering, index) => (
                        <div
                            key={offering.title}
                            className={`${index % 3 === 1 ? 'lg:mt-6' : ''}`}
                        >
                            <OfferingCard offering={offering} />
                        </div>
                    ))}
                </div>

                {/* Spiritual Development Section */}
                <div className="mt-16 md:mt-20">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-midnight-ink">
                        Spiritual <span className="bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">Development</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {spiritualOfferings.map((offering, index) => (
                            <div
                                key={offering.title}
                                className={`${index % 3 === 1 ? 'lg:mt-6' : ''}`}
                            >
                                <OfferingCard offering={offering} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 md:mt-20">
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-midnight-ink">
                            Looking for a Church?
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                            Connect with a local church community that aligns with your values and supports your spiritual journey during college and beyond.
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-electric-mint to-amber text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
                            Find a Church Near You
                        </button>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Offerings;
