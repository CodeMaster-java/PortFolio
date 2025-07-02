import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Plug, Coffee, Hash } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiSqlite,
  SiLua,
  SiGit,
  SiGithub,
  SiVscodium,
  SiPhp,
  SiChartdotjs
} from 'react-icons/si';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const frontendSkills = [
    { name: 'React', level: 60, color: 'from-blue-500 to-cyan-500' },
    { name: 'NextJs', level: 60, color: 'from-gray-700 to-black' },
    { name: 'HTML', level: 100, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 100, color: 'from-blue-500 to-blue-700' },
    { name: 'Bootstrap', level: 100, color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', level: 100, color: 'from-teal-500 to-cyan-500' },
    { name: 'JavaScript', level: 100, color: 'from-yellow-500 to-yellow-600' },
    { name: 'TypeScript', level: 60, color: 'from-blue-600 to-indigo-600' },
    { name: 'Chart.js', level: 65, color: 'from-pink-500 to-red-500' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 100, color: 'from-green-600 to-green-800' },
    { name: 'Python', level: 100, color: 'from-green-500 to-blue-600' },
    { name: 'PHP', level: 75, color: 'from-purple-600 to-purple-800' },
    { name: 'Java', level: 20, color: 'from-red-600 to-red-800' },
    { name: 'MySQL', level: 70, color: 'from-orange-500 to-orange-700' },
    { name: 'SQLite', level: 60, color: 'from-green-500 to-lime-500' },
    { name: 'Lua', level: 60, color: 'from-teal-500 to-green-500' },
    { name: 'C#', level: 20, color: 'from-gray-700 to-gray-900' },
    { name: 'API', level: 75, color: 'from-indigo-500 to-blue-500' },
  ];

  const devOpsSkills = [
    { name: 'Git', level: 60, color: 'from-gray-600 to-gray-800' },
    { name: 'GitHub', level: 60, color: 'from-gray-700 to-gray-900' },
  ];

  // Ferramentas
  const tools = [
    { name: 'VSCode', level: 100, color: 'from-blue-400 to-blue-600' },
  ];

  // Mapeamento de ícones para skills
  const skillIcons: Record<string, JSX.Element> = {
    React: <SiReact className="w-5 h-5 text-blue-500" />,
    NextJs: <SiNextdotjs className="w-5 h-5 text-gray-900" />,
    HTML: <SiHtml5 className="w-5 h-5 text-red-500" />,
    CSS: <SiCss3 className="w-5 h-5 text-blue-500" />,
    Bootstrap: <SiBootstrap className="w-5 h-5 text-purple-600" />,
    'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-teal-500" />,
    JavaScript: <SiJavascript className="w-5 h-5 text-yellow-500" />,
    TypeScript: <SiTypescript className="w-5 h-5 text-blue-600" />,
    'Chart.js': <SiChartdotjs className="w-5 h-5 text-pink-500" />,
    'Node.js': <SiNodedotjs className="w-5 h-5 text-green-600" />,
    Python: <SiPython className="w-5 h-5 text-blue-500" />,
    PHP: <SiPhp className="w-5 h-5 text-purple-600" />,
    Java: <Coffee className="w-5 h-5 text-red-600" />,
    MySQL: <SiMysql className="w-5 h-5 text-blue-600" />,
    SQLite: <SiSqlite className="w-5 h-5 text-indigo-500" />,
    Lua: <SiLua className="w-5 h-5 text-teal-500" />,
    'C#': <Hash className="w-5 h-5 text-gray-600" />,
    API: <Plug className="w-5 h-5 text-indigo-500" />,
    Git: <SiGit className="w-5 h-5 text-orange-500" />,
    GitHub: <SiGithub className="w-5 h-5 text-black dark:text-white" />,
    VSCode: <SiVscodium className="w-5 h-5 text-blue-500" />
  };

  const SkillBar = ({ skill }: { skill: typeof frontendSkills[0] }) => {
    const getSkillLevel = (level: number) => {
      if (level >= 80) return t('advanced');
      if (level >= 60) return t('intermediate');
      return t('beginner');
    };

    return (
      <div className="group">
        <div className="flex justify-between items-center mb-2">
          <span className="flex items-center space-x-1 font-medium text-gray-800 dark:text-gray-200">
            {skillIcons[skill.name]}
            <span>{skill.name}</span>
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {getSkillLevel(skill.level)}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
            style={{
              width: `${skill.level}%`,
              animation: 'slideInLeft 1s ease-out'
            }}
          ></div>
        </div>
        <div className="text-right mt-1">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('skillsTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {/* Frontend Skills */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {t('frontend')}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {t('backend')}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(index + frontendSkills.length) * 0.1}s` }}
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {t('devOps')}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {devOpsSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(index + frontendSkills.length + backendSkills.length) * 0.1}s` }}
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {t('tools')}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {tools.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(index + frontendSkills.length + backendSkills.length + devOpsSkills.length) * 0.1}s` }}
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;