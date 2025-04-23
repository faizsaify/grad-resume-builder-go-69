
import React from 'react';
import { ResumeData } from '@/types/resume';

interface BasicTemplateProps {
  data: ResumeData;
}

const BasicTemplate: React.FC<BasicTemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 shadow-lg min-h-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="text-gray-600 mt-2">
          {data.personalInfo?.email && <span className="mx-2">{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span className="mx-2">{data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span className="mx-2">{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <strong>{edu.school}</strong>
                <span>{edu.year}</span>
              </div>
              <div>{edu.degree}</div>
              {edu.gpa && <div>GPA: {edu.gpa}</div>}
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <strong>{exp.company}</strong>
                <span>{exp.period}</span>
              </div>
              <div className="italic">{exp.position}</div>
              <ul className="list-disc ml-4 mt-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-3">
              <div className="font-semibold">{project.name}</div>
              <div className="text-gray-700">{project.description}</div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default BasicTemplate;
