import React, { useState, useEffect } from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  // URL base do badge CodeTime
  const baseBadgeUrl = 'https://img.shields.io/endpoint?style=flat&color=222&url=https%3A%2F%2Fapi.codetime.dev%2Fv3%2Fusers%2Fshield%3Fuid%3D31383';
  const [badgeSrc, setBadgeSrc] = useState(`${baseBadgeUrl}&_=${Date.now()}`);
  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeSrc(`${baseBadgeUrl}&_=${Date.now()}`);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl perspective-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="w-5 h-5 text-blue-400 hover:rotate-6 transform transition-transform duration-300" />
            <span className="text-lg font-semibold">Robson Jose</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse hover:animate-bounce transition-transform" />
            <span>e muito</span>
            <Code className="w-4 h-4 text-blue-400 hover:rotate-6 transform transition-transform duration-300" />
          </div>

          <div className="text-gray-400 text-sm mt-4 md:mt-0 flex flex-col items-center">
            <span>© 2024 Todos os direitos reservados</span>
            {/* CodeTime Badge */}
            <a
              href="https://codetime.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <img
                src={badgeSrc}
                alt="CodeTime Badge"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;