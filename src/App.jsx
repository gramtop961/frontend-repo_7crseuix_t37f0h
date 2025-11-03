import React from 'react';
import Hero from './components/Hero';
import EventSummary from './components/EventSummary';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Hero />
      <EventSummary />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
