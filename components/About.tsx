
import React from 'react';
import type { CoreValue } from '../types';

const InclusivityIcon = () => <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.968 0M12 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 12.75a9 9 0 01-7.071-4.434 9 9 0 0114.142 0A9 9 0 0112 12.75z" /></svg>;
const GrowthIcon = () => <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 18l-3.75-2.25m0 0l-3.75 2.25M15 12l3.75 2.25" /></svg>;
const IntegrityIcon = () => <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const ServiceIcon = () => <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
const JoyIcon = () => <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" /></svg>;

const coreValues: CoreValue[] = [
    { name: 'Inclusivity', icon: <InclusivityIcon />, color: 'electric-mint' },
    { name: 'Growth', icon: <GrowthIcon />, color: 'amber' },
    { name: 'Integrity', icon: <IntegrityIcon />, color: 'electric-mint' },
    { name: 'Service', icon: <ServiceIcon />, color: 'amber' },
    { name: 'Joy', icon: <JoyIcon />, color: 'electric-mint' },
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-8 md:py-16 bg-gray-100 -mx-6 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">More Than an Organization. A Community.</h2>
                
                {/* Community Image */}
                <div className="mb-6 md:mb-8 px-4">
                    <img 
                        src="/images/our-community.jpg" 
                        alt="Our Community - Light on Campus students together"
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover h-48 sm:h-64 md:h-80 lg:h-96"
                    />
                </div>

                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed">
                    Light on Campus began with a simple idea: college should be about more than just lectures and exams. We saw a need for a space where students could find practical life skills, genuine support, and a community that cheers them on. That's why we're here—a student-run organization dedicated to helping you navigate every part of campus life with confidence and joy.
                </p>

                <h3 className="font-serif text-xl md:text-2xl font-bold mb-6 md:mb-8 px-4">Our Core Values Guide Everything We Do</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 text-center mb-8 md:mb-12 px-4">
                    {coreValues.map((value) => (
                        <div key={value.name} className="flex flex-col items-center">
                            <div className={`rounded-full p-3 md:p-4 mb-2 md:mb-3 ${value.color === 'electric-mint' ? 'bg-electric-mint/20 text-electric-mint' : 'bg-amber/20 text-amber'}`}>
                                {value.icon}
                            </div>
                            <h4 className="font-bold text-sm md:text-base">{value.name}</h4>
                        </div>
                    ))}
                </div>

                {/* More Than an Organization Image */}
                <div className="mb-8 md:mb-12 px-4">
                    <img 
                        src="/images/more-than-an-org-1.jpg" 
                        alt="More than an organization - Light on Campus community in action"
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover h-48 sm:h-64 md:h-80 lg:h-96"
                    />
                </div>

                <div className="space-y-6 md:space-y-8 md:space-y-0 md:flex md:space-x-8 text-left bg-white p-4 md:p-8 rounded-lg shadow-md mx-4">
                    <div className="md:w-1/2">
                        <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-electric-mint">Our Vision</h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">To light every campus with confident, well-rounded graduates ready to make their mark on the world.</p>
                    </div>
                    <div className="md:w-1/2 border-t-2 md:border-t-0 md:border-l-2 border-gray-200 pt-6 md:pt-0 md:pl-8">
                        <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-amber">Our Mission</h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">To equip students with practical life skills, emotional resilience, and a supportive peer network through engaging programs and expert content.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
