
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#offerings', text: 'What We Offer' },
        { href: '#about', text: 'About Us' },
        { href: '#team', text: 'Meet the Team' },
        { href: '#events', text: 'Events' },
        { href: '#blog', text: 'Blog' },
        { href: '#contact', text: 'Contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-3 md:py-4 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2" aria-label="Light on Campus home">
                    <img
                        src="/images/light-on-campus-no-bg.png"
                        alt="Light on Campus logo"
                        className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto"
                        loading="eager"
                    />
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="hover:text-electric-mint transition-colors">{link.text}</a>
                    ))}
                </div>
                <a href="#contact" className="hidden md:inline-block bg-electric-mint text-midnight-ink font-bold py-2 px-4 rounded-lg hover:bg-amber transition-colors">Get Involved</a>
                <button 
                    id="mobile-menu-button" 
                    className="md:hidden text-midnight-ink" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    title="Toggle mobile menu"
                    aria-label="Toggle mobile menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>
            {/* Mobile Menu */}
            <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
                {navLinks.map(link => (
                     <a key={link.href} href={link.href} className="block py-2 hover:text-electric-mint" onClick={() => setIsMenuOpen(false)}>{link.text}</a>
                ))}
                <a href="#contact" className="block mt-2 bg-electric-mint text-center text-midnight-ink font-bold py-2 px-4 rounded-lg hover:bg-amber" onClick={() => setIsMenuOpen(false)}>Get Involved</a>
            </div>
        </header>
    );
};

export default Header;
