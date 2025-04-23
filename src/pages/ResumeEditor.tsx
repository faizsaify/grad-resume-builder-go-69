import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download } from 'lucide-react';
import { downloadPDF } from '@/utils/pdfUtils';
import { useToast } from '@/hooks/use-toast';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { 
  ChevronDown,
  UserCircle, 
  GraduationCap,
  Briefcase,
  Wrench,
  Folder,
  Award,
  Undo,
  Redo
} from 'lucide-react';
import BasicTemplate from '@/components/resume/BasicTemplate';
import { ResumeData } from '@/types/resume';

const ResumeEditor = () => {
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '(123) 456-7890',
      location: 'New York, NY'
    },
    education: [{
      school: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      year: '2019 - 2023',
      gpa: '3.8'
    }],
    experience: [{
      company: 'Tech Corp',
      position: 'Software Engineer Intern',
      period: 'Summer 2022',
      description: [
        'Developed and maintained web applications using React and TypeScript',
        'Collaborated with team members using Git and Agile methodologies',
        'Improved application performance by 40% through code optimization'
      ]
    }],
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'Git'
    ],
    projects: [{
      name: 'Personal Portfolio',
      description: 'Built a responsive portfolio website using React and Tailwind CSS'
    }]
  });

  const handleInputChange = (section: keyof ResumeData, value: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const handleExportPDF = async () => {
    try {
      await downloadPDF('resume-preview', 'my-resume.pdf');
      toast({
        title: "Success",
        description: "Your resume has been downloaded as PDF",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
      });
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <div className="border-b p-4 flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Undo className="h-4 w-4 mr-1" />
            Undo
          </Button>
          <Button variant="outline" size="sm">
            <Redo className="h-4 w-4 mr-1" />
            Redo
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Autosaving...</span>
          <Button onClick={handleExportPDF}>
            <Download className="h-4 w-4 mr-1" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left Panel - Form */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <ScrollArea className="h-full">
            <div className="p-6 space-y-6">
              <EditorSection
                icon={<UserCircle />}
                title="Personal Info"
                defaultOpen={true}
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={resumeData.personalInfo?.fullName || ''}
                    onChange={(e) => handleInputChange('personalInfo', {
                      ...resumeData.personalInfo,
                      fullName: e.target.value
                    })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={resumeData.personalInfo?.email || ''}
                    onChange={(e) => handleInputChange('personalInfo', {
                      ...resumeData.personalInfo,
                      email: e.target.value
                    })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={resumeData.personalInfo?.phone || ''}
                    onChange={(e) => handleInputChange('personalInfo', {
                      ...resumeData.personalInfo,
                      phone: e.target.value
                    })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={resumeData.personalInfo?.location || ''}
                    onChange={(e) => handleInputChange('personalInfo', {
                      ...resumeData.personalInfo,
                      location: e.target.value
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </EditorSection>

              <EditorSection
                icon={<GraduationCap />}
                title="Education"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="School Name"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </EditorSection>

              <EditorSection
                icon={<Briefcase />}
                title="Experience"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </EditorSection>

              <EditorSection
                icon={<Wrench />}
                title="Skills"
              >
                <input
                  type="text"
                  placeholder="Add your skills"
                  className="w-full p-2 border rounded"
                />
              </EditorSection>

              <EditorSection
                icon={<Folder />}
                title="Projects"
              >
                <input
                  type="text"
                  placeholder="Project Name"
                  className="w-full p-2 border rounded"
                />
              </EditorSection>

              <EditorSection
                icon={<Award />}
                title="Extras"
              >
                <input
                  type="text"
                  placeholder="Certifications, Awards, Languages..."
                  className="w-full p-2 border rounded"
                />
              </EditorSection>
            </div>
          </ScrollArea>
        </ResizablePanel>

        {/* Resizable Handle */}
        <ResizableHandle withHandle />

        {/* Right Panel - Preview */}
        <ResizablePanel defaultSize={60}>
          <ScrollArea className="h-full bg-gray-50 p-6">
            <div id="resume-preview" className="max-w-[850px] mx-auto">
              <BasicTemplate data={resumeData} />
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

// Editor Section Component
const EditorSection = ({ 
  icon, 
  title, 
  children,
  defaultOpen = false 
}: { 
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  return (
    <Collapsible defaultOpen={defaultOpen} className="space-y-2">
      <CollapsibleTrigger className="flex items-center gap-2 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex-1 flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ResumeEditor;
