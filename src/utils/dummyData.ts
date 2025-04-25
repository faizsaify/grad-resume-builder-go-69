
import { ResumeData } from '@/types/resume';

// Comprehensive dummy data for resume previews
export const dummyData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA'
  },
  education: [
    {
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      year: '2018 - 2022',
      gpa: '3.8/4.0'
    },
    {
      school: 'San Francisco State University',
      degree: 'Master of Science in Data Science',
      year: '2022 - 2024',
      gpa: '3.9/4.0'
    }
  ],
  experience: [
    {
      company: 'Tech Innovations Inc.',
      position: 'Software Engineer',
      period: 'June 2022 - Present',
      description: [
        'Developed and maintained React-based web applications with TypeScript',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Collaborated with design team to improve UI/UX for customer-facing products',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'DataCorp Solutions',
      position: 'Software Engineering Intern',
      period: 'May 2021 - August 2021',
      description: [
        'Built RESTful APIs using Node.js and Express',
        'Created automated testing suites with Jest',
        'Participated in Agile development process with daily stand-ups'
      ]
    }
  ],
  skills: [
    'JavaScript', 
    'TypeScript', 
    'React', 
    'Node.js', 
    'Python', 
    'SQL', 
    'Git', 
    'Docker',
    'AWS',
    'Agile Methodology'
  ],
  projects: [
    {
      name: 'AI-Powered Task Management System',
      description: 'Developed a full-stack application using React, Node.js, and MongoDB that uses machine learning to prioritize tasks and suggest optimal schedules.'
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Created a responsive dashboard using D3.js to visualize sales data and customer behavior patterns for online retailers.'
    }
  ]
};

// Create variations for different templates
export const creativeDummyData: ResumeData = {
  ...dummyData,
  personalInfo: {
    ...dummyData.personalInfo,
    fullName: 'Jordan Rivera',
    email: 'jordan.creative@example.com'
  },
  skills: [
    'UI/UX Design', 
    'Adobe Creative Suite', 
    'Figma', 
    'HTML/CSS', 
    'JavaScript', 
    'React',
    'Illustration', 
    'Typography', 
    'Motion Graphics'
  ],
  experience: [
    {
      company: 'DesignLab Studios',
      position: 'UI/UX Designer',
      period: 'March 2021 - Present',
      description: [
        'Created user-focused interfaces for mobile and web applications',
        'Developed brand identity systems for startup clients',
        'Conducted user research and usability testing',
        'Collaborated with development teams to implement designs'
      ]
    },
    {
      company: 'Creative Solutions Agency',
      position: 'Graphic Design Intern',
      period: 'June 2020 - December 2020',
      description: [
        'Designed marketing collateral for various client campaigns',
        'Created social media graphics and animations',
        'Assisted senior designers with client presentations'
      ]
    }
  ]
};

export const executiveDummyData: ResumeData = {
  ...dummyData,
  personalInfo: {
    ...dummyData.personalInfo,
    fullName: 'Morgan Williams',
    email: 'morgan.williams@example.com'
  },
  experience: [
    {
      company: 'Global Financial Group',
      position: 'Senior Vice President, Operations',
      period: 'January 2019 - Present',
      description: [
        'Led digital transformation initiatives resulting in $2.5M annual cost savings',
        'Managed cross-functional teams of 50+ professionals across 3 departments',
        'Developed and implemented strategic plans that increased operational efficiency by 35%',
        'Presented quarterly results to C-suite executives and board members'
      ]
    },
    {
      company: 'Apex Consulting',
      position: 'Management Consultant',
      period: 'March 2015 - December 2018',
      description: [
        'Advised Fortune 500 clients on operational excellence and cost optimization',
        'Led teams of 3-5 consultants on client engagements',
        'Delivered solutions that improved client profitability by average of 22%'
      ]
    }
  ],
  skills: [
    'Strategic Planning', 
    'Team Leadership', 
    'Financial Analysis', 
    'Project Management', 
    'Change Management',
    'Stakeholder Communication',
    'Business Development',
    'Process Optimization'
  ]
};

