import React from 'react';
import { motion } from 'motion/react';
import { Building2, Users2, Newspaper, GraduationCap, Leaf, History } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Differentiators() {
  const { t } = useLanguage();

  const icons = [
    <Building2 size={40} strokeWidth={1} />,
    <Users2 size={40} strokeWidth={1} />,
    <Newspaper size={40} strokeWidth={1} />,
    <GraduationCap size={40} strokeWidth={1} />,
    <Leaf size={40} strokeWidth={1} />,
    <History size={40} strokeWidth={1} />,
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.differentiators.title}</h2>
          <p className="text-xl text-white/60 font-light">
            {t.differentiators.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.differentiators.items.map((item: any, index: number) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 p-4 bg-white/5 rounded-sm text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  {icons[index] || <Building2 size={40} strokeWidth={1} />}
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
