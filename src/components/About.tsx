import React from 'react';
import { Code, Server, Database, Bot, Coffee, Hash } from 'lucide-react';
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs, SiPython, SiMysql, SiSqlite, SiLua, SiGit } from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';

const About: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'APIs Robustas',
      description: 'Desenvolvimento de APIs escaláveis e seguras'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Bots Inteligentes',
      description: 'Automação para Discord, Telegram e WhatsApp'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Sistemas Escaláveis',
      description: 'Arquiteturas que crescem com o negócio'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Código Limpo',
      description: 'Práticas modernas de desenvolvimento'
    }
  ];

  // Lista de tecnologias e cores correspondentes (mesmas do Skills)
  const technologies = [
    'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS',
    'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java',
    'MySQL', 'SQLite', 'Lua', 'Git', 'C#', 'VSCode'
  ];
  const techColors: Record<string, string> = {
    HTML: 'from-red-500 to-pink-500',
    CSS: 'from-blue-500 to-cyan-500',
    Bootstrap: 'from-purple-500 to-pink-500',
    'Tailwind CSS': 'from-teal-500 to-cyan-500',
    JavaScript: 'from-yellow-500 to-orange-500',
    TypeScript: 'from-blue-600 to-indigo-600',
    'Node.js': 'from-green-500 to-emerald-500',
    Python: 'from-blue-500 to-indigo-600',
    Java: 'from-red-600 to-red-800',
    MySQL: 'from-blue-600 to-blue-800',
    SQLite: 'from-green-500 to-lime-500',
    Lua: 'from-teal-500 to-green-500',
    Git: 'from-gray-600 to-gray-800',
    'C#': 'from-gray-700 to-gray-900',
    VSCode: 'from-blue-400 to-blue-600'
  };
  // Mapeamento de ícones para tecnologias
  const techIcons: Record<string, JSX.Element> = {
    HTML: <SiHtml5 className="w-5 h-5" />, CSS: <SiCss3 className="w-5 h-5" />, Bootstrap: <SiBootstrap className="w-5 h-5" />, 'Tailwind CSS': <SiTailwindcss className="w-5 h-5" />,
    JavaScript: <SiJavascript className="w-5 h-5" />, TypeScript: <SiTypescript className="w-5 h-5" />, 'Node.js': <SiNodedotjs className="w-5 h-5" />, Python: <SiPython className="w-5 h-5" />,
    Java: <Coffee className="w-5 h-5" />, MySQL: <SiMysql className="w-5 h-5" />, SQLite: <SiSqlite className="w-5 h-5" />, Lua: <SiLua className="w-5 h-5" />,
    Git: <SiGit className="w-5 h-5" />, 'C#': <Hash className="w-5 h-5" />, VSCode: <Code className="w-5 h-5" />
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('aboutText')}
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`flex items-center space-x-1 px-4 py-2 bg-gradient-to-r ${techColors[tech]} text-white rounded-full text-sm font-medium transition-transform duration-200 transform hover:scale-110 cursor-pointer animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Concluídos</div>
                </div>
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfação do Cliente</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;