import React from 'react';
import { motion } from 'motion/react';
import { Landmark, TrendingUp, Briefcase, ShieldCheck, Globe, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const icons = [
    <Landmark className="text-brand-blue" size={32} />,
    <TrendingUp className="text-brand-blue" size={32} />,
    <Briefcase className="text-brand-blue" size={32} />,
    <Globe className="text-brand-blue" size={32} />,
    <ShieldCheck className="text-brand-blue" size={32} />,
    <Zap className="text-brand-blue" size={32} />,
  ];

  const images = [
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t.services.subtitle}
            </p>
          </div>
          <button className="text-brand-blue font-bold flex items-center space-x-2 border-b-2 border-brand-blue pb-1 hover:text-brand-dark hover:border-brand-dark transition-all">
            <span>{t.services.viewAll}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.services.items.map((item: any, index: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden mb-6 rounded-sm">
                <img 
                  src={images[index]} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
              </div>
              <div className="mb-4">{icons[index]}</div>
              <h3 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
