
import React from 'react';
import { ResumeData } from '@/types/resume';

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({
  data
}) => {
  return (
    <div className="bg-white min-h-full mx-0 flex flex-col">
      {/* Header with creative styling */}
      <div className="bg-indigo-600 text-white p-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-bl-full opacity-50"></div>
        <h1 className="text-4xl font-bold tracking-tight z-10 relative">
          {data.personalInfo?.fullName || 'Your Name'}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-indigo-100 z-10 relative">
          {data.personalInfo?.email && (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {data.personalInfo.email}
            </span>
          )}
          {data.personalInfo?.phone && (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {data.personalInfo.phone}
            </span>
          )}
          {data.personalInfo?.location && (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {data.personalInfo.location}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {/* Left column for skills and education */}
        <div className="md:col-span-1 space-y-6">
          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.filter(skill => skill).map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-3">Education</h2>
              {data.education.filter(edu => edu.school || edu.degree).map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="font-semibold text-gray-800">{edu.school}</div>
                  <div className="text-gray-600">{edu.degree}</div>
                  <div className="text-sm text-gray-500 flex justify-between">
                    <span>{edu.year}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-3">Projects</h2>
              {data.projects.filter(project => project.name || project.description).map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="font-semibold text-gray-800">{project.name}</div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right column for experience */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-3">Experience</h2>
              {data.experience.filter(exp => exp.company || exp.position).map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800">{exp.position}</h3>
                    <span className="text-sm text-indigo-600 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-gray-600 italic mb-2">{exp.company}</div>
                  {exp.description && exp.description.some(desc => desc) && (
                    <ul className="list-disc list-outside ml-5 space-y-1">
                      {exp.description.filter(desc => desc).map((desc, i) => (
                        <li key={i} className="text-gray-700">{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