export const techDummyData: ResumeData = {
  ...dummyData,
  personalInfo: {
    ...dummyData.personalInfo,
    fullName: 'Taylor Chen',
    email: 'taylor.chen@example.com'
  },
  experience: [
    {
      company: 'ByteScale Technologies',
      position: 'Full Stack Developer',
      period: 'August 2021 - Present',
      description: [
        'Built scalable microservices using Golang and Kubernetes',
        'Developed responsive front-end applications with React and Next.js',
        'Implemented GraphQL APIs to improve data fetching efficiency',
        'Automated deployment processes with GitHub Actions and Terraform'
      ]
    },
    {
      company: 'CodeWorks Startup',
      position: 'Junior Developer',
      period: 'January 2020 - July 2021',
      description: [
        'Maintained and enhanced e-commerce platform using MERN stack',
        'Optimized database queries resulting in 60% faster page load times',
        'Collaborated with product managers to implement new features'
      ]
    }
  ],
  skills: [
    'React/Next.js', 
    'Node.js', 
    'TypeScript', 
    'GraphQL', 
    'MongoDB', 
    'Kubernetes',
    'AWS',
    'Docker',
    'CI/CD',
    'Golang'
  ]
};

export const academicDummyData: ResumeData = {
  ...dummyData,
  personalInfo: {
    ...dummyData.personalInfo,
    fullName: 'Dr. Jamie Rodriguez',
    email: 'j.rodriguez@example.edu'
  },
  education: [
    {
      school: 'Stanford University',
      degree: 'Ph.D. in Computational Biology',
      year: '2016 - 2021',
      gpa: ''
    },
    {
      school: 'Massachusetts Institute of Technology',
      degree: 'Master of Science in Computer Science',
      year: '2014 - 2016',
      gpa: '3.95/4.0'
    },
    {
      school: 'University of Washington',
      degree: 'Bachelor of Science in Biology and Computer Science',
      year: '2010 - 2014',
      gpa: '3.9/4.0'
    }
  ],
  experience: [
    {
      company: 'Stanford University',
      position: 'Research Associate',
      period: 'September 2021 - Present',
      description: [
        'Leading research in machine learning applications for genomic analysis',
        'Published 5 papers in peer-reviewed journals including Nature Biotechnology',
        'Mentoring 4 graduate students on research projects',
        'Secured $1.2M in grant funding for lab research'
      ]
    },
    {
      company: 'National Institutes of Health',
      position: 'Research Intern',
      period: 'June 2019 - August 2019',
      description: [
        'Developed algorithms for processing large-scale genomic datasets',
        'Collaborated with interdisciplinary team of scientists',
        'Presented research findings at 2 national conferences'
      ]
    }
  ],
  skills: [
    'Machine Learning', 
    'Bioinformatics', 
    'Python', 
    'R', 
    'Statistical Analysis', 
    'Research Design',
    'Grant Writing',
    'Data Visualization',
    'Scientific Publishing',
    'Public Speaking'
  ]
};

export const internshipDummyData: ResumeData = {
  personalInfo: {
    fullName: 'Sam Thompson',
    email: 'sam.thompson@university.edu',
    phone: '(555) 987-6543',
    location: 'Boston, MA'
  },
  education: [
    {
      school: 'Boston University',
      degree: 'Bachelor of Science in Business Administration',
      year: '2021 - Present (Expected 2025)',
      gpa: '3.7/4.0'
    }
  ],
  experience: [
    {
      company: 'City Marketing Group',
      position: 'Marketing Assistant (Part-time)',
      period: 'September 2023 - Present',
      description: [
        'Assist with social media content creation and scheduling',
        'Track campaign performance metrics and prepare reports',
        'Support team with market research and competitor analysis'
      ]
    },
    {
      company: 'University Student Government',
      position: 'Communications Coordinator',
      period: 'January 2022 - December 2022',
      description: [
        'Managed social media accounts reaching over 5,000 students',
        'Coordinated promotional materials for campus events',
        'Collaborated with student clubs to increase event attendance'
      ]
    }
  ],
  skills: [
    'Microsoft Office', 
    'Social Media Management', 
    'Basic HTML/CSS', 
    'Adobe Photoshop', 
    'Event Planning',
    'Public Speaking',
    'Customer Service',
    'Team Collaboration'
  ],
  projects: [
    {
      name: 'Campus Sustainability Initiative',
      description: 'Led a team of 5 students in developing a proposal to reduce plastic waste on campus, resulting in new recycling program implementation.'
    },
    {
      name: 'Marketing Case Competition',
      description: 'Worked with a team of 3 to create a comprehensive marketing strategy for a local business, winning 2nd place among 20 teams.'
    }
  ]
};
