import React from 'react';
import { ChevronDown, Eye } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Avatar */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Foto de perfil:  /public/profile.jpg */}
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl animate-pulse-slow">
                  <img
                    src="/profile.jpg"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
              Robson Jose
            </h1>

            {/* Title */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              {t('heroTitle')}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t('viewWork')}</span>
              </button>

            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;