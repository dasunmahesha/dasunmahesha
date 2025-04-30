import { FC } from 'react';
import { SkillGroup } from '@types';

const Skills: FC = () => {
  const skills: SkillGroup[] = [
    {
      category: "Programming & Frameworks",
      technologies: ["C#", ".NET Core", "ASP.NET", "TypeScript", "JavaScript", "Python", "PHP", "Java"]
    },
    {
      category: "Frontend",
      technologies: ["React.js", "Next.js", "HTML5", "CSS3", "SCSS", "jQuery", "Bootstrap", "Tailwind CSS"]
    },
    {
      category: "Database & Backend",
      technologies: ["MSSQL", "MySQL", "Dapper", "Node.js", "REST APIs", "Stored Procedures"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "SVN", "Clean Architecture", "Dependency Injection", "JWT", "Selenium"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-20 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
            My Skills
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                        hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] 
                        transition-all duration-300 hover:translate-y-[-4px] border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center group">
                    <div className="mr-3 p-1.5 rounded-full bg-blue-50 group-hover:bg-blue-100 
                                  transition-colors duration-200">
                      <svg 
                        className="w-3 h-3 text-blue-700" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-700 
                                   transition-colors duration-200 font-medium">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;