
import React, { useState } from 'react';
import { generateContactReply } from '../services/geminiService';

const LinkedInIcon = () => <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const InstagramIcon = () => <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>;
const TikTokIcon = () => <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.38 1.92-3.54 2.96-5.83 2.96-2.43 0-4.66-1.11-6.2-2.96-1.52-1.83-2.1-4.24-1.9-6.6.24-2.55 1.88-4.68 4-5.85.88-.49 1.83-.82 2.81-1.01.08-2.54.02-5.08.01-7.63.01-1.43.53-2.86 1.34-4.01.83-1.16 2.01-1.9 3.33-2.11.12-.01.24-.01.36-.01z"/></svg>;


const Footer: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [apiResponse, setApiResponse] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setApiResponse(null);

        if (!formData.message.trim() || !formData.name.trim() || !formData.email.trim()) {
            setError("Please fill out all fields before sending.");
            setIsLoading(false);
            return;
        }

        try {
            const reply = await generateContactReply(formData.message);
            setApiResponse(reply);
            setFormData({ name: '', email: '', message: '' }); // Clear form on success
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
            setError(`Sorry, something went wrong. Please try again later or email us directly. (Error: ${errorMessage})`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <footer id="contact" className="bg-midnight-ink text-warm-white mt-12">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Have questions, want to partner with us, or just say hello? We'd love to hear from you. Reach out through the form below or connect with us on social media.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-4">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full rounded-lg p-3 bg-[#333] border border-[#444] text-warm-white focus:ring-2 focus:ring-electric-mint focus:outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="your.email@campus.edu" value={formData.email} onChange={handleChange} className="w-full rounded-lg p-3 bg-[#333] border border-[#444] text-warm-white focus:ring-2 focus:ring-electric-mint focus:outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" rows={4} placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full rounded-lg p-3 bg-[#333] border border-[#444] text-warm-white focus:ring-2 focus:ring-electric-mint focus:outline-none transition" required></textarea>
                            </div>
                            <button type="submit" disabled={isLoading} className="w-full bg-electric-mint text-midnight-ink font-bold px-6 py-3 rounded-lg hover:bg-amber transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center">
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-midnight-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : "Send Message"}
                            </button>
                        </form>
                         {error && <div className="mt-4 p-4 bg-red-500/20 text-red-300 border border-red-500 rounded-lg">{error}</div>}
                         {apiResponse && <div className="mt-4 p-4 bg-green-500/20 text-green-300 border border-green-500 rounded-lg whitespace-pre-wrap">{apiResponse}</div>}
                    </div>

                    <div className="mt-8 md:mt-0">
                        <h3 className="font-serif text-2xl font-bold mb-4">Other Ways to Connect</h3>
                        <div className="space-y-4 text-lg">
                            <p>
                                <strong className="text-amber">General Inquiries:</strong><br />
                                <a href="mailto:hello@lightoncampus.org" className="text-gray-300 hover:text-electric-mint">hello@lightoncampus.org</a>
                            </p>
                            <p>
                                <strong className="text-amber">Partnerships:</strong><br />
                                <a href="mailto:partners@lightoncampus.org" className="text-gray-300 hover:text-electric-mint">partners@lightoncampus.org</a>
                            </p>
                        </div>
                        <h4 className="font-serif text-xl font-bold mt-8 mb-3">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-electric-mint" aria-label="LinkedIn"><LinkedInIcon /></a>
                            <a href="https://www.facebook.com/profile.php?id=100084610977889" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-mint" aria-label="Facebook">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47H13.874v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/lightoncampusministry/?igsh=azdzN2hwZnhuNzFw#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-mint" aria-label="Instagram"><InstagramIcon /></a>
                            <a href="https://www.tiktok.com/@nlelightoncampus?_t=ZS-8xqqjKeZUQc&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-mint" aria-label="TikTok"><TikTokIcon /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 border-t border-gray-700 mt-16 pt-8">
                    <p>&copy; {new Date().getFullYear()} Light on Campus. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
