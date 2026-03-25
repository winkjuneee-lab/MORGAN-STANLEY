import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-serif font-bold tracking-tighter mb-6">
              M0RGAN STANLEY
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {t.footer.sections.map((section: any) => {
            const sectionId = {
              'What We Do': '#services',
              'Insights': '#insights',
              'About Us': '#about',
              'Support': '#support',
              'Neler Yapıyoruz': '#services',
              'Görüşler': '#insights',
              'Hakkımızda': '#about',
              'Destek': '#support',
            }[section.title] || '#';

            return (
              <div key={section.title}>
                <a href={sectionId} className="block group">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-6 group-hover:text-brand-blue transition-colors">
                    {section.title}
                  </h4>
                </a>
                {section.desc && (
                  <p className="text-white/40 text-xs leading-relaxed mb-6">
                    {section.desc}
                  </p>
                )}
                <ul className="space-y-4">
                  {section.links.map((link: any) => (
                    <li key={link.title}>
                      <a 
                        href={sectionId} 
                        className="block group/link"
                      >
                        <span className="text-white/50 group-hover/link:text-white transition-colors text-sm font-medium block mb-1">
                          {link.title}
                        </span>
                        {link.desc && (
                          <span className="text-white/30 text-[10px] leading-tight block group-hover/link:text-white/50 transition-colors">
                            {link.desc}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-white/40 uppercase tracking-widest">
              {t.footer.legal.map((item: string) => (
                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
            <div className="text-xs text-white/40">
              {t.footer.copyright}
            </div>
          </div>
          
          <div className="mt-10 text-[10px] text-white/30 leading-relaxed max-w-5xl mx-auto text-center">
            {t.footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
