
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative text-white text-center py-16 md:py-32 lg:py-48 min-h-screen flex items-center justify-center overflow-hidden">
            <img
                src="/images/light-on-campus-6.png"
                alt="Students on campus"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%] scale-105 transform transition-transform duration-1000"
                aria-hidden="true"
                loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" aria-hidden="true"></div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
                        <span className="bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">IGNITING PURPOSE</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2 drop-shadow-md">
                        Your go-to companion for <span className="text-electric-mint font-semibold">academic success</span>, 
                        <span className="text-amber font-semibold"> personal growth</span>, and 
                        <span className="text-electric-mint font-semibold"> professional readiness</span>
                    </p>
                    <a href="#offerings" className="bg-gradient-to-r from-electric-mint to-amber text-midnight-ink font-bold py-3 px-6 md:py-4 md:px-10 rounded-full text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block">
                        Explore Our Offerings
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
