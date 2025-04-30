import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, tags, link = "#" }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                    hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 
                    hover:translate-y-[-4px]">
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          href={link} 
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold 
                   transition duration-300 group-hover:translate-x-2"
        >
          View Project
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;