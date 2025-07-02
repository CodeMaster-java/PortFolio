import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, Clock, Bot, Coffee, Hash, Code } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiElectron,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiCss3,
  SiHtml5,
  SiChartdotjs,
  SiNextdotjs,
  SiBootstrap,
  SiSqlite,
  SiLua,
  SiGit,
  SiGithub,
  SiVscodium
} from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  // Mapeamento de cores e ícones para tecnologias
  const techColors: Record<string, string> = {
    React: 'from-blue-500 to-cyan-500',
    TypeScript: 'from-blue-600 to-indigo-600',
    Vite: 'from-green-500 to-teal-500',
    'Tailwind CSS': 'from-teal-500 to-cyan-500',
    PHP: 'from-purple-600 to-purple-800',
    MySQL: 'from-orange-500 to-orange-700',
    'Chart.js': 'from-pink-500 to-red-500',
    Electron: 'from-purple-500 to-indigo-600',
    'Node.js': 'from-green-600 to-green-800',
    JavaScript: 'from-yellow-500 to-yellow-600',
    Python: 'from-green-500 to-blue-600',
    CSS: 'from-blue-500 to-blue-700',
    HTML: 'from-orange-500 to-red-500',
    NextJs: 'from-gray-700 to-black',
    Bootstrap: 'from-purple-500 to-pink-500',
    Java: 'from-red-600 to-red-800',
    SQLite: 'from-green-500 to-lime-500',
    Lua: 'from-teal-500 to-green-500',
    'C#': 'from-gray-700 to-gray-900',
    API: 'from-indigo-500 to-blue-500',
    Git: 'from-gray-600 to-gray-800',
    GitHub: 'from-gray-700 to-gray-900',
    VSCode: 'from-blue-400 to-blue-600',
  };
  const techIcons: Record<string, JSX.Element> = {
    React: <SiReact className="w-4 h-4" />,
    TypeScript: <SiTypescript className="w-4 h-4" />,
    Vite: <SiVite className="w-4 h-4" />,
    'Tailwind CSS': <SiTailwindcss className="w-4 h-4" />,
    PHP: <SiPhp className="w-4 h-4" />,
    MySQL: <SiMysql className="w-4 h-4" />,
    'Chart.js': <SiChartdotjs className="w-4 h-4" />,
    Electron: <SiElectron className="w-4 h-4" />,
    'Node.js': <SiNodedotjs className="w-4 h-4" />,
    JavaScript: <SiJavascript className="w-4 h-4" />,
    Python: <SiPython className="w-4 h-4" />,
    CSS: <SiCss3 className="w-4 h-4" />,
    HTML: <SiHtml5 className="w-4 h-4" />,
    NextJs: <SiNextdotjs className="w-4 h-4" />,
    Bootstrap: <SiBootstrap className="w-4 h-4" />,
    Java: <Coffee className="w-4 h-4" />,
    SQLite: <SiSqlite className="w-4 h-4" />,
    Lua: <SiLua className="w-4 h-4" />,
    'C#': <Hash className="w-4 h-4" />,
    API: <Code className="w-4 h-4" />,
    Git: <SiGit className="w-4 h-4" />,
    GitHub: <SiGithub className="w-4 h-4" />,
    VSCode: <SiVscodium className="w-4 h-4" />,
  };

  const projects = [
    {
      id: 1,
      title: 'Portfólio Pessoal',
      description: 'Este portfólio pessoal foi construído com React, Vite e Tailwind CSS.',
      detailedDescription: 'Projeto com design responsivo, suporte a temas claro/escuro, tradução dinâmica e animações sutis.',
      image: '/projectportfolio.png',  // Capa local em /public
      video: '/projectportfolio.mp4',  // Vídeo de demonstração local em /public
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      icon: <ExternalLink className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-800',
      category: t('categoryWebDevelopment'),
      liveUrl: window.location.href,
      repoUrl: 'https://github.com/sempai23w/PortFolio.git',
      features: [
        'Design responsivo em múltiplos dispositivos',
        'Suporte a temas claro e escuro',
        'Tradução dinâmica com Context API',
        'Animações personalizadas com Tailwind CSS'
      ],
    },
    {
      id: 2,
      title: 'WorkTime System - Controle de Ponto',
      description: 'Sistema completo de controle de ponto empresarial com autenticação, relatórios e painel administrativo.',
      detailedDescription: 'Sistema profissional de gestão de tempo e presença desenvolvido com React TypeScript e PHP, featuring autenticação robusta, sistema de notificações por email, relatórios em PDF/CSV, painel administrativo completo e interface responsiva moderna.',
      image: '/worktime-preview.png',  // Capa local em /public
      video: '/worktime-demo.mp4',    // Vídeo de demonstração local em /public
      technologies: ['React', 'TypeScript', 'PHP', 'MySQL', 'Tailwind CSS', 'Vite', 'Chart.js'],
      icon: <Clock className="w-6 h-6" />,
      color: 'from-emerald-600 to-emerald-800',
      category: t('categoryWebDevelopment'),
      liveUrl: 'https://worktime.firehosting.com.br',
      repoUrl: null,
      features: [
        'Sistema de autenticação com múltiplos níveis de acesso',
        'Registro de ponto com entrada, saída e pausas',
        'Painel administrativo para gestão de usuários',
        'Relatórios detalhados com exportação PDF/CSV',
        'Sistema de notificações por email automatizado',
        'Interface responsiva para desktop, tablet e mobile',
        'Dashboard com gráficos e análises em tempo real',
        'Configurações flexíveis de horários e regras',
        'Sistema de solicitação de acesso para novos usuários',
        'Fuso horário configurado para Brasília (UTC-3)'
      ],
      highlights: [
        'Hospedado na Hostinger com deploy profissional',
        'Backend PHP robusto com arquitetura MVC',
        'Frontend React moderno com TypeScript',
        'Sistema CORS configurado para múltiplos domínios',
        'Segurança avançada com validações e proteções'
      ],
      technicalDetails: {
        frontend: 'React 18 + TypeScript + Vite + Tailwind CSS',
        backend: 'PHP + MySQL com APIs RESTful',
        hosting: 'Hostinger - Deploy profissional',
        features: 'Autenticação, Relatórios, Notificações, Dashboard'
      }
    },
    {
      id: 3,
      title: 'BotDeck - Discord Bot Manager',
      description: 'Gerencie, monitore e controle múltiplos bots Discord em um só lugar, com logs em tempo real e automações inteligentes.',
      detailedDescription: 'BotDeck é um aplicativo desktop moderno desenvolvido com Electron e Node.js para centralizar o gerenciamento de bots Discord já existentes (Node.js e Python). Permite iniciar, parar, reiniciar e monitorar múltiplos bots simultaneamente, com detecção automática de arquivos principais, logs em tempo real, notificações, status visual, atalhos de teclado e interface dark mode profissional. Ideal para desenvolvedores que querem praticidade e controle total sobre seus bots.',
      image: '/botdeck-preview.png',
      video: '/botdeck-demo.mp4',
      technologies: ['Electron', 'Node.js', 'JavaScript', 'Python', 'CSS', 'HTML'],
      icon: <Bot className="w-6 h-6" />,
      color: 'from-indigo-600 to-indigo-800',
      category: t('categoryDesktopApp'),
      liveUrl: null,
      repoUrl: 'https://github.com/sempai23w/BotDeck.git',
      features: [
        'Gerenciamento de múltiplos bots Discord (Node.js e Python)',
        'Detecção automática de arquivos principais (index.js, main.py, etc.)',
        'Iniciar, parar e reiniciar bots individualmente ou todos de uma vez',
        'Logs em tempo real (stdout/stderr) de cada bot',
        'Status visual: online/offline',
        'Modo escuro profissional',
        'Ícone na bandeja com atalhos rápidos',
        'Notificações toast para eventos importantes',
        'Atalhos de teclado (Ctrl+N, Ctrl+R, Esc)',
        'Armazenamento local seguro (electron-store)',
        'Verificação automática de dependências',
        'Encerramento seguro dos processos',
        'Diagnóstico automático de problemas comuns',
        'Suporte a múltiplos perfis de configuração'
      ],
      highlights: [
        'Interface redesenhada e responsiva (2025)',
        'Suporte aprimorado para bots Python (venv, requirements)',
        'Logs coloridos e filtráveis',
        'Performance otimizada para múltiplos bots',
        'Arquitetura robusta com Electron e Node.js'
      ],
      technicalDetails: {
        frontend: 'Electron + HTML + CSS + JavaScript',
        backend: 'Node.js (processo principal Electron), integração com Python via child_process',
        hosting: 'Aplicativo desktop (Windows, Linux, macOS)',
        features: 'Gerenciamento de processos, logs em tempo real, notificações, armazenamento local'
      }
    },
  ];

  // Estado para controle de modal de detalhes
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };
  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('projectsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Tilt
                key={project.id}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.2}
                perspective={1000}
                transitionSpeed={400}
              >
                {/* Card com efeito 3D Tilt */}
                <div
                  key={project.id}
                  className="group [perspective:1000px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform-gpu group-hover:[transform:perspective(1000px)_rotateY(8deg)_rotateX(4deg)_translateY(-10px)] group-hover:shadow-2xl"
                  style={{
                    animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`absolute top-4 right-4 p-2 bg-gradient-to-r ${project.color} rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                      <button onClick={() => openModal(project)}>
                        {project.icon}
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => {
                        const color = techColors[tech] || 'from-gray-200 to-gray-300';
                        const Icon = techIcons[tech];
                        return (
                          <span
                            key={tech}
                            className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${color} text-white text-xs font-medium rounded-full shadow-sm transform transition-transform duration-200 hover:scale-105`}
                          >
                            {Icon}
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                      {/* Botão Ver Detalhe */}
                      <button
                        onClick={() => openModal(project)}
                        className="mt-2 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-3 py-1.5 rounded-lg shadow-md font-semibold transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <span>Ver Detalhe</span>
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg shadow-md transform transition hover:-translate-y-1 hover:from-blue-600 hover:to-blue-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t('viewProject')}</span>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1 bg-gray-700 dark:bg-gray-600 text-white px-3 py-1.5 rounded-lg shadow-md transform transition hover:-translate-y-1 hover:bg-gray-800 dark:hover:bg-gray-500"
                        >
                          <Github className="w-4 h-4" />
                          <span>{t('github')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalhes */}
      {selectedProject && (
        <div onClick={closeModal} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full relative overflow-auto max-h-[90vh] animate-fade-in-up"
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h3>
            {/* Exibe vídeo se disponível, com poster da capa */}
            <div className="w-full h-48 mb-4">
              {selectedProject.video ? (
                <video
                  controls
                  poster={selectedProject.image}
                  className="w-full h-full object-cover rounded"
                >
                  <source src={selectedProject.video} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded" />
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{selectedProject.detailedDescription}</p>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recursos</h4>
            <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400 text-sm">
              {selectedProject.features.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map(tech => {
                const color = techColors[tech] || 'from-gray-200 to-gray-300';
                const Icon = techIcons[tech];
                return (
                  <span
                    key={tech}
                    className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${color} text-white text-xs font-medium rounded-full shadow-sm transform transition-transform duration-200 hover:scale-105`}
                  >
                    {Icon}
                    <span>{tech}</span>
                  </span>
                );
              })}
            </div>
            <div className="flex space-x-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg shadow-md transform transition hover:-translate-y-1 hover:from-blue-600 hover:to-blue-700"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('viewProject')}</span>
                </a>
              )}
              {selectedProject.repoUrl && (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 bg-gray-700 dark:bg-gray-600 text-white px-3 py-1.5 rounded-lg shadow-md transform transition hover:-translate-y-1 hover:bg-gray-800 dark:hover:bg-gray-500"
                >
                  <Github className="w-5 h-5" />
                  <span>{t('github')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;