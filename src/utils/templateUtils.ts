
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
