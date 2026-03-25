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

          {t.footer.sections.map((section: any) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link: string) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
