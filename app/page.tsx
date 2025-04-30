import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import Link from 'next/link';
import { Project } from '../types';

export default function Home() {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Travel Blog",
      description: "A responsive travel blog with dynamic content loading",
      image: "/images/project2.jpg",
      tags: ["Next.js", "Tailwind CSS", "Contentful"]
    },
    // Add more projects as needed
  ];

  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                       py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Skills />
      
      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in working together?</h2>
          <p className="mb-10 text-lg max-w-2xl mx-auto text-blue-100 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 
                     font-semibold py-3 px-8 rounded-lg transition duration-300 
                     shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}