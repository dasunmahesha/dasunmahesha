import { FC } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { Project } from '../../types';

const ProjectsPage: FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration. Features include user authentication, product management, shopping cart, and secure checkout.",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"]
    },
    {
      id: 2,
      title: "Travel Blog",
      description: "A responsive travel blog with dynamic content loading, image optimization, and CMS integration for easy content management.",
      image: "/images/project2.jpg",
      tags: ["Next.js", "Tailwind CSS", "Contentful", "Vercel"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      image: "/images/project3.jpg",
      tags: ["React", "Firebase", "Material-UI", "TypeScript"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather forecasting application that provides real-time weather data, location-based services, and interactive maps.",
      image: "/images/project4.jpg",
      tags: ["Vue.js", "OpenWeather API", "Chart.js", "Sass"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
            My Projects
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto text-center leading-relaxed">
          Here are some of the projects I've worked on. Each project represents different challenges 
          and solutions in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;