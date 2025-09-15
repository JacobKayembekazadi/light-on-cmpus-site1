
import React from 'react';
import type { Offering } from '../types';

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
    },
];

const OfferingCard: React.FC<{ offering: Offering }> = ({ offering }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
        {/* Gradient overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-mint/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        <div className="relative h-48 sm:h-56 overflow-hidden">
            <img 
                src={offering.image} 
                alt={offering.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-electric-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
        
        <div className="relative z-20 p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-midnight-ink group-hover:text-electric-mint transition-colors duration-300">
                {offering.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                {offering.description}
            </p>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-electric-mint to-amber w-0 group-hover:w-full transition-all duration-500"></div>
        </div>
    </div>
);


const Offerings: React.FC = () => {
    return (
        <section id="offerings" className="py-12 md:py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-electric-mint/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
                <div className="text-center mb-12 md:mb-16 px-4">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        What We 
                        <span className="bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent"> Offer</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover programs designed to empower your journey through college and beyond
                    </p>
                </div>
                
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {offeringsData.map((offering, index) => (
                            <div 
                                key={offering.title}
                                className={`${index % 3 === 1 ? 'lg:mt-8' : ''} animate-fade-in`}
                            >
                                <OfferingCard offering={offering} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;
