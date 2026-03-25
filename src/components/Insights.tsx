import React from 'react';
import { motion } from 'motion/react';
import { LineChart, PieChart, Leaf, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Insights() {
  const { t } = useLanguage();

  const icons = [
    <LineChart className="text-brand-blue" size={32} />,
    <PieChart className="text-brand-blue" size={32} />,
    <Leaf className="text-brand-blue" size={32} />,
    <Cpu className="text-brand-blue" size={32} />,
    <Globe className="text-brand-blue" size={32} />,
  ];

  const images = [
    'https://images.unsplash.com/photo-1611974717483-582851855b9f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <section id="insights" className="py-24 bg-brand-light">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">{t.insights.title}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl">{t.insights.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.insights.articles.map((article: any, index: number) => (
            <motion.div 
              key={article.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all group flex flex-col h-full cursor-pointer"
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 bg-brand-light rounded-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {icons[index]}
                </div>
                <ArrowUpRight className="text-gray-300 group-hover:text-brand-blue transition-colors" size={20} />
              </div>
              <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
                {article.category}
              </div>
              <h3 className="text-xl font-serif text-brand-dark mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                {article.summary}
              </p>
              <button className="text-xs font-bold uppercase tracking-widest text-brand-dark border-b border-brand-dark pb-1 w-fit hover:text-brand-blue hover:border-brand-blue transition-colors">
                {t.insights.readFull}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-12 py-4 bg-brand-dark text-white font-bold hover:bg-brand-blue transition-all">
            {t.insights.exploreAll}
          </button>
        </div>
      </div>
    </section>
  );
}
