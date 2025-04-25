
import { ResumeData } from '@/types/resume';
import BasicTemplate from '@/components/resume/BasicTemplate';
import CreativeTemplate from '@/components/resume/CreativeTemplate';
import ExecutiveTemplate from '@/components/resume/ExecutiveTemplate';
import TechTemplate from '@/components/resume/TechTemplate';
import AcademicTemplate from '@/components/resume/AcademicTemplate';
import InternshipTemplate from '@/components/resume/InternshipTemplate';
import { 
  dummyData, 
  creativeDummyData, 
  executiveDummyData, 
  techDummyData, 
  academicDummyData, 
  internshipDummyData 
} from './dummyData';

// Map template IDs to their respective components and dummy data
export const templateMap: Record<string, { 
  component: React.ComponentType<{ data: ResumeData }>,
  dummyData: ResumeData
}> = {
  '1': { component: BasicTemplate, dummyData },
  '2': { component: CreativeTemplate, dummyData: creativeDummyData },
  '3': { component: ExecutiveTemplate, dummyData: executiveDummyData },
  '4': { component: TechTemplate, dummyData: techDummyData },
  '5': { component: AcademicTemplate, dummyData: academicDummyData },
  '6': { component: InternshipTemplate, dummyData: internshipDummyData }
};

// Get the template component based on template ID
export const getTemplateComponent = (templateId: string) => {
  return templateMap[templateId]?.component || BasicTemplate;
};

// Get the dummy data based on template ID
export const getTemplateDummyData = (templateId: string) => {
  return templateMap[templateId]?.dummyData || dummyData;
};

// Create an empty resume data structure based on the template's structure
export const createEmptyResumeData = (templateId: string): ResumeData => {
  const template = getTemplateDummyData(templateId);
  
  return {
    personalInfo: template.personalInfo ? {
      fullName: '',
      email: '',
      phone: '',
      location: ''
    } : undefined,
    
    education: template.education ? 
      [{ school: '', degree: '', year: '', gpa: '' }] : 
      undefined,
    
    experience: template.experience ? 
      [{ company: '', position: '', period: '', description: [''] }] : 
      undefined,
    
    skills: template.skills ? [] : undefined,
    
    projects: template.projects ? 
      [{ name: '', description: '' }] : 
      undefined
  };
};

// Track user modifications to calculate progress
export const calculateProgress = (userData: ResumeData, dummyData: ResumeData): number => {
  let totalFields = 0;
  let filledFields = 0;

  // Only count fields that are in the template structure
  if (dummyData.personalInfo && userData.personalInfo) {
    const personalFields = Object.keys(userData.personalInfo);
    totalFields += personalFields.length;
    filledFields += personalFields.filter(key => 
      userData.personalInfo && 
      userData.personalInfo[key as keyof typeof userData.personalInfo] && 
      userData.personalInfo[key as keyof typeof userData.personalInfo] !== ''
    ).length;
  }
  
  if (dummyData.education && userData.education) {
    userData.education.forEach(edu => {
      totalFields += 4; // school, degree, year, gpa
      if (edu.school && edu.school.trim() !== '') filledFields += 1;
      if (edu.degree && edu.degree.trim() !== '') filledFields += 1;
      if (edu.year && edu.year.trim() !== '') filledFields += 1;
      if (edu.gpa && edu.gpa.trim() !== '') filledFields += 1;
    });
  }
  
  if (dummyData.experience && userData.experience) {
    userData.experience.forEach(exp => {
      totalFields += 3; // company, position, period
      if (exp.company && exp.company.trim() !== '') filledFields += 1;
      if (exp.position && exp.position.trim() !== '') filledFields += 1;
      if (exp.period && exp.period.trim() !== '') filledFields += 1;
      
      // Description bullet points
      const nonEmptyDescriptions = exp.description.filter(desc => desc && desc.trim() !== '');
      totalFields += exp.description.length;
      filledFields += nonEmptyDescriptions.length;
    });
  }
  
  if (dummyData.skills && userData.skills) {
    const nonEmptySkills = userData.skills.filter(skill => skill && skill.trim() !== '');
    totalFields += Math.max(1, userData.skills.length);
    filledFields += nonEmptySkills.length;
  }
  
  if (dummyData.projects && userData.projects) {
    userData.projects.forEach(proj => {
      totalFields += 2; // name, description
      if (proj.name && proj.name.trim() !== '') filledFields += 1;
      if (proj.description && proj.description.trim() !== '') filledFields += 1;
    });
  }
  
  const percentage = totalFields > 0 
    ? Math.min(100, Math.max(0, Math.round((filledFields / totalFields) * 100)))
    : 0;
  
  return percentage;
};

