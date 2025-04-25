import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutGrid,
  Undo,
  Redo,
  Download,
  Moon,
  Sun,
  Plus,
  Trash2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';
import { downloadPDF } from '@/utils/pdfUtils';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, UserCircle, GraduationCap, Briefcase, Wrench, Folder, Award } from 'lucide-react';
import { ResumeData } from '@/types/resume';
import AtsScoreDisplay from '@/components/resume/AtsScoreDisplay';
import { 
  getTemplateComponent, 
  getTemplateDummyData, 
  createEmptyResumeData, 
  calculateProgress 
} from '@/utils/templateUtils';

const ResumeEditor = () => {
  const { templateId } = useParams();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const { toast } = useToast();
  
  const TemplateComponent = getTemplateComponent(templateId || '1');
  const templateDummyData = getTemplateDummyData(templateId || '1');
  
  const [resumeData, setResumeData] = useState<ResumeData>(templateDummyData);
  const [userInputs, setUserInputs] = useState<ResumeData>(createEmptyResumeData(templateId || '1'));

  useEffect(() => {
    const progressValue = calculateProgress(userInputs, templateDummyData);
    setProgress(progressValue);
  }, [userInputs, templateDummyData]);

  useEffect(() => {
    const savingTimeout = setTimeout(() => {
      setIsSaving(false);
    }, 500);
    
    return () => clearTimeout(savingTimeout);
  }, [resumeData]);

  const handleInputChange = (section: keyof ResumeData, index: number, field: string, value: any) => {
    setIsSaving(true);
    
    setResumeData(prev => {
      const newData = { ...prev };
      
      if (section === 'personalInfo') {
        newData.personalInfo = {
          ...newData.personalInfo!,
          [field]: value
        };
      } else if (section === 'education' && newData.education) {
        newData.education = [...newData.education];
        newData.education[index] = {
          ...newData.education[index],
          [field]: value
        };
      } else if (section === 'experience' && newData.experience) {
        newData.experience = [...newData.experience];
        
        if (field.startsWith('description')) {
          const descIndex = parseInt(field.split('-')[1]);
          newData.experience[index] = {
            ...newData.experience[index],
            description: [...newData.experience[index].description]
          };
          newData.experience[index].description[descIndex] = value;
        } else {
          newData.experience[index] = {
            ...newData.experience[index],
            [field]: value
          };
        }
      } else if (section === 'skills') {
        newData.skills = [...(newData.skills || [])];
        newData.skills[index] = value;
      } else if (section === 'projects' && newData.projects) {
        newData.projects = [...newData.projects];
        newData.projects[index] = {
          ...newData.projects[index],
          [field]: value
        };
      }
      
      return newData;
    });
    
    setUserInputs(prev => {
      const newData = { ...prev };
      
      if (section === 'personalInfo' && newData.personalInfo) {
        newData.personalInfo = {
          ...newData.personalInfo,
          [field]: value
        };
      } else if (section === 'education' && newData.education) {
        newData.education = [...newData.education];
        while (newData.education.length <= index) {
          newData.education.push({ school: '', degree: '', year: '', gpa: '' });
        }
        newData.education[index] = {
          ...newData.education[index],
          [field]: value
        };
      } else if (section === 'experience' && newData.experience) {
        newData.experience = [...newData.experience];
        while (newData.experience.length <= index) {
          newData.experience.push({ company: '', position: '', period: '', description: [''] });
        }
        
        if (field.startsWith('description')) {
          const descIndex = parseInt(field.split('-')[1]);
          newData.experience[index] = {
            ...newData.experience[index],
            description: [...newData.experience[index].description]
          };
          while (newData.experience[index].description.length <= descIndex) {
            newData.experience[index].description.push('');
          }
          newData.experience[index].description[descIndex] = value;
        } else {
          newData.experience[index] = {
            ...newData.experience[index],
            [field]: value
          };
        }
      } else if (section === 'skills') {
        newData.skills = [...(newData.skills || [])];
        newData.skills[index] = value;
      } else if (section === 'projects' && newData.projects) {
        newData.projects = [...newData.projects];
        while (newData.projects.length <= index) {
          newData.projects.push({ name: '', description: '' });
        }
        newData.projects[index] = {
          ...newData.projects[index],
          [field]: value
        };
      }
      
      return newData;
    });
  };

  const addItem = (section: keyof ResumeData) => {
    setIsSaving(true);
    setResumeData(prev => {
      const newData = { ...prev };
      
      if (section === 'education' && newData.education) {
        newData.education = [
          ...newData.education, 
          { school: '', degree: '', year: '', gpa: '' }
        ];
      } else if (section === 'experience' && newData.experience) {
        newData.experience = [
          ...newData.experience, 
          { company: '', position: '', period: '', description: [''] }
        ];
      } else if (section === 'skills') {
        newData.skills = [...(newData.skills || []), ''];
      } else if (section === 'projects' && newData.projects) {
        newData.projects = [
          ...newData.projects, 
          { name: '', description: '' }
        ];
      }
      
      return newData;
    });
    
    toast({
      title: "Added new item",
      description: `Added new item to ${section}`,
    });
  };

  const removeItem = (section: keyof ResumeData, index: number) => {
    setIsSaving(true);
    setResumeData(prev => {
      const newData = { ...prev };
      
      if (section === 'education' && newData.education) {
        newData.education = newData.education.filter((_, i) => i !== index);
        if (newData.education.length === 0) {
          newData.education = [{ school: '', degree: '', year: '', gpa: '' }];
        }
      } else if (section === 'experience' && newData.experience) {
        newData.experience = newData.experience.filter((_, i) => i !== index);
        if (newData.experience.length === 0) {
          newData.experience = [{ company: '', position: '', period: '', description: [''] }];
        }
      } else if (section === 'skills' && newData.skills) {
        newData.skills = newData.skills.filter((_, i) => i !== index);
      } else if (section === 'projects' && newData.projects) {
        newData.projects = newData.projects.filter((_, i) => i !== index);
        if (newData.projects.length === 0) {
          newData.projects = [{ name: '', description: '' }];
        }
      }
      
      return newData;
    });
    
    toast({
      title: "Removed item",
      description: `Removed item from ${section}`,
    });
  };

  const addDescriptionField = (experienceIndex: number) => {
    setIsSaving(true);
    setResumeData(prev => {
      const newData = { ...prev };
      if (newData.experience) {
        newData.experience = [...newData.experience];
        newData.experience[experienceIndex] = {
          ...newData.experience[experienceIndex],
          description: [...newData.experience[experienceIndex].description, '']
        };
      }
      return newData;
    });
  };

  const removeDescriptionField = (experienceIndex: number, descriptionIndex: number) => {
    setIsSaving(true);
    setResumeData(prev => {
      const newData = { ...prev };
      if (newData.experience) {
        newData.experience = [...newData.experience];
        newData.experience[experienceIndex] = {
          ...newData.experience[experienceIndex],
          description: newData.experience[experienceIndex].description.filter((_, i) => i !== descriptionIndex)
        };
        if (newData.experience[experienceIndex].description.length === 0) {
          newData.experience[experienceIndex].description = [''];
        }
      }
      return newData;
    });
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toast({
      title: `${isDarkMode ? 'Light' : 'Dark'} mode enabled`,
      description: `Switched to ${isDarkMode ? 'light' : 'dark'} mode`,
    });
  };

  const handleUndo = () => {
    toast({
      title: "Undo",
      description: "Previous action undone",
    });
  };

  const handleRedo = () => {
    toast({
      title: "Redo",
      description: "Action restored",
    });
  };

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-resumetext'}`}>
      <div className={`
        border-b p-3 flex justify-between items-center sticky top-0 z-10
        ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'}
      `}>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-resumeblue">ResumeAI</span>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="space-y-4 py-4">
                <h2 className="text-lg font-semibold">Resume Editor</h2>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" onClick={handleUndo} className="w-full justify-start">
                    <Undo className="h-4 w-4 mr-2" />
                    Undo
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleRedo} className="w-full justify-start">
                    <Redo className="h-4 w-4 mr-2" />
                    Redo
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <LayoutGrid className="h-4 w-4 mr-2" />
                        Change Template
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Modern</DropdownMenuItem>
                      <DropdownMenuItem>Classic</DropdownMenuItem>
                      <DropdownMenuItem>Minimal</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="outline" size="sm" onClick={toggleDarkMode} className="w-full justify-start">
                    {isDarkMode ? 
                      <><Sun className="h-4 w-4 mr-2" />Light Mode</> : 
                      <><Moon className="h-4 w-4 mr-2" />Dark Mode</>
                    }
                  </Button>
                  <Button size="sm" onClick={handleExportPDF} className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden items-center gap-4 flex-grow max-w-md mx-4">
          <span className="text-sm whitespace-nowrap">
            {isSaving ? 'Saving...' : 'All changes saved'}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleUndo} className="hidden md:flex">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleRedo} className="hidden md:flex">
            <Redo className="h-4 w-4" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Modern</DropdownMenuItem>
              <DropdownMenuItem>Classic</DropdownMenuItem>
              <DropdownMenuItem>Minimal</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hidden md:flex">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button onClick={handleExportPDF} className="hidden md:flex">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center px-6 py-3 bg-gray-50 dark:bg-gray-800">
        <div className="w-3/5 pr-4">
          <div className="md:flex items-center gap-4 hidden">
            <Progress value={progress} className="h-3 flex-1 bg-gray-200 dark:bg-gray-700" />
            <span className="text-sm whitespace-nowrap font-medium">
              {progress}%
            </span>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <Progress value={progress} className="h-3 flex-1 bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs font-medium">
              {progress}%
            </span>
          </div>
        </div>
        <AtsScoreDisplay />
      </div>

      <ResizablePanelGroup 
        direction="horizontal" 
        className="flex-1"
      >
        <ResizablePanel defaultSize={60} minSize={30}>
          <ScrollArea className="h-full">
            <div className={`p-6 space-y-6 ${isDarkMode ? 'text-gray-200' : ''}`}>
              <EditorSection
                id="personalInfo"
                icon={<UserCircle className="h-5 w-5" />}
                title="Personal Information"
                isActive={activeSectionId === 'personalInfo'}
                onToggle={() => setActiveSectionId(activeSectionId === 'personalInfo' ? null : 'personalInfo')}
                defaultOpen={true}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      placeholder="e.g. John Smith" 
                      value={resumeData.personalInfo?.fullName || ''}
                      onChange={(e) => handleInputChange('personalInfo', 0, 'fullName', e.target.value)}
                      className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      placeholder="e.g. john@example.com" 
                      type="email"
                      value={resumeData.personalInfo?.email || ''}
                      onChange={(e) => handleInputChange('personalInfo', 0, 'email', e.target.value)}
                      className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input 
                      placeholder="e.g. (123) 456-7890" 
                      value={resumeData.personalInfo?.phone || ''}
                      onChange={(e) => handleInputChange('personalInfo', 0, 'phone', e.target.value)}
                      className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <Input 
                      placeholder="e.g. New York, NY" 
                      value={resumeData.personalInfo?.location || ''}
                      onChange={(e) => handleInputChange('personalInfo', 0, 'location', e.target.value)}
                      className={isDarkMode ? 'bg-gray-800 border-gray-700' : ''}
                    />
                  </div>
                </div>
              </EditorSection>

              <EditorSection
                id="education"
                icon={<GraduationCap className="h-5 w-5" />}
                title="Education"
                isActive={activeSectionId === 'education'}
                onToggle={() => setActiveSectionId(activeSectionId === 'education' ? null : 'education')}
              >
                {resumeData.education?.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-4 rounded-lg mb-4 relative
                      ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}
                    `}
                  >
                    {resumeData.education!.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={() => removeItem('education', index)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">School</label>
                        <Input 
                          placeholder="e.g. University of Technology" 
                          value={edu.school}
                          onChange={(e) => handleInputChange('education', index, 'school', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Degree</label>
                        <Input 
                          placeholder="e.g. Bachelor of Science in Computer Science" 
                          value={edu.degree}
                          onChange={(e) => handleInputChange('education', index, 'degree', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Year</label>
                        <Input 
                          placeholder="e.g. 2019 - 2023" 
                          value={edu.year}
                          onChange={(e) => handleInputChange('education', index, 'year', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">GPA (Optional)</label>
                        <Input 
                          placeholder="e.g. 3.8/4.0" 
                          value={edu.gpa || ''}
                          onChange={(e) => handleInputChange('education', index, 'gpa', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-2"
                  onClick={() => addItem('education')}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Education
                </Button>
              </EditorSection>

              <EditorSection
                id="experience"
                icon={<Briefcase className="h-5 w-5" />}
                title="Experience"
                isActive={activeSectionId === 'experience'}
                onToggle={() => setActiveSectionId(activeSectionId === 'experience' ? null : 'experience')}
              >
                {resumeData.experience?.map((exp, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-4 rounded-lg mb-4 relative
                      ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}
                    `}
                  >
                    {resumeData.experience!.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={() => removeItem('experience', index)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company</label>
                        <Input 
                          placeholder="e.g. Tech Corp" 
                          value={exp.company}
                          onChange={(e) => handleInputChange('experience', index, 'company', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Position</label>
                        <Input 
                          placeholder="e.g. Software Engineer Intern" 
                          value={exp.position}
                          onChange={(e) => handleInputChange('experience', index, 'position', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Period</label>
                        <Input 
                          placeholder="e.g. June 2022 - August 2022" 
                          value={exp.period}
                          onChange={(e) => handleInputChange('experience', index, 'period', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="text-sm font-medium">Description</label>
                      <p className="text-xs text-muted-foreground mb-2">Add bullet points highlighting your achievements and responsibilities</p>
                      
                      {exp.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start gap-2 mb-2">
                          <div className="mt-2">•</div>
                          <Input
                            placeholder="e.g. Developed and maintained web applications using React"
                            value={desc}
                            onChange={(e) => handleInputChange(
                              'experience', 
                              index, 
                              `description-${descIndex}`, 
                              e.target.value
                            )}
                            className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                          />
                          {exp.description.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1"
                              onClick={() => removeDescriptionField(index, descIndex)}
                            >
                              <Trash2 className="h-3 w-3 text-red-500" />
                            </Button>
                          )}
                        </div>
                      ))}
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs mt-1"
                        onClick={() => addDescriptionField(index)}
                      >
                        <Plus className="h-3 w-3 mr-1" /> Add Bullet Point
                      </Button>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-2"
                  onClick={() => addItem('experience')}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Experience
                </Button>
              </EditorSection>

              <EditorSection
                id="skills"
                icon={<Wrench className="h-5 w-5" />}
                title="Skills"
                isActive={activeSectionId === 'skills'}
                onToggle={() => setActiveSectionId(activeSectionId === 'skills' ? null : 'skills')}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills && resumeData.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className={`
                          pl-3 pr-1 py-1 rounded-full flex items-center gap-1 text-sm
                          ${isDarkMode ? 'bg-gray-800' : 'bg-resumeblue-light text-resumeblue'}
                        `}
                      >
                        <span>{skill || 'New Skill'}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5 rounded-full"
                          onClick={() => removeItem('skills', index)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add a skill (e.g. JavaScript, Teamwork)" 
                      id="new-skill"
                      className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const input = e.target as HTMLInputElement;
                          if (input.value) {
                            handleInputChange('skills', resumeData.skills?.length || 0, '', input.value);
                            input.value = '';
                          }
                        }
                      }}
                    />
                    <Button 
                      variant="outline"
                      onClick={() => {
                        const input = document.getElementById('new-skill') as HTMLInputElement;
                        if (input.value) {
                          handleInputChange('skills', resumeData.skills?.length || 0, '', input.value);
                          input.value = '';
                        }
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Press Enter to add a skill or click the + button</p>
                </div>
              </EditorSection>

              <EditorSection
                id="projects"
                icon={<Folder className="h-5 w-5" />}
                title="Projects"
                isActive={activeSectionId === 'projects'}
                onToggle={() => setActiveSectionId(activeSectionId === 'projects' ? null : 'projects')}
              >
                {resumeData.projects?.map((project, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-4 rounded-lg mb-4 relative
                      ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}
                    `}
                  >
                    {resumeData.projects!.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={() => removeItem('projects', index)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Project Name</label>
                        <Input 
                          placeholder="e.g. E-commerce Website" 
                          value={project.name}
                          onChange={(e) => handleInputChange('projects', index, 'name', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600' : ''}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <Textarea 
                          placeholder="e.g. Built a responsive e-commerce website using React and Node.js" 
                          value={project.description}
                          onChange={(e) => handleInputChange('projects', index, 'description', e.target.value)}
                          className={isDarkMode ? 'bg-gray-700 border-gray-600 min-h-[80px]' : 'min-h-[80px]'}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-2"
                  onClick={() => addItem('projects')}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Project
                </Button>
              </EditorSection>

              <EditorSection
                id="extras"
                icon={<Award className="h-5 w-5" />}
                title="Extras (Certifications, Languages, Awards)"
                isActive={activeSectionId === 'extras'}
                onToggle={() => setActiveSectionId(activeSectionId === 'extras' ? null : 'extras')}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium">Add any additional information</label>
                  <Textarea 
                    placeholder="e.g. Certifications, Languages, Awards, etc." 
                    className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : ''} min-h-[150px]`}
                  />
                </div>
              </EditorSection>
            </div>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={40}>
          <ScrollArea className={`h-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 relative`}>
            <div id="resume-preview" className={`
              max-w-[850px] mx-auto shadow-lg
              ${isDarkMode ? 'bg-white' : 'bg-white'}
            `}>
              <TemplateComponent data={resumeData} />
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
      
      <div className="md:hidden border-t p-3 flex justify-between items-center">
        <span className="text-xs">
          {isSaving ? 'Saving...' : 'All changes saved'}
        </span>
        
        <div className="flex items-center gap-2">
          <Button onClick={handleExportPDF} size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export PDF
          </Button>
        </div>
      </div>
      
      <div className="md:hidden flex justify-center py-2">
        <AtsScoreDisplay />
      </div>
    </div>
  );
};

interface EditorSectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  isActive: boolean;
  onToggle: () => void;
}

const EditorSection: React.FC<EditorSectionProps> = ({ 
  id,
  icon, 
  title, 
  children,
  defaultOpen = false,
  isActive,
  onToggle
}) => {
  return (
    <Collapsible defaultOpen={defaultOpen} className={`
      space-y-2 p-4 rounded-lg border transition-all duration-200
      ${isActive ? 'ring-2 ring-resumeblue-light' : ''}
    `}>
      <CollapsibleTrigger 
        className="flex items-center gap-2 w-full p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        onClick={onToggle}
      >
        <div className="flex-1 flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4 pt-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ResumeEditor;
