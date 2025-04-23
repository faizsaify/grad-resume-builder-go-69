
import React from 'react';
import { Button } from '@/components/ui/button';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { 
  ChevronDown, 
  ChevronUp, 
  UserCircle, 
  GraduationCap,
  Briefcase,
  Wrench,
  Folder,
  Award,
  Download,
  Undo,
  Redo
} from 'lucide-react';

const ResumeEditor = () => {
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
          <Button>
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
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
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
          <div className="h-full bg-gray-50 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 min-h-full">
              <h1 className="text-2xl font-bold mb-4">Resume Preview</h1>
              <p className="text-gray-600">Your resume content will appear here in real-time as you type...</p>
            </div>
          </div>
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
