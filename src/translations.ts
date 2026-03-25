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
      title: 'Our Global Capabilities',
      subtitle: 'We provide a comprehensive range of financial services, drawing on our global scale and local expertise to deliver exceptional results.',
      viewAll: 'View All Services',
      items: [
        {
          title: 'Investment Banking',
          desc: 'Strategic advisory, capital raising, and risk management for corporations, institutions, and governments worldwide.',
        },
        {
          title: 'Wealth Management',
          desc: 'Comprehensive financial planning and investment strategies tailored to help individuals and families preserve and grow wealth.',
        },
        {
          title: 'Investment Management',
          desc: 'Active asset management across public and private markets, delivering long-term value for institutional and individual clients.',
        },
        {
          title: 'Global Markets',
          desc: 'Providing liquidity, execution, and market-leading research across equities, fixed income, and commodities.',
        },
        {
          title: 'Risk Management',
          desc: 'Sophisticated frameworks and analytics to identify, measure, and mitigate complex financial and operational risks.',
        },
        {
          title: 'Technology & Innovation',
          desc: 'Leveraging cutting-edge technology and data science to drive efficiency and create new opportunities in global finance.',
        }
      ]
    },
    differentiators: {
      title: 'Why M0RGAN STANLEY?',
      subtitle: 'Our commitment to excellence and integrity has made us a trusted partner for the world\'s most influential institutions and individuals.',
      items: [
        {
          title: 'Global Reach',
          desc: 'With offices in over 40 countries, we provide our clients with deep local insights and seamless global execution.'
        },
        {
          title: 'Unrivaled Expertise',
          desc: 'Our team of 60,000+ professionals includes world-class researchers, advisors, and technologists dedicated to your success.'
        },
        {
          title: 'Innovation First',
          desc: 'We continuously invest in cutting-edge technology and data science to stay ahead of market trends and deliver superior value.'
        }
      ]
    },
    insights: {
      title: 'Insights & Analysis',
      subtitle: 'Thought leadership from our global network of experts.',
      readFull: 'Read Full Article',
      exploreAll: 'Explore All Insights',
      articles: [
        {
          category: 'Market Outlook',
          title: '2026 Global Economic Forecast: Navigating Volatility',
          summary: 'Our chief economists analyze the shifting geopolitical landscape and its impact on global trade and interest rates.',
        },
        {
          category: 'Sustainability',
          title: 'The Rise of Impact Investing in Emerging Markets',
          summary: 'How ESG-focused capital is driving infrastructure development in Southeast Asia.',
        },
        {
          category: 'Technology',
          title: 'AI in Asset Management: Beyond the Hype',
          summary: 'Exploring how machine learning is revolutionizing risk assessment and portfolio optimization.',
        },
        {
          category: 'Wealth',
          title: 'Estate Planning for the Next Generation',
          summary: 'Strategies for seamless wealth transfer and philanthropic legacy building.',
        }
      ]
    },
    cta: {
      title: 'Ready to take the next step?',
      desc: 'Whether you are looking for institutional advice or personal wealth management, our experts are here to help you navigate the complexities of the financial world.',
      findAdvisor: 'Find an Advisor',
      contactTeam: 'Contact Our Team',
      offices: {
        title: 'Turkey Office',
        desc: 'Visit our main office in Istanbul, Levent.',
        link: 'Locate Office',
        address: 'Levent, Büyükdere Cd. No:185, 34394 Şişli/İstanbul, Turkey'
      },
      call: {
        title: 'Call Us',
        desc: 'Speak with a representative in Turkey.',
        link: '+90 (212) 555 01 00'
      },
      email: {
        title: 'Email Support',
        desc: 'Send us your inquiries online.',
        link: 'Contact Form'
      },
      careers: {
        title: 'Careers',
        desc: 'Join our team in Istanbul.',
        link: 'View Openings'
      }
    },
    footer: {
      desc: 'Providing global financial services and investment advice to institutions and individuals for over 85 years.',
      sections: [
        {
          title: 'What We Do',
          links: ['Investment Banking', 'Wealth Management', 'Investment Management', 'Sales & Trading', 'Research']
        },
        {
          title: 'Insights',
          links: ['Market Commentary', 'Economic Research', 'Sustainability', 'Technology', 'Global Outlook']
        },
        {
          title: 'About Us',
          links: ['Our Company', 'Leadership', 'Newsroom', 'Careers', 'Sustainability', 'History']
        },
        {
          title: 'Support',
          links: ['Contact Us', 'Global Offices', 'Client Login', 'Accessibility', 'Site Map']
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
      title: 'Küresel Yetkinliklerimiz',
      subtitle: 'Küresel ölçeğimizi ve yerel uzmanlığımızı kullanarak, olağanüstü sonuçlar sunmak için kapsamlı bir finansal hizmet yelpazesi sağlıyoruz.',
      viewAll: 'Tüm Hizmetleri Görüntüle',
      items: [
        {
          title: 'Yatırım Bankacılığı',
          desc: 'Dünya çapındaki şirketler, kurumlar ve hükümetler için stratejik danışmanlık, sermaye artırımı ve risk yönetimi çözümleri.',
        },
        {
          title: 'Varlık Yönetimi',
          desc: 'Bireylerin ve ailelerin varlıklarını korumalarına ve büyütmelerine yardımcı olmak için özel finansal planlama ve yatırım stratejileri.',
        },
        {
          title: 'Portföy Yönetimi',
          desc: 'Kurumsal ve bireysel müşteriler için uzun vadeli değer yaratan, kamu ve özel piyasalarda aktif varlık yönetimi.',
        },
        {
          title: 'Küresel Piyasalar',
          desc: 'Hisse senetleri, sabit getirili menkul kıymetler ve emtialarda likidite, uygulama ve pazar lideri araştırmalar sağlama.',
        },
        {
          title: 'Risk Yönetimi',
          desc: 'Karmaşık finansal ve operasyonel riskleri belirlemek, ölçmek ve azaltmak için gelişmiş çerçeveler ve analitikler.',
        },
        {
          title: 'Teknoloji ve İnovasyon',
          desc: 'Verimliliği artırmak ve küresel finansta yeni fırsatlar yaratmak için en son teknolojiyi ve veri bilimini kullanma.',
        }
      ]
    },
    differentiators: {
      title: 'Neden M0RGAN STANLEY?',
      subtitle: 'Mükemmellik ve dürüstlük taahhüdümüz, bizi dünyanın en etkili kurumları ve bireyleri için güvenilir bir ortak haline getirdi.',
      items: [
        {
          title: 'Küresel Erişim',
          desc: '40\'tan fazla ülkedeki ofislerimizle, müşterilerimize derin yerel bilgiler ve sorunsuz küresel uygulama sağlıyoruz.'
        },
        {
          title: 'Eşsiz Uzmanlık',
          desc: '60.000\'den fazla profesyonelden oluşan ekibimiz, başarınıza adanmış dünya standartlarında araştırmacılar, danışmanlar ve teknoloji uzmanlarını içerir.'
        },
        {
          title: 'Önce İnovasyon',
          desc: 'Pazar trendlerinin önünde kalmak ve üstün değer sunmak için sürekli olarak en son teknolojiye ve veri bilimine yatırım yapıyoruz.'
        }
      ]
    },
    insights: {
      title: 'Görüşler ve Analizler',
      subtitle: 'Küresel uzman ağımızdan düşünce liderliği.',
      readFull: 'Makalenin Tamamını Oku',
      exploreAll: 'Tüm Görüşleri Keşfedin',
      articles: [
        {
          category: 'Piyasa Görünümü',
          title: '2026 Küresel Ekonomik Tahmin: Belirsizlikte Yol Almak',
          summary: 'Baş ekonomistlerimiz değişen jeopolitik manzarayı ve bunun küresel ticaret ve faiz oranları üzerindeki etkisini analiz ediyor.',
        },
        {
          category: 'Sürdürülebilirlik',
          title: 'Gelişmekte Olan Piyasalarda Etki Yatırımcılığının Yükselişi',
          summary: 'ESG odaklı sermayenin Güneydoğu Asya\'daki altyapı gelişimini nasıl yönlendirdiği.',
        },
        {
          category: 'Teknoloji',
          title: 'Varlık Yönetiminde Yapay Zeka: Aldatmacanın Ötesinde',
          summary: 'Makine öğreniminin risk değerlendirmesi ve portföy optimizasyonunda nasıl devrim yarattığını keşfetmek.',
        },
        {
          category: 'Varlık',
          title: 'Gelecek Nesil İçin Miras Planlaması',
          summary: 'Sorunsuz servet transferi ve hayırsever miras oluşturma stratejileri.',
        }
      ]
    },
    cta: {
      title: 'Bir sonraki adımı atmaya hazır mısınız?',
      desc: 'İster kurumsal danışmanlık ister kişisel varlık yönetimi arıyor olun, uzmanlarımız finans dünyasının karmaşıklıklarında yol almanıza yardımcı olmak için buradadır.',
      findAdvisor: 'Danışman Bulun',
      contactTeam: 'Ekibimizle İletişime Geçin',
      offices: {
        title: 'Türkiye Ofisi',
        desc: 'İstanbul, Levent\'teki ana ofisimizi ziyaret edin.',
        link: 'Ofisi Bul',
        address: 'Levent, Büyükdere Cd. No:185, 34394 Şişli/İstanbul, Türkiye'
      },
      call: {
        title: 'Bizi Arayın',
        desc: 'Türkiye\'deki bir temsilciyle görüşün.',
        link: '+90 (212) 555 01 00'
      },
      email: {
        title: 'E-posta Desteği',
        desc: 'Sorularınızı çevrimiçi olarak bize gönderin.',
        link: 'İletişim Formu'
      },
      careers: {
        title: 'Kariyer',
        desc: 'İstanbul\'daki ekibimize katılın.',
        link: 'Açık Pozisyonları Görüntüle'
      }
    },
    footer: {
      desc: '85 yılı aşkın süredir kurumlara ve bireylere küresel finansal hizmetler ve yatırım danışmanlığı sağlamaktayız.',
      sections: [
        {
          title: 'Neler Yapıyoruz',
          links: ['Yatırım Bankacılığı', 'Varlık Yönetimi', 'Portföy Yönetimi', 'Satış ve Ticaret', 'Araştırma']
        },
        {
          title: 'Görüşler',
          links: ['Piyasa Yorumları', 'Ekonomik Araştırmalar', 'Sürdürülebilirlik', 'Teknoloji', 'Küresel Görünüm']
        },
        {
          title: 'Hakkımızda',
          links: ['Şirketimiz', 'Liderlik', 'Haber Odası', 'Kariyer', 'Sürdürülebilirlik', 'Tarihçe']
        },
        {
          title: 'Destek',
          links: ['Bize Ulaşın', 'Küresel Ofisler', 'Müşteri Girişi', 'Erişilebilirlik', 'Site Haritası']
        }
      ],
      legal: [
        'Gizlilik Politikası', 'Kullanım Koşulları', 'Düzenleyici Açıklamalar', 'Güvenlik', 'Çerez Ayarları'
      ],
      copyright: '© 2018 M0RGAN STANLEY Türkiye. Tüm hakları saklıdır.',
      disclaimer: 'Yatırım ürünleri ve hizmetleri, SIPC üyesi M0RGAN STANLEY & Co. LLC ve/veya SIPC üyesi M0RGAN STANLEY Smith Barney LLC tarafından sunulmaktadır. M0RGAN STANLEY Varlık Yönetimi, M0RGAN STANLEY Smith Barney LLC\'nin bir işletmesidir. Portföy yönetimi hizmetleri M0RGAN STANLEY Investment Management Inc. tarafından sunulmaktadır. Tüm ürün ve hizmetler her lokasyonda mevcut değildir. Kullanılabilirlik ve uygunlukla ilgili özel bilgiler için lütfen danışmanınıza danışın.'
    }
  }
};
