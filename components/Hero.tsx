
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative text-white text-center py-32 md:py-48 min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/light-on-campus-6.png')"}} aria-hidden="true"></div>
            <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
            <div className="relative z-10 container mx-auto px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">Thrive in Your Campus Journey</h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed">Your go-to companion for academic success, personal growth, and professional readiness. Join a vibrant community of students just like you.</p>
                <a href="#offerings" className="bg-amber text-midnight-ink font-bold py-4 px-10 rounded-lg text-xl hover:bg-electric-mint transition-colors inline-block shadow-lg">Explore Our Offerings</a>
            </div>
        </section>
    );
};

export default Hero;
