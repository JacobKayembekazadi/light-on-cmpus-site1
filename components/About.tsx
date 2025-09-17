export default function About() {
    return (
        <section id="about" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Who We <span className="bg-gradient-to-r from-electric-mint to-amber bg-clip-text text-transparent">Are</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Building a community that empowers students to lead with purpose, grow in character, and impact their world.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                            <img
                                src="/images/our-community.jpg"
                                alt="Students engaging in a vibrant campus community"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md border border-gray-200">
                            <h3 className="font-serif text-2xl font-bold mb-3">Our Mission</h3>
                            <p className="text-gray-700">
                                To ignite purpose and empower students to thrive—academically, emotionally, and spiritually—through mentorship, community, and opportunities to lead.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md border border-gray-200">
                            <h3 className="font-serif text-2xl font-bold mb-3">Our Vision</h3>
                            <p className="text-gray-700">
                                A campus culture where students are confident, connected, and equipped to make meaningful impact—on campus and beyond.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md border border-gray-200 transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-electric-mint/10 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-electric-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg mb-2">Growth</h4>
                        <p className="text-gray-600">We help students grow holistically—in character, leadership, and purpose.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md border border-gray-200 transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 2 3 5 3 5s3-3 3-5c0-1.657-1.343-3-3-3z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg mb-2">Belonging</h4>
                        <p className="text-gray-600">We’re a welcoming community where every student is seen, supported, and celebrated.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md border border-gray-200 transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg mb-2">Impact</h4>
                        <p className="text-gray-600">We mobilize students to serve and make a lasting difference on campus and beyond.</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm hover:shadow-md border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">More Than An Organization</h3>
                            <p className="text-gray-700">Light on Campus is a movement—a community where students are empowered, encouraged, and equipped to shine their light wherever they go. Join us for mentorship, growth, and real connection.</p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                            <img
                                src="/images/more-than-an-org-1.jpg"
                                alt="Students collaborating and smiling together"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
