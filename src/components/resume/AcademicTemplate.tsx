
import React from 'react';
import { ResumeData } from '@/types/resume';

interface AcademicTemplateProps {
  data: ResumeData;
}

const AcademicTemplate: React.FC<AcademicTemplateProps> = ({
  data
}) => {
  return (
    <div className="bg-white p-8 min-h-full mx-0 font-serif">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="text-gray-600 mt-2 flex justify-center flex-wrap gap-4">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Education - Most important for academic resumes */}
      {data.education && data.education.length > 0 && data.education.some(edu => edu.school || edu.degree) && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-700 pb-1 mb-3">Education</h2>
          {data.education.filter(edu => edu.school || edu.degree).map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">{edu.school}</span>
                <span>{edu.year}</span>
              </div>
              <div className="text-gray-800 italic">{edu.degree}</div>
              {edu.gpa && <div className="text-gray-600">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </section>
      )}

      {/* Research Experience - Academic specific section */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-700 pb-1 mb-3">Research Experience</h2>
        {data.experience && data.experience.some(exp => exp.company || exp.position) ? (
          data.experience.filter(exp => exp.company || exp.position).map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">{exp.position}</span>
                <span>{exp.period}</span>
              </div>
              <div className="text-gray-700">{exp.company}</div>
              {exp.description && exp.description.some(desc => desc) && (
                <ul className="list-disc ml-5 mt-1">
                  {exp.description.filter(desc => desc).map((desc, i) => (
                    <li key={i} className="text-gray-700">{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <div className="text-gray-700">
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="font-bold">Research Assistant, Department of Computer Science</span>
                <span>September 2020 - Present</span>
              </div>
              <div>Stanford University</div>
              <ul className="list-disc ml-5 mt-1">
                <li>Conducting research on machine learning applications in genomic analysis</li>
                <li>Developing novel algorithms for processing large-scale biological datasets</li>
                <li>Collaborating with interdisciplinary team of researchers</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Publications - Academic specific section */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-700 pb-1 mb-3">Publications</h2>
        <div className="text-gray-700">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Smith, J., Johnson, A., <strong>Rodriguez, J.</strong> (2023). "Novel Applications of Machine Learning in Genomic Analysis." 
              <em> Nature Biotechnology</em>, 41(3), 312-320.
            </li>
            <li>
              <strong>Rodriguez, J.</strong>, Li, Q. (2022). "Computational Methods for Large-Scale Genomic Data Processing." 
              <em> Journal of Computational Biology</em>, 29(5), 425-438.
            </li>
            <li>
              Chen, T., <strong>Rodriguez, J.</strong>, Williams, P. (2021). "Accelerated Algorithms for Protein Structure Prediction." 
              <em> Bioinformatics</em>, 37(8), 1103-1110.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      {data.skills && data.skills.length > 0 && data.skills.some(skill => skill) && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-700 pb-1 mb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {data.skills.filter(skill => skill).map((skill, index) => (
              <span key={index} className="text-gray-700">• {skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Projects/Research Projects */}
      {data.projects && data.projects.length > 0 && data.projects.some(project => project.name || project.description) && (
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b-2 border-gray-700 pb-1 mb-3">Research Projects</h2>
          {data.projects.filter(project => project.name || project.description).map((project, index) => (
            <div key={index} className="mb-4">
              <div className="font-bold text-gray-800">{project.name}</div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default AcademicTemplate;
