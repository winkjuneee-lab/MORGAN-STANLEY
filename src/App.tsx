import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Insights from './components/Insights';
import Differentiators from './components/Differentiators';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenAuth={() => setIsAuthModalOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Differentiators />
        <Insights />
        <CTASection />
      </main>
      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}
