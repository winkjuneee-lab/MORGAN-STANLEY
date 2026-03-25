import React, { useRef, useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function CTASection() {
  const { t, language } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleLocateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (uploadedImage) {
      setShowImage(true);
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLocating(true);
      setTimeout(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result as string);
          setIsLocating(false);
          setShowImage(true);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  return (
    <section id="support" className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-brand-light p-12 md:p-16 rounded-sm">
            <h2 className="text-4xl font-serif text-brand-dark mb-6">{t.cta.title}</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t.cta.desc}
            </p>
            
            <div className="space-y-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-white font-bold hover:bg-brand-blue transition-all flex items-center justify-center space-x-3 group">
                <span>{t.cta.findAdvisor}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-all flex items-center justify-center space-x-3">
                <span>{t.cta.contactTeam}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-100 hover:shadow-lg transition-shadow rounded-sm relative group/card overflow-hidden">
              {uploadedImage && (
                <div className={`absolute inset-0 z-10 bg-white transition-transform duration-500 ${showImage ? 'translate-y-0' : 'translate-y-full'}`}>
                  <button 
                    onClick={() => setShowImage(false)}
                    className="absolute top-2 right-2 p-1 bg-brand-dark text-white rounded-full hover:bg-brand-blue transition-colors z-20"
                  >
                    <X size={16} />
                  </button>
                  <img 
                    src={uploadedImage} 
                    alt="Office Map" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              
              <MapPin className={`mb-4 transition-colors ${isLocating ? 'text-brand-blue animate-bounce' : 'text-brand-blue'}`} size={32} />
              <h3 className="text-xl font-serif text-brand-dark mb-2">{t.cta.offices.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.cta.offices.desc}</p>
              <p className="text-xs text-gray-400 mb-4">{t.cta.offices.address}</p>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
              <button 
                onClick={handleLocateClick}
                disabled={isLocating}
                className="text-brand-blue font-bold text-sm hover:underline flex items-center space-x-2 disabled:opacity-50"
              >
                <span>{isLocating ? (language === 'tr' ? 'Konumlanıyor...' : 'Locating...') : t.cta.offices.link}</span>
                {!isLocating && <ArrowRight size={14} className="opacity-0 group-hover/card:opacity-100 transition-opacity" />}
              </button>
            </div>
            <div className="p-8 border border-gray-100 hover:shadow-lg transition-shadow rounded-sm">
              <Phone className="text-brand-blue mb-4" size={32} />
              <h3 className="text-xl font-serif text-brand-dark mb-2">{t.cta.call.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.cta.call.desc}</p>
              <a href={`tel:${t.cta.call.link.replace(/\s/g, '')}`} className="text-brand-blue font-bold text-sm hover:underline">{t.cta.call.link}</a>
            </div>
            <div className="p-8 border border-gray-100 hover:shadow-lg transition-shadow rounded-sm">
              <Mail className="text-brand-blue mb-4" size={32} />
              <h3 className="text-xl font-serif text-brand-dark mb-2">{t.cta.email.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.cta.email.desc}</p>
              <a href="#" className="text-brand-blue font-bold text-sm hover:underline">{t.cta.email.link}</a>
            </div>
            <div className="p-8 border border-gray-100 hover:shadow-lg transition-shadow rounded-sm">
              <GlobeIcon className="text-brand-blue mb-4" size={32} />
              <h3 className="text-xl font-serif text-brand-dark mb-2">{t.cta.careers.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.cta.careers.desc}</p>
              <a href="#" className="text-brand-blue font-bold text-sm hover:underline">{t.cta.careers.link}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {uploadedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-sm max-w-4xl w-full relative">
            <button 
              onClick={() => setUploadedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-brand-blue transition-colors"
            >
              <X size={32} />
            </button>
            <div className="mb-4 flex items-center justify-between border-b pb-2">
              <h3 className="text-xl font-serif text-brand-dark">Office Location Map</h3>
              <span className="text-xs text-gray-500">Uploaded Preview</span>
            </div>
            <img 
              src={uploadedImage} 
              alt="Uploaded Map" 
              className="w-full h-auto max-h-[70vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <button 
                onClick={() => setUploadedImage(null)}
                className="px-6 py-2 bg-brand-dark text-white font-bold hover:bg-brand-blue transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
