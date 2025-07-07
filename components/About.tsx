
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
        <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 -mx-4 md:-mx-6 px-4 md:px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-electric-mint/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main title with dynamic styling */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
                        More Than an Organization. 
                        <span className="block bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
                            A Community.
                        </span>
                    </h2>
                    
                    {/* Hero image with modern styling */}
                    <div className="relative mb-8 px-4 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-mint to-amber opacity-20 rounded-2xl transform rotate-1"></div>
                        <img 
                            src="/images/our-community.jpg" 
                            alt="Our Community - Light on Campus students together"
                            className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96 lg:h-[28rem] transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                {/* Description with better layout */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 px-4">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
                        Light on Campus began with a simple idea: college should be about more than just lectures and exams. We saw a need for a space where students could find practical life skills, genuine support, and a community that cheers them on. That's why we're here—a student-run organization dedicated to helping you navigate every part of campus life with confidence and joy.
                    </p>
                </div>

                {/* Core Values - Enhanced for maximum visual impact */}
                <div className="mb-16 md:mb-20">
                    <div className="text-center mb-12 md:mb-16">
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
                            Our Core Values Guide 
                            <span className="block bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">
                                Everything We Do
                            </span>
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                            These five pillars shape every program, decision, and interaction within our community
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4">
                        {coreValues.map((value, index) => (
                            <div 
                                key={value.name} 
                                className={`group relative bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-2 ${
                                    value.color === 'electric-mint' 
                                        ? 'border-electric-mint/20 hover:border-electric-mint/50' 
                                        : 'border-amber/20 hover:border-amber/50'
                                } ${index % 2 === 0 ? 'md:mt-6 lg:mt-8' : ''}`}
                            >
                                {/* Animated background blob */}
                                <div className={`absolute -top-2 -right-2 w-16 h-16 md:w-20 md:h-20 ${
                                    value.color === 'electric-mint' ? 'bg-electric-mint/10' : 'bg-amber/10'
                                } rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-150`}></div>
                                
                                {/* Pulse effect on hover */}
                                <div className={`absolute inset-0 rounded-2xl ${
                                    value.color === 'electric-mint' ? 'bg-electric-mint/5' : 'bg-amber/5'
                                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Enhanced icon container */}
                                    <div className={`rounded-2xl p-3 md:p-4 mb-3 md:mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${
                                        value.color === 'electric-mint' 
                                            ? 'bg-gradient-to-br from-electric-mint/20 via-electric-mint/30 to-electric-mint/20 text-electric-mint shadow-lg shadow-electric-mint/20' 
                                            : 'bg-gradient-to-br from-amber/20 via-amber/30 to-amber/20 text-amber shadow-lg shadow-amber/20'
                                    } group-hover:shadow-2xl`}>
                                        <div className="transform transition-transform duration-500 group-hover:scale-110">
                                            {value.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced text with gradient on hover */}
                                    <h4 className={`font-bold text-sm md:text-base lg:text-lg transition-all duration-300 ${
                                        value.color === 'electric-mint' 
                                            ? 'text-gray-800 group-hover:text-electric-mint' 
                                            : 'text-gray-800 group-hover:text-amber'
                                    }`}>
                                        {value.name}
                                    </h4>
                                    
                                    {/* Animated bottom accent */}
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-500 ${
                                        value.color === 'electric-mint' ? 'bg-electric-mint' : 'bg-amber'
                                    } w-0 group-hover:w-3/4`}></div>
                                </div>
                                
                                {/* Corner decoration */}
                                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                                    value.color === 'electric-mint' ? 'bg-electric-mint/30' : 'bg-amber/30'
                                } opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200`}></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Additional decorative elements */}
                    <div className="flex justify-center mt-8 md:mt-12 space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div 
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i < 3 ? 'bg-electric-mint/40' : 'bg-amber/40'
                                } hover:scale-150`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Second image with creative layout */}
                <div className="mb-16 md:mb-20">
                    <div className="relative px-4 group">
                        <div className="absolute inset-0 bg-gradient-to-l from-electric-mint to-amber opacity-20 rounded-2xl transform -rotate-1"></div>
                        <img 
                            src="/images/more-than-an-org-1.jpg" 
                            alt="More than an organization - Light on Campus community in action"
                            className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96 lg:h-[28rem] transform transition-all duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                {/* Vision/Mission cards with modern design */}
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="group relative bg-gradient-to-br from-electric-mint/10 to-electric-mint/5 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-electric-mint/20">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-mint/10 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-mint/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-electric-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-electric-mint">Our Vision</h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    To light every campus with confident, well-rounded graduates ready to make their mark on the world.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-gradient-to-br from-amber/10 to-amber/5 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-amber/20">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-amber">Our Mission</h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    To equip students with practical life skills, emotional resilience, and a supportive peer network through engaging programs and expert content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
