import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const renderHeadline = (text: string) => {
    const parts = text.split(/\{italic\}|\{\/italic\}/);
    return (
      <>
        {parts[0]}
        <span className="italic">{parts[1]}</span>
        {parts[2]}
      </>
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Corporate Building" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-8">
            {renderHeadline(t.hero.headline)}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-brand-blue text-white font-bold hover:bg-brand-blue/90 transition-all flex items-center justify-center space-x-2 group">
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white text-white font-bold hover:bg-white hover:text-brand-dark transition-all">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats/Ticker Bar */}
      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10 py-6 hidden lg:block">
        <div className="container-custom flex justify-between items-center">
          {t.hero.stats.map((stat: any) => (
            <div key={stat.label} className="text-white">
              <div className="text-xs uppercase tracking-widest opacity-60 mb-1">{stat.label}</div>
              <div className="text-xl font-serif">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
