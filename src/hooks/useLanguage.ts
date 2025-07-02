import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipo de contexto de idioma
interface LanguageContextProps {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { pt: 'Início', en: 'Home', es: 'Inicio' },
  about: { pt: 'Sobre', en: 'About', es: 'Acerca' },
  skills: { pt: 'Habilidades', en: 'Skills', es: 'Habilidades' },
  projects: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' },
  experience: { pt: 'Experiência', en: 'Experience', es: 'Experiencia' },
  contact: { pt: 'Contato', en: 'Contact', es: 'Contacto' },

  // Hero Section
  heroTitle: {
    pt: 'Desenvolvedor Backend apaixonado por tecnologia, inovação e desafios',
    en: 'Backend Developer passionate about technology, innovation and challenges',
    es: 'Desarrollador Backend apasionado por la tecnología, innovación y desafíos'
  },
  heroSubtitle: {
    pt: 'Transformando ideias em soluções robustas e escaláveis',
    en: 'Transforming ideas into robust and scalable solutions',
    es: 'Transformando ideas en soluciones robustas e escalables'
  },
  viewWork: { pt: 'Ver Trabalhos', en: 'View Work', es: 'Ver Trabajos' },
  downloadCV: { pt: 'Download CV', en: 'Download CV', es: 'Descargar CV' },

  // About Section
  aboutTitle: { pt: 'Sobre Mim', en: 'About Me', es: 'Acerca de Mí' },
  aboutText: {
    pt: 'Com mais de 4 anos de experiência em desenvolvimento backend, me especializo em criar APIs robustas, bots inteligentes e sistemas escaláveis. Sou apaixonado por tecnologia e sempre busco soluções inovadoras para desafios complexos.',
    en: 'With over 4 years of backend development experience, I specialize in creating robust APIs, intelligent bots, and scalable systems. I am passionate about technology and always seek innovative solutions to complex challenges.',
    es: 'Con más de 4 años de experiência em desenvolvimento backend, me especializo em criar APIs robustas, bots inteligentes e sistemas escaláveis. Soy apasionado por la tecnología e sempre busco soluções inovadoras para desafios complexos.'
  },

  // Skills Section
  skillsTitle: { pt: 'Minhas Habilidades', en: 'My Skills', es: 'Mis Habilidades' },
  frontend: { pt: 'Front-End', en: 'Front-End', es: 'Front-End' },
  backend: { pt: 'Back-End', en: 'Back-End', es: 'Back-End' },
  beginner: { pt: 'Iniciante', en: 'Beginner', es: 'Principiante' },
  intermediate: { pt: 'Intermediário', en: 'Intermediate', es: 'Intermedio' },
  advanced: { pt: 'Avançado', en: 'Advanced', es: 'Avanzado' },
  devOps: { pt: 'DevOps', en: 'DevOps', es: 'DevOps' },
  tools: { pt: 'Ferramentas', en: 'Tools', es: 'Herramientas' },

  // Projects Section
  projectsTitle: { pt: 'Projetos em Destaque', en: 'Featured Projects', es: 'Proyectos Destacados' },
  viewProject: { pt: 'Ver Projeto', en: 'View Project', es: 'Ver Proyecto' },
  categoryWebDevelopment: { pt: 'Desenvolvimento Web', en: 'Web Development', es: 'Desarrollo Web' },
  categoryDesktopApp: { pt: 'Aplicativo Desktop', en: 'Desktop Application', es: 'Aplicación de Escritorio' },

  // Experience Section
  experienceTitle: { pt: 'Experiência Profissional', en: 'Professional Experience', es: 'Experiencia Profesional' },
  present: { pt: 'Presente', en: 'Present', es: 'Presente' },
  achievementsTitle: { pt: 'Principais Conquistas', en: 'Key Achievements', es: 'Logros Principales' },
  github: { pt: 'GitHub', en: 'GitHub', es: 'GitHub' },
  // Experience Entry
  expPosition: { pt: 'Experiência Profissional', en: 'Professional Experience', es: 'Experiencia Profesional' },
  expCompany: { pt: 'Freelancer & Comunidades', en: 'Freelancer & Communities', es: 'Freelancer y Comunidades' },
  expLocation: { pt: 'Online', en: 'Online', es: 'En línea' },
  expDescription: { pt: 'Atuação ativa em fóruns e comunidades de tecnologia, ajudando outros desenvolvedores.', en: 'Active participation in tech forums and communities, helping other developers.', es: 'Participación activa en foros y comunidades de tecnología, ayudando a otros desarrolladores.' },
  expAch1: { pt: 'Serviços freelancer em projetos diversos de backend e APIs', en: 'Freelance services in various backend and API projects', es: 'Servicios freelance en diversos projetos de backend e APIs' },
  expAch2: { pt: 'Colaboração em projetos open source e suporte técnico voluntário', en: 'Collaboration on open source projects and volunteer tech support', es: 'Colaboración en projetos de código aberto e suporte técnico voluntario' },
  expAch3: { pt: 'Desenvolvimento e manutenção do próprio portfolio', en: 'Development and maintenance of own portfolio', es: 'Desarrollo e manutenção de mi próprio portafolio' },
  // Experience Technologies
  techBackend: { pt: 'Backend', en: 'Backend', es: 'Backend' },
  techAPIs: { pt: 'APIs', en: 'APIs', es: 'APIs' },
  techOpenSource: { pt: 'Open Source', en: 'Open Source', es: 'Código Abierto' },

