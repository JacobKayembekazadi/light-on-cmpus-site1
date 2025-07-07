
import React from 'react';
import type { Offering } from '../types';

const offeringsData: Offering[] = [
    {
        title: "Love, Dating & Relationships",
        description: "Learn respectful communication, consent, and how to build healthy boundaries.",
        image: "/images/light-on-campus-2.png"
    },
    {
        title: "Dining & Workplace Etiquette",
        description: "Master formal and casual settings, from the dining room to the office.",
        image: "/images/light-on-campus-3.jpg"
    },
    {
        title: "Job Preparedness Training",
        description: "CV clinics, mock interviews, and LinkedIn audits to land your dream job.",
        image: "/images/light-on-campus-4.jpg"
    },
    {
        title: "Financial Fitness Series",
        description: "Master budgeting, student investing, and managing debt effectively.",
        image: "/images/light-on-campus-5.jpg"
    },
    {
        title: "Leadership & Public-Speaking",
        description: "Build confidence and command the room with our bootcamps and debate clubs.",
        image: "/images/lighton-campus-blog-1.jpg"
    },
    {
        title: "Guided Educational Tours",
        description: "Experience learning outside the classroom with 'edutainment' trips.",
        image: "/images/lighton-campus-blog-2.jpg"
    },
];

const OfferingCard: React.FC<{ offering: Offering }> = ({ offering }) => (
    <div className="bg-white rounded-lg shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="relative h-40 sm:h-48 overflow-hidden">
            <img 
                src={offering.image} 
                alt={offering.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="p-4 md:p-6">
            <h3 className="font-serif text-lg md:text-xl font-bold mb-2 md:mb-3 text-midnight-ink">{offering.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{offering.description}</p>
        </div>
    </div>
);


const Offerings: React.FC = () => {
    return (
        <section id="offerings" className="py-8 md:py-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 px-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
                {offeringsData.map((offering) => (
                    <OfferingCard key={offering.title} offering={offering} />
                ))}
            </div>
        </section>
    );
};

export default Offerings;
