import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Insights from './components/Insights';
import Differentiators from './components/Differentiators';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UserPortal from './components/UserPortal';
import AdminPortal from './components/AdminPortal';
import ErrorBoundary from './components/ErrorBoundary';
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [view, setView] = useState<'home' | 'user' | 'admin'>('home');
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        setUserRole(null);
        setView('home');
      }
    });

    return () => unsubscribe();
  }, []);

  const renderView = () => {
    switch (view) {
      case 'user': return <UserPortal />;
      case 'admin': return <AdminPortal />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Differentiators />
            <Insights />
            <CTASection />
          </>
        );
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-brand-light">
        <Header 
          onOpenAuth={() => setIsAuthModalOpen(true)} 
          onNavigate={(v) => setView(v)}
          currentView={view}
          userRole={userRole}
        />
        <main className="flex-grow">
          {renderView()}
        </main>
        <Footer />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </ErrorBoundary>
  );
}
