import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: FC = () => {
  const experiences = [
    {
      title: "Intern - Software Developer (.NET)",
      company: "VitalHub Innovation Lab",
      period: "December 2024 - Present",
      description: "Working on scalable healthcare applications using .NET Core, developing RESTful APIs, and managing SQL operations with Dapper and MSSQL. Contributing to frontend development with Marionette.js and Backbone.js."
    },
    {
      title: "Junior Web Developer - Internship",
      company: "Dimensions IT",
      period: "March 2024 - December 2024",
      description: "Developed and maintained web applications, collaborated with cross-functional teams, and optimized frontend performance for improved user experience."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-24 container mx-auto px-4">
        {/* Profile Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
              <Image 
                src="/profile.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                  About Me
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. 
                I specialize in JavaScript technologies across the stack (MERN) and have a strong foundation in 
                software architecture and user experience design.
              </p>
              <div className="flex gap-6">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </Link>
                <a 
                  href="/resume.pdf" 
                  className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl border border-blue-100"
                  target="_blank"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-4">{exp.company} | {exp.period}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">B.Tech. in Software Technology</h3>
              <p className="text-gray-600 mb-2">University of Vocational Technology | 2021 - Present</p>
              <p className="text-gray-700">Currently pursuing degree in Software Technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">G.C.E. Advanced Level</h3>
              <p className="text-gray-600 mb-2">Senarath Paranavithana National School | 2019</p>
              <p className="text-gray-700">Technology Stream (1B, 2C)</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;