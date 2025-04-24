
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  [key: string]: string | undefined;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  gpa?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface ResumeData {
  personalInfo?: PersonalInfo;
  education?: Education[];
  experience?: Experience[];
  skills?: string[];
  projects?: Project[];
  extras?: string;
}
