
import React from 'react';
import { ResumeData } from '@/types/resume';

interface InternshipTemplateProps {
  data: ResumeData;
}

const InternshipTemplate: React.FC<InternshipTemplateProps> = ({
  data
}) => {
  return (
    <div className="bg-white p-6 min-h-full mx-0">
      {/* Header with clean styling for entry-level/internship */}
      <div className="border-b-2 border-blue-500 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="text-gray-600 mt-2 flex flex-col sm:flex-row sm:gap-4 text-sm">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Objective Statement - Good for internship resumes */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-blue-600 mb-2">Career Objective</h2>
        <p className="text-gray-700">
          {data.extras || 'Motivated university student seeking to leverage academic knowledge and proven leadership abilities in a challenging internship environment. Eager to contribute to team success through hard work, attention to detail, and organizational skills.'}
        </p>
      </section>

      {/* Education - Very important for students/interns */}
      {data.education && data.education.length > 0 && data.education.some(edu => edu.school || edu.degree) && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-1 mb-3">Education</h2>
          {data.education.filter(edu => edu.school || edu.degree).map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <strong className="text-gray-800">{edu.school}</strong>
                <span className="text-gray-600">{edu.year}</span>
              </div>
              <div className="text-gray-700">{edu.degree}</div>
              {edu.gpa && <div className="text-gray-600 text-sm">GPA: {edu.gpa}</div>}
              {/* Relevant coursework - especially useful for internship resumes */}
              {index === 0 && (
                <div className="mt-1 text-sm text-gray-600">
                  <strong>Relevant Coursework:</strong> Business Communications, Marketing Principles, Data Analysis, Web Development Fundamentals
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Experience - Format tailored for limited experience */}
      {data.experience && data.experience.length > 0 && data.experience.some(exp => exp.company || exp.position) && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-1 mb-3">Experience</h2>
          {data.experience.filter(exp => exp.company || exp.position).map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between flex-wrap">
                <strong className="text-gray-800">{exp.position}</strong>
                <span className="text-gray-600">{exp.period}</span>
              </div>
              <div className="italic text-gray-700">{exp.company}</div>
              {exp.description && exp.description.some(desc => desc) && (
                <ul className="list-disc ml-5 mt-1 text-sm text-gray-700">
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
        {/* Skills - Highlight both technical and soft skills for internships */}
        {data.skills && data.skills.length > 0 && data.skills.some(skill => skill) && (
          <section>
            <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-1 mb-3">Skills</h2>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.filter(skill => skill).map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects - Even small projects are important for internship resumes */}
        {data.projects && data.projects.length > 0 && data.projects.some(project => project.name || project.description) && (
          <section>
            <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-1 mb-3">Projects</h2>
            {data.projects.filter(project => project.name || project.description).map((project, index) => (
              <div key={index} className="mb-3">
                <div className="font-medium text-gray-800">{project.name}</div>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Activities & Leadership - Important for students/interns */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-200 pb-1 mb-3">Activities & Leadership</h2>
        <ul className="list-disc ml-5 text-gray-700 text-sm">
          <li>Member, Business Student Association (2022-Present)</li>
          <li>Volunteer, Community Outreach Program (2021-Present)</li>
          <li>Team Captain, Intramural Soccer (2022)</li>
        </ul>
      </section>
    </div>
  );
};

export default InternshipTemplate;
