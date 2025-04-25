import React from 'react';
import { ResumeData } from '@/types/resume';
interface BasicTemplateProps {
  data: ResumeData;
}
const BasicTemplate: React.FC<BasicTemplateProps> = ({
  data
}) => {
  return <div className="bg-white p-8 shadow-lg min-h-full mx-0">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="text-gray-600 mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Education */}
      {data.education && data.education.length > 0 && data.education.some(edu => edu.school || edu.degree) && <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Education</h2>
          {data.education.filter(edu => edu.school || edu.degree).map((edu, index) => <div key={index} className="mb-3">
              <div className="flex justify-between">
                <strong>{edu.school}</strong>
                <span>{edu.year}</span>
              </div>
              <div>{edu.degree}</div>
              {edu.gpa && <div>GPA: {edu.gpa}</div>}
            </div>)}
        </section>}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && data.experience.some(exp => exp.company || exp.position) && <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Experience</h2>
          {data.experience.filter(exp => exp.company || exp.position).map((exp, index) => <div key={index} className="mb-4">
              <div className="flex justify-between">
                <strong>{exp.company}</strong>
                <span>{exp.period}</span>
              </div>
              <div className="italic">{exp.position}</div>
              {exp.description && exp.description.some(desc => desc) && <ul className="list-disc ml-4 mt-1">
                  {exp.description.filter(desc => desc).map((desc, i) => <li key={i} className="text-gray-700">{desc}</li>)}
                </ul>}
            </div>)}
        </section>}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && data.skills.some(skill => skill) && <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.filter(skill => skill).map((skill, index) => <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                {skill}
              </span>)}
          </div>
        </section>}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && data.projects.some(project => project.name || project.description) && <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3 pb-1">Projects</h2>
          {data.projects.filter(project => project.name || project.description).map((project, index) => <div key={index} className="mb-3">
              <div className="font-semibold">{project.name}</div>
              <div className="text-gray-700">{project.description}</div>
            </div>)}
        </section>}
    </div>;
};
export default BasicTemplate;