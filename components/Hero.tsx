import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-200">Dasun Mahesha</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-blue-100">
            Software Developer (.NET)
          </h2>
          <p className="text-lg mb-10 max-w-lg text-blue-50 leading-relaxed">
            Motivated and detail-oriented software developer with expertise in backend development, 
            scalable system design, and frontend integration. Specialized in .NET Core, React.js, 
            and SQL databases.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              href="/projects" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 
                       rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-700 hover:bg-blue-800 border-2 border-blue-400 text-white 
                       font-semibold py-3 px-8 rounded-lg transition duration-300 
                       shadow-lg hover:shadow-xl"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="lg:w-2/5 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full
                        border-4 border-blue-400/30 shadow-2xl">
            <Image 
              src="/profile.jpg" 
              alt="Profile Image" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;