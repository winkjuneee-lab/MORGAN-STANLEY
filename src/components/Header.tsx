import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X, Globe, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';

interface HeaderProps {
  onOpenAuth: () => void;
  onNavigate: (view: 'home' | 'user' | 'admin') => void;
  currentView: 'home' | 'user' | 'admin';
  userRole: string | null;
}

export default function Header({ onOpenAuth, onNavigate, currentView, userRole }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onNavigate('home');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { name: t.nav.whatWeDo, key: 'whatWeDo' },
    { name: t.nav.insights, key: 'insights' },
    { name: t.nav.solutions, key: 'solutions' },
    { name: t.nav.about, key: 'about' },
    { name: t.nav.contact, key: 'contact' },
  ];

  const isPortal = currentView !== 'home';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isPortal ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled || isPortal ? 'text-brand-dark' : 'text-white'}`}
        >
          M0RGAN STANLEY
        </button>

        {/* Desktop Nav */}
        {!isPortal && (
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.key}
                className="relative group"
              >
                <button className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-brand-dark hover:text-brand-blue' : 'text-white/90 hover:text-white'
                }`}>
                  <span>{item.name}</span>
                </button>
              </div>
            ))}
          </nav>
        )}

        {/* Actions */}
        <div className="flex items-center space-x-6">
          {/* Language Switcher */}
          {!isPortal && (
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-brand-blue' : (isScrolled ? 'text-brand-dark/50' : 'text-white/50')}`}
              >
                EN
              </button>
              <span className={isScrolled ? 'text-brand-dark/20' : 'text-white/20'}>|</span>
              <button 
                onClick={() => setLanguage('tr')}
                className={`text-xs font-bold transition-colors ${language === 'tr' ? 'text-brand-blue' : (isScrolled ? 'text-brand-dark/50' : 'text-white/50')}`}
              >
                TR
              </button>
            </div>
          )}

          {!isPortal && (
            <button className={`${isScrolled ? 'text-brand-dark' : 'text-white'} hover:text-brand-blue transition-colors`}>
              <Search size={20} />
            </button>
          )}
          
          {user ? (
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onNavigate(userRole === 'admin' ? 'admin' : 'user')}
                className={`flex items-center space-x-2 text-sm font-medium hover:text-brand-blue transition-colors ${isScrolled || isPortal ? 'text-brand-dark' : 'text-white'}`}
              >
                <User size={16} />
                <span className="hidden sm:inline">Portal</span>
              </button>
              <button 
                onClick={handleSignOut}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled || isPortal ? 'hover:bg-gray-100 text-brand-dark' : 'hover:bg-white/10 text-white'
                }`}
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className={`hidden sm:flex items-center space-x-2 px-5 py-2 border text-sm font-medium transition-all ${
                isScrolled 
                  ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-brand-dark'
              }`}
            >
              <User size={16} />
              <span>{t.nav.clientLogin}</span>
            </button>
          )}
          
          {!isPortal && (
            <button 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className={isScrolled ? 'text-brand-dark' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-brand-dark' : 'text-white'} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && !isPortal && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-8 space-y-6">
              {navItems.map((item) => (
                <div key={item.key} className="space-y-4">
                  <div className="font-serif text-xl font-bold text-brand-dark">{item.name}</div>
                </div>
              ))}
              
              {user ? (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onNavigate(userRole === 'admin' ? 'admin' : 'user');
                    }}
                    className="w-full py-4 border border-brand-dark text-brand-dark font-bold rounded-sm flex items-center justify-center space-x-2"
                  >
                    <User size={18} />
                    <span>Go to Portal</span>
                  </button>
                  <button 
                    onClick={handleSignOut}
                    className="w-full py-4 bg-brand-dark text-white font-bold rounded-sm flex items-center justify-center space-x-2"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full py-4 bg-brand-dark text-white font-bold rounded-sm flex items-center justify-center space-x-2"
                >
                  <User size={18} />
                  <span>{t.nav.clientLogin}</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
