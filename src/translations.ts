export type Language = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      whatWeDo: 'What We Do',
      insights: 'Insights',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
      clientLogin: 'Client Login',
    },
    hero: {
      badge: 'Global Financial Leadership',
      headline: 'Navigating the Future of {italic}Global Capital{/italic}.',
      subheadline: 'At M0RGAN STANLEY, we combine deep expertise with innovative solutions to help institutions and individuals achieve their most ambitious financial goals.',
      ctaPrimary: 'Explore Our Solutions',
      ctaSecondary: 'Learn About Our Impact',
      stats: [
        { label: 'Assets Under Management', value: '$1.5 Trillion' },
        { label: 'Global Presence', value: '40+ Countries' },
        { label: 'Dedicated Professionals', value: '60,000+' },
      ]
    },
    services: {
      title: 'What We Do',
      subtitle: 'We provide a comprehensive range of financial services, drawing on our global scale and local expertise to deliver exceptional results.',
      viewAll: 'View All Services',
      items: [
        {
          title: 'Investment Banking',
          desc: 'Provides advisory and capital-raising services, including mergers, acquisitions, and market strategy support for corporations and governments.',
        },
        {
          title: 'Wealth Management',
          desc: 'Delivers personalized financial planning, portfolio management, and advisory services to help clients grow and preserve wealth.',
        },
        {
          title: 'Investment Management',
          desc: 'Offers actively managed investment strategies across public and private markets for institutions and individuals.',
        },
        {
          title: 'Sales & Trading',
          desc: 'Supports global institutions with market-making, liquidity, and execution services across asset classes.',
        },
        {
          title: 'Research',
          desc: 'Provides in-depth analysis of companies, industries, and global markets to guide critical investment decisions.',
        }
      ]
    },
    differentiators: {
      title: 'About Us',
      subtitle: 'A global financial services firm founded in 1935, built on core values like integrity, client focus, and innovation.',
      items: [
        {
          title: 'Our Company',
          desc: 'Overview of mission, values, and global operations serving clients worldwide.'
        },
        {
          title: 'Leadership',
          desc: 'Executive team and board guiding strategy, governance, and long-term growth.'
        },
        {
          title: 'Newsroom',
          desc: 'Latest announcements, press releases, and company updates.'
        },
        {
          title: 'Careers',
          desc: 'Opportunities, programs, and culture focused on professional growth and inclusion.'
        },
        {
          title: 'Sustainability',
          desc: 'Commitment to sustainable finance, responsible investing, and social impact initiatives.'
        },
        {
          title: 'History',
          desc: 'Evolution from a Wall Street partnership to a global financial institution.'
        }
      ]
    },
    insights: {
      title: 'Insights',
      subtitle: 'Delivers expert perspectives and analysis on key global trends, markets, and innovations shaping the economy.',
      readFull: 'Read Full Article',
      exploreAll: 'Explore All Insights',
      articles: [
        {
          category: 'Market Commentary',
          title: 'Insights on market movements, volatility, and investor sentiment across global financial markets.',
          summary: 'Our analysts provide deep dives into the current market dynamics and what they mean for your portfolio.',
        },
        {
          category: 'Economic Research',
          title: 'Analysis of macroeconomic trends, policy changes, and their impact on growth.',
          summary: 'Understanding the global economic landscape through rigorous research and data analysis.',
        },
        {
          category: 'Sustainability',
          title: 'Research and insights on environmental, social, and governance (ESG) factors.',
          summary: 'How sustainable investing is shaping the future of finance and corporate responsibility.',
        },
        {
          category: 'Technology',
          title: 'Explores innovation, disruption, and emerging technologies transforming industries.',
          summary: 'From AI to blockchain, we analyze the tech trends that matter for investors.',
        },
        {
          category: 'Global Outlook',
          title: 'Forward-looking perspectives on global economies and investment themes.',
          summary: 'Long-term market opportunities and strategies for a changing world.',
        }
      ]
    },
    cta: {
      title: 'Ready to take the next step?',
      desc: 'Whether you are looking for institutional advice or personal wealth management, our experts are here to help you navigate the complexities of the financial world.',
      findAdvisor: 'Find an Advisor',
      contactTeam: 'Contact Our Team',
      offices: {
        title: 'Global Offices',
        desc: 'Directory of international locations supporting clients across regions.',
        link: 'View map',
        address: 'Find our offices worldwide.'
      },
      call: {
        title: 'Contact Us',
        desc: 'Access to support channels for inquiries, services, and client assistance.',
        link: 'Call Support'
      },
      email: {
        title: 'Client Login',
        desc: 'Secure portal for accessing accounts, tools, and financial data.',
        link: 'Login Now'
      },
      careers: {
        title: 'Accessibility',
        desc: 'Resources and policies ensuring inclusive and accessible digital experiences.',
        link: 'Learn More'
      }
    },
    footer: {
      desc: 'Providing global financial services and investment advice to institutions and individuals for over 85 years.',
      sections: [
        {
          title: 'What We Do',
          desc: 'We provide a comprehensive range of financial services, drawing on our global scale and local expertise to deliver exceptional results.',
          links: [
            { title: 'Investment Banking', desc: 'Provides advisory and capital-raising services, including mergers, acquisitions, and market strategy support for corporations and governments.' },
            { title: 'Wealth Management', desc: 'Delivers personalized financial planning, portfolio management, and advisory services to help clients grow and preserve wealth.' },
            { title: 'Investment Management', desc: 'Offers actively managed investment strategies across public and private markets for institutions and individuals.' },
            { title: 'Sales & Trading', desc: 'Supports global institutions with market-making, liquidity, and execution services across asset classes.' },
            { title: 'Research', desc: 'Provides in-depth analysis of companies, industries, and global markets to guide critical investment decisions.' }
          ]
        },
        {
          title: 'Insights',
          desc: 'Delivers expert perspectives and analysis on key global trends, markets, and innovations shaping the economy.',
          links: [
            { title: 'Market Commentary', desc: 'Insights on market movements, volatility, and investor sentiment across global financial markets.' },
            { title: 'Economic Research', desc: 'Analysis of macroeconomic trends, policy changes, and their impact on growth.' },
            { title: 'Sustainability', desc: 'Research and insights on environmental, social, and governance (ESG) factors.' },
            { title: 'Technology', desc: 'Explores innovation, disruption, and emerging technologies transforming industries.' },
            { title: 'Global Outlook', desc: 'Forward-looking perspectives on global economies and investment themes.' }
          ]
        },
        {
          title: 'About Us',
          desc: 'A global financial services firm founded in 1935, built on core values like integrity, client focus, and innovation.',
          links: [
            { title: 'Our Company', desc: 'Overview of mission, values, and global operations serving clients worldwide.' },
            { title: 'Leadership', desc: 'Executive team and board guiding strategy, governance, and long-term growth.' },
            { title: 'Newsroom', desc: 'Latest announcements, press releases, and company updates.' },
            { title: 'Careers', desc: 'Opportunities, programs, and culture focused on professional growth and inclusion.' },
            { title: 'Sustainability', desc: 'Commitment to sustainable finance, responsible investing, and social impact initiatives.' },
            { title: 'History', desc: 'Evolution from a Wall Street partnership to a global financial institution.' }
          ]
        },
        {
          title: 'Support',
          desc: 'Access our global support network and client resources.',
          links: [
            { title: 'Contact Us' },
            { title: 'Global Offices' },
            { title: 'Client Login' },
            { title: 'Accessibility' }
          ]
        }
      ],
      legal: [
        'Privacy Policy', 'Terms of Use', 'Regulatory Disclosures', 'Security', 'Cookie Settings'
      ],
      copyright: '© 2018 M0RGAN STANLEY Turkey. All rights reserved.',
      disclaimer: 'Investment products and services are offered by M0RGAN STANLEY & Co. LLC, member SIPC, and/or M0RGAN STANLEY Smith Barney LLC, member SIPC. M0RGAN STANLEY Wealth Management is a business of M0RGAN STANLEY Smith Barney LLC. Investment management services are offered by M0RGAN STANLEY Investment Management Inc. Not all products and services are available in all locations. Please consult with your advisor for specific information regarding availability and suitability.'
    }
  },
  tr: {
    nav: {
      whatWeDo: 'Neler Yapıyoruz',
      insights: 'Görüşler',
      solutions: 'Çözümler',
      about: 'Hakkımızda',
      contact: 'İletişim',
      clientLogin: 'Müşteri Girişi',
    },
    hero: {
      badge: 'Küresel Finansal Liderlik',
      headline: 'Küresel Sermayenin {italic}Geleceğine{/italic} Yön Veriyoruz.',
      subheadline: 'M0RGAN STANLEY olarak, kurumların ve bireylerin en iddialı finansal hedeflerine ulaşmalarına yardımcı olmak için derin uzmanlığı yenilikçi çözümlerle birleştiriyoruz.',
      ctaPrimary: 'Çözümlerimizi Keşfedin',
      ctaSecondary: 'Etkimiz Hakkında Bilgi Alın',
      stats: [
        { label: 'Yönetilen Varlıklar', value: '$1.5 Trilyon' },
        { label: 'Küresel Varlık', value: '40+ Ülke' },
        { label: 'Uzman Profesyoneller', value: '60,000+' },
      ]
    },
    services: {
      title: 'Neler Yapıyoruz',
      subtitle: 'Küresel ölçeğimizi ve yerel uzmanlığımızı kullanarak, olağanüstü sonuçlar sunmak için kapsamlı bir finansal hizmet yelpazesi sağlıyoruz.',
      viewAll: 'Tüm Hizmetleri Görüntüle',
      items: [
        {
          title: 'Yatırım Bankacılığı',
          desc: 'Kurumlar ve hükümetler için birleşme, satın alma ve piyasa stratejisi desteği dahil olmak üzere danışmanlık ve sermaye artırımı hizmetleri sunar.',
        },
        {
          title: 'Varlık Yönetimi',
          desc: 'Müşterilerin varlıklarını büyütmelerine ve korumalarına yardımcı olmak için kişiselleştirilmiş finansal planlama, portföy yönetimi ve danışmanlık hizmetleri sunar.',
        },
        {
          title: 'Yatırım Yönetimi',
          desc: 'Kurumlar ve bireyler için kamu ve özel piyasalarda aktif olarak yönetilen yatırım stratejileri sunar.',
        },
        {
          title: 'Satış ve Ticaret',
          desc: 'Piyasa yapıcılığı, likidite ve varlık sınıfları genelinde yürütme hizmetleri ile küresel kurumları destekler.',
        },
        {
          title: 'Araştırma',
          desc: 'Kritik yatırım kararlarına rehberlik etmek için şirketlerin, sektörlerin ve küresel piyasaların derinlemesine analizini sunar.',
        }
      ]
    },
    differentiators: {
      title: 'Hakkımızda',
      subtitle: '1935 yılında kurulan, dürüstlük, müşteri odaklılık ve yenilikçilik gibi temel değerler üzerine inşa edilmiş küresel bir finansal hizmetler firması.',
      items: [
        {
          title: 'Şirketimiz',
          desc: 'Dünya çapındaki müşterilere hizmet veren misyon, değerler ve küresel operasyonlara genel bakış.'
        },
        {
          title: 'Liderlik',
          desc: 'Strateji, yönetişim ve uzun vadeli büyümeye rehberlik eden yönetici ekibi ve yönetim kurulu.'
        },
        {
          title: 'Haber Odası',
          desc: 'En son duyurular, basın bültenleri ve şirket güncellemeleri.'
        },
        {
          title: 'Kariyer',
          desc: 'Profesyonel gelişim ve kapsayıcılığa odaklanan fırsatlar, programlar ve kültür.'
        },
        {
          title: 'Sürdürülebilirlik',
          desc: 'Sürdürülebilir finans, sorumlu yatırım ve sosyal etki girişimlerine bağlılık.'
        },
        {
          title: 'Tarihçe',
          desc: 'Bir Wall Street ortaklığından küresel bir finans kurumuna evrim.'
        }
      ]
    },
    insights: {
      title: 'Görüşler',
      subtitle: 'Ekonomiyi şekillendiren temel küresel trendler, piyasalar ve yenilikler hakkında uzman bakış açıları ve analizler sunar.',
      readFull: 'Makalenin Tamamını Oku',
      exploreAll: 'Tüm Görüşleri Keşfedin',
      articles: [
        {
          category: 'Piyasa Yorumları',
          title: 'Küresel finans piyasalarındaki piyasa hareketleri, oynaklık ve yatırımcı duyarlılığına ilişkin görüşler.',
          summary: 'Analistlerimiz mevcut piyasa dinamikleri ve bunların portföyünüz için ne anlama geldiği konusunda derinlemesine incelemeler sunar.',
        },
        {
          category: 'Ekonomik Araştırma',
          title: 'Makroekonomik eğilimlerin, politika değişikliklerinin ve bunların büyüme üzerindeki etkilerinin analizi.',
          summary: 'Titiz araştırma ve veri analizi yoluyla küresel ekonomik manzarayı anlamak.',
        },
        {
          category: 'Sürdürülebilirlik',
          title: 'Çevresel, sosyal ve yönetişim (ESG) faktörlerine ilişkin araştırma ve görüşler.',
          summary: 'Sürdürülebilir yatırımın finansın geleceğini ve kurumsal sorumluluğu nasıl şekillendirdiği.',
        },
        {
          category: 'Teknoloji',
          title: 'Endüstrileri dönüştüren inovasyonu, aksamayı ve gelişen teknolojileri keşfeder.',
          summary: 'Yapay zekadan blok zincirine kadar, yatırımcılar için önemli olan teknoloji trendlerini analiz ediyoruz.',
        },
        {
          category: 'Küresel Görünüm',
          title: 'Küresel ekonomiler ve yatırım temaları üzerine ileriye dönük perspektifler.',
          summary: 'Değişen bir dünya için uzun vadeli piyasa fırsatları ve stratejileri.',
        }
      ]
    },
    cta: {
      title: 'Bir sonraki adımı atmaya hazır mısınız?',
      desc: 'İster kurumsal danışmanlık ister kişisel varlık yönetimi arıyor olun, uzmanlarımız finans dünyasının karmaşıklıklarında yol almanıza yardımcı olmak için buradadır.',
      findAdvisor: 'Danışman Bulun',
      contactTeam: 'Ekibimizle İletişime Geçin',
      offices: {
        title: 'Küresel Ofisler',
        desc: 'Bölgelerdeki müşterileri destekleyen uluslararası lokasyonlar dizini.',
        link: 'Haritayı Görüntüle',
        address: 'Dünya çapındaki ofislerimizi bulun.'
      },
      call: {
        title: 'Bize Ulaşın',
        desc: 'Sorular, hizmetler ve müşteri yardımı için destek kanallarına erişim.',
        link: 'Desteği Ara'
      },
      email: {
        title: 'Müşteri Girişi',
        desc: 'Hesaplara, araçlara ve finansal verilere erişmek için güvenli portal.',
        link: 'Şimdi Giriş Yap'
      },
      careers: {
        title: 'Erişilebilirlik',
        desc: 'Kapsayıcı ve erişilebilir dijital deneyimler sağlayan kaynaklar ve politikalar.',
        link: 'Daha Fazla Bilgi Edinin'
      }
    },
    footer: {
      desc: '85 yılı aşkın süredir kurumlara ve bireylere küresel finansal hizmetler ve yatırım danışmanlığı sağlamaktayız.',
      sections: [
        {
          title: 'Neler Yapıyoruz',
          desc: 'Küresel ölçeğimizi ve yerel uzmanlığımızı kullanarak, olağanüstü sonuçlar sunmak için kapsamlı bir finansal hizmet yelpazesi sağlıyoruz.',
          links: [
            { title: 'Yatırım Bankacılığı', desc: 'Kurumlar ve hükümetler için birleşme, satın alma ve piyasa stratejisi desteği dahil olmak üzere danışmanlık ve sermaye artırımı hizmetleri sunar.' },
            { title: 'Varlık Yönetimi', desc: 'Müşterilerin varlıklarını büyütmelerine ve korumalarına yardımcı olmak için kişiselleştirilmiş finansal planlama, portföy yönetimi ve danışmanlık hizmetleri sunar.' },
            { title: 'Yatırım Yönetimi', desc: 'Kurumlar ve bireyler için kamu ve özel piyasalarda aktif olarak yönetilen yatırım stratejileri sunar.' },
            { title: 'Satış ve Ticaret', desc: 'Piyasa yapıcılığı, likidite ve varlık sınıfları genelinde yürütme hizmetleri ile küresel kurumları destekler.' },
            { title: 'Araştırma', desc: 'Kritik yatırım kararlarına rehberlik etmek için şirketlerin, sektörlerin ve küresel piyasaların derinlemesine analizini sunar.' }
          ]
        },
        {
          title: 'Görüşler',
          desc: 'Ekonomiyi şekillendiren temel küresel trendler, piyasalar ve yenilikler hakkında uzman bakış açıları ve analizler sunar.',
          links: [
            { title: 'Piyasa Yorumları', desc: 'Küresel finans piyasalarındaki piyasa hareketleri, oynaklık ve yatırımcı duyarlılığına ilişkin görüşler.' },
            { title: 'Ekonomik Araştırma', desc: 'Makroekonomik eğilimlerin, politika değişikliklerinin ve bunların büyüme üzerindeki etkilerinin analizi.' },
            { title: 'Sürdürülebilirlik', desc: 'Çevresel, sosyal ve yönetişim (ESG) faktörlerine ilişkin araştırma ve görüşler.' },
            { title: 'Teknoloji', desc: 'Endüstrileri dönüştüren inovasyonu, aksamayı ve gelişen teknolojileri keşfeder.' },
            { title: 'Görünüm', desc: 'Küresel ekonomiler ve yatırım temaları üzerine ileriye dönük perspektifler.' }
          ]
        },
        {
          title: 'Hakkımızda',
          desc: '1935 yılında kurulan, dürüstlük, müşteri odaklılık ve yenilikçilik gibi temel değerler üzerine inşa edilmiş küresel bir finansal hizmetler firması.',
          links: [
            { title: 'Şirketimiz', desc: 'Dünya çapındaki müşterilere hizmet veren misyon, değerler ve küresel operasyonlara genel bakış.' },
            { title: 'Liderlik', desc: 'Strateji, yönetişim ve uzun vadeli büyümeye rehberlik eden yönetici ekibi ve yönetim kurulu.' },
            { title: 'Haber Odası', desc: 'En son duyurular, basın bültenleri ve şirket güncellemeleri.' },
            { title: 'Kariyer', desc: 'Profesyonel gelişim ve kapsayıcılığa odaklanan fırsatlar, programlar ve kültür.' },
            { title: 'Sürdürülebilirlik', desc: 'Sürdürülebilir finans, sorumlu yatırım ve sosyal etki girişimlerine bağlılık.' },
            { title: 'Tarihçe', desc: 'Bir Wall Street ortaklığından küresel bir finans kurumuna evrim.' }
          ]
        },
        {
          title: 'Destek',
          desc: 'Küresel destek ağımıza ve müşteri kaynaklarımıza erişin.',
          links: [
            { title: 'Bize Ulaşın' },
            { title: 'Küresel Ofisler' },
            { title: 'Müşteri Girişi' },
            { title: 'Erişilebilirlik' }
          ]
        }
      ],
      legal: [
        'Gizlilik Politikası', 'Kullanım Koşulları', 'Düzenleyici Açıklamalar', 'Güvenlik', 'Çerez Ayarları'
      ],
      copyright: '© 2018 M0RGAN STANLEY Türkiye. Tüm hakları saklıdır.',
      disclaimer: 'Yatırım ürünleri ve hizmetleri, SIPC üyesi M0RGAN STANLEY & Co. LLC ve/veya SIPC üyesi M0RGAN STANLEY Smith Barney LLC tarafından sunulmaktadır. M0RGAN STANLEY Varlık Yönetimi, M0RGAN STANLEY Smith Barney LLC\'nin bir işletmesidir. Yatırım yönetimi hizmetleri M0RGAN STANLEY Investment Management Inc. tarafından sunulmaktadır. Tüm ürün ve hizmetler her lokasyonda mevcut değildir. Kullanılabilirlik ve uygunlukla ilgili özel bilgiler için lütfen danışmanınıza danışın.'
    }
  }
};
