
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TechTemplateProps {
  data: ResumeData;
}

const TechTemplate: React.FC<TechTemplateProps> = ({
  data
}) => {
  return (
    <div className="bg-gray-50 p-6 min-h-full mx-0 font-mono">
      {/* Header with tech-inspired styling */}
      <div className="bg-gray-900 text-gray-50 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold">
          {data.personalInfo?.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 mt-3 text-gray-300 text-sm">
          {data.personalInfo?.email && (
            <div className="flex items-center">
              <span className="text-green-400 mr-2">&gt;</span>
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo?.phone && (
            <div className="flex items-center">
              <span className="text-green-400 mr-2">&gt;</span>
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo?.location && (
            <div className="flex items-center">
              <span className="text-green-400 mr-2">&gt;</span>
              {data.personalInfo.location}
            </div>
          )}
        </div>
      </div>

      {/* Skills - Highlighted for tech resume */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 flex items-center">
            <span className="text-green-600 mr-2">&lt;/&gt;</span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {data.skills.filter(skill => skill).map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800 text-gray-100 px-3 py-1 rounded text-sm flex items-center"
              >
                <span className="text-green-400 mr-2">•</span>
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && data.experience.some(exp => exp.company || exp.position) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 flex items-center">
            <span className="text-green-600 mr-2">&lt;/&gt;</span>
            Experience
          </h2>
          {data.experience.filter(exp => exp.company || exp.position).map((exp, index) => (
            <div key={index} className="mb-5 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-1 flex-wrap">
                <h3 className="font-bold text-gray-800">{exp.position}</h3>
                <span className="text-gray-500 text-sm font-medium bg-gray-100 px-2 py-0.5 rounded">
                  {exp.period}
                </span>
              </div>
              <div className="text-gray-600 mb-2">{exp.company}</div>
              {exp.description && exp.description.some(desc => desc) && (
                <ul className="space-y-1 text-sm">
                  {exp.description.filter(desc => desc).map((desc, i) => (
                    <li key={i} className="flex">
                      <span className="text-green-600 mr-2">$</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects - Important for tech resumes */}
        {data.projects && data.projects.length > 0 && data.projects.some(project => project.name || project.description) && (
          <section>
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 flex items-center">
              <span className="text-green-600 mr-2">&lt;/&gt;</span>
              Projects
            </h2>
            {data.projects.filter(project => project.name || project.description).map((project, index) => (
              <div key={index} className="mb-4 bg-white p-3 rounded-lg shadow-sm">
                <div className="font-bold text-gray-800">{project.name}</div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && data.education.some(edu => edu.school || edu.degree) && (
          <section>
            <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 flex items-center">
              <span className="text-green-600 mr-2">&lt;/&gt;</span>
              Education
            </h2>
            {data.education.filter(edu => edu.school || edu.degree).map((edu, index) => (
              <div key={index} className="mb-3 bg-white p-3 rounded-lg shadow-sm">
                <div className="font-bold text-gray-800">{edu.school}</div>
                <div className="text-gray-600">{edu.degree}</div>
                <div className="text-gray-500 text-sm flex justify-between">
                  <span>{edu.year}</span>
                  {edu.gpa && <span>GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default TechTemplate;
