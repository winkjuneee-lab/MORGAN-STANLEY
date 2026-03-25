import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Users2, Lightbulb } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Differentiators() {
  const { t } = useLanguage();

  const icons = [
    <Globe2 size={48} strokeWidth={1} />,
    <Users2 size={48} strokeWidth={1} />,
    <Lightbulb size={48} strokeWidth={1} />,
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.differentiators.title}</h2>
          <p className="text-xl text-white/60 font-light">
            {t.differentiators.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {t.differentiators.items.map((item: any, index: number) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-6 bg-white/5 rounded-full mb-8 text-brand-blue">
                {icons[index]}
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
