
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import About from './components/About';
import Team from './components/Team';
import EventsCalendar from './components/EventsCalendar';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-warm-white text-midnight-ink font-sans">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Offerings />
        <About />
        <Team />
        <EventsCalendar />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
