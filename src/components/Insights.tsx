import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Insights() {
  const { t } = useLanguage();

  const images = [
    'https://images.unsplash.com/photo-1611974717483-582851855b9f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop'
  ];

  const featured = t.insights.articles[0];
  const secondary = t.insights.articles.slice(1);

  return (
    <section className="py-24 bg-brand-light">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">{t.insights.title}</h2>
          <p className="text-xl text-gray-600 font-light">{t.insights.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">
              {featured?.category}
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
              {featured?.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {featured?.summary}
            </p>
            <button className="flex items-center space-x-2 font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
              <span>{t.insights.readFull}</span>
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

          {/* Secondary Articles */}
          <div className="lg:col-span-5 space-y-12">
            {secondary.map((article: any, index: number) => (
              <motion.div 
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 group cursor-pointer"
              >
                <div className="sm:w-40 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src={images[index + 1]} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">
                    {article.category}
                  </div>
                  <h4 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <button className="w-full py-4 border border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-all">
              {t.insights.exploreAll}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