  // Contact Section
  contactTitle: { pt: 'Vamos Trabalhar Juntos', en: 'Let\'s Work Together', es: 'Trabajemos Juntos' },
  contactSubtitle: {
    pt: 'Estou sempre aberto a novos desafios e oportunidades',
    en: 'I\'m always open to new challenges and opportunities',
    es: 'Siempre estoy abierto a nuevos desafíos e oportunidades'
  },
  contactHeader: { pt: 'Entre em Contato', en: 'Get in Touch', es: 'Ponte en Contacto' },
  contactText: { pt: 'Estou sempre interessado em novos projetos e oportunidades de colaboração. Seja para desenvolvimento de APIs, criação de bots ou sistemas escaláveis, vamos conversar sobre como posso ajudar você.', en: 'I am always interested in new projects and collaboration opportunities. Whether it’s API development, bot creation, or scalable systems, let’s discuss how I can help you.', es: 'Siempre estoy interesado en nuevos projetos e oportunidades de colaboração. Ya sea desenvolvimento de APIs, creación de bots o sistemas escaláveis, hablemos sobre cómo puedo ayudarte.' },
  phone: { pt: 'Telefone', en: 'Phone', es: 'Teléfono' },
  location: { pt: 'Localização', en: 'Location', es: 'Ubicación' },
  socialTitle: { pt: 'Redes Sociais', en: 'Social Links', es: 'Redes Sociales' },
  instagram: { pt: 'Instagram', en: 'Instagram', es: 'Instagram' },
  placeholderName: { pt: 'Seu nome completo', en: 'Your full name', es: 'Tu nombre completo' },
  placeholderEmail: { pt: 'seu@email.com', en: 'your@email.com', es: 'tu@correo.com' },
  placeholderMessage: { pt: 'Descreva seu projeto ou como posso ajudá-lo...', en: 'Describe your project or how I can help...', es: 'Describe tu proyecto o cómo puedo ayudarte...' },
  name: { pt: 'Nome', en: 'Name', es: 'Nombre' },
  email: { pt: 'Email', en: 'Email', es: 'Email' },
  message: { pt: 'Mensagem', en: 'Message', es: 'Mensaje' },
  sendMessage: { pt: 'Enviar Mensagem', en: 'Send Message', es: 'Enviar Mensaje' },
  contactSuccess: { pt: 'Contato realizado com sucesso!', en: 'Message sent successfully!', es: '¡Mensaje enviado con éxito!' },
  contactError: { pt: 'Ocorreu um erro ao enviar. Por favor, tente novamente.', en: 'Error sending message. Please try again.', es: 'Error al enviar. Por favor, inténtalo de nuevo.' },
  contactNotConfigured: { pt: 'Formulário de contato não configurado. Entre em contato diretamente por email.', en: 'Contact form not configured. Please contact directly via email.', es: 'Formulario de contacto no configurado. Por favor, contacta directamente por email.' },

  // Theme
  darkMode: { pt: 'Modo Escuro', en: 'Dark Mode', es: 'Modo Oscuro' },
  lightMode: { pt: 'Modo Claro', en: 'Light Mode', es: 'Modo Claro' },
};

// Contexto de idioma
const LanguageContext = createContext<LanguageContextProps>({
  language: 'pt',
  changeLanguage: () => { }
});

// Provider para envolver a aplicação sem JSX
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['pt', 'en', 'es'].includes(saved)) setLanguage(saved);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, changeLanguage } },
    children
  );
};

export const useLanguage = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = (key: string): string => translations[key]?.[language] || key;
  return { language, changeLanguage, t };
};