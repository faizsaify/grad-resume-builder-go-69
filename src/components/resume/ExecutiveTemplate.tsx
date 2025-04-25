
import React from 'react';
import { ResumeData } from '@/types/resume';

interface ExecutiveTemplateProps {
  data: ResumeData;
}

const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({
  data
}) => {
  return (
    <div className="bg-white p-8 min-h-full mx-0 font-serif">
      {/* Header with executive styling */}
      <div className="border-b-4 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 tracking-tight">
          {data.personalInfo?.fullName || 'Your Name'}
        </h1>
        <div className="text-center text-gray-600 mt-2 flex justify-center flex-wrap gap-x-6 text-sm">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Professional Summary - Executive specific section */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Accomplished executive with a proven track record of strategic leadership and operational excellence. 
          Skilled in driving organizational growth, managing high-performing teams, and delivering exceptional results.
        </p>
      </section>

      {/* Experience - Most important for executive resumes */}
      {data.experience && data.experience.length > 0 && data.experience.some(exp => exp.company || exp.position) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Professional Experience</h2>
          {data.experience.filter(exp => exp.company || exp.position).map((exp, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{exp.position}</h3>
                <span className="text-gray-600 font-medium">{exp.period}</span>
              </div>
              <div className="font-medium text-gray-700 mb-2">{exp.company}</div>
              {exp.description && exp.description.some(desc => desc) && (
                <ul className="text-gray-700 space-y-1 list-disc pl-5">
                  {exp.description.filter(desc => desc).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        {data.education && data.education.length > 0 && data.education.some(edu => edu.school || edu.degree) && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Education</h2>
            {data.education.filter(edu => edu.school || edu.degree).map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="font-bold text-gray-800">{edu.degree}</div>
                <div className="text-gray-700">{edu.school}</div>
                <div className="text-gray-600 text-sm">{edu.year}</div>
              </div>
            ))}
          </section>
        )}

        {/* Skills - Format for executive level */}
        {data.skills && data.skills.length > 0 && data.skills.some(skill => skill) && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Core Competencies</h2>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.filter(skill => skill).map((skill, index) => (
                <div key={index} className="text-gray-700 flex items-center">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Projects - If applicable */}
      {data.projects && data.projects.length > 0 && data.projects.some(project => project.name || project.description) && (
        <section className="mt-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Key Initiatives</h2>
          {data.projects.filter(project => project.name || project.description).map((project, index) => (
            <div key={index} className="mb-3">
              <div className="font-bold text-gray-800">{project.name}</div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ExecutiveTemplate;
