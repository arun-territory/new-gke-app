import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code,
  Github,
  Box,
  Cloud,
  Terminal,
  BarChart,
  FileText,
  Folder,
  ChevronRight,
  CheckCircle2,
  Database,
  Server,
  Container,
  ArrowLeftIcon,
  LucideIcon
} from 'lucide-react';

// Types
interface StepIconProps {
  icon: LucideIcon;
  className?: string;
}

interface FileContent {
  content: string;
  language: string;
}

interface Files {
  [key: string]: FileContent;
}

interface Section {
  title: string;
  icon: LucideIcon;
  content: React.FC;
}

// Shared Components
const StepIcon: React.FC<StepIconProps> = ({ icon: Icon, className }) => {
  return Icon ? <Icon className={className || ''} /> : null;
};

// Code Editor Component
const CodeEditor: React.FC = () => {
  const [activeFile, setActiveFile] = useState<string>('main.py');
  
  const files: Files = {
    'main.py': {
      content: `from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}`,
      language: 'python'
    },
    'Dockerfile': {
      content: `FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`,
      language: 'dockerfile'
    },
    'main.tf': {
      content: `provider "google" {
  project = "my-project"
  region  = "us-central1"
}

resource "google_container_cluster" "primary" {
  name     = "my-gke-cluster"
  location = "us-central1"
  
  initial_node_count = 3
}`,
      language: 'hcl'
    },
    'manifest.yaml': {
      content: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: my-app
        image: gcr.io/my-project/my-app:latest`,
      language: 'yaml'
    },
    '.github/workflows/deploy.yml': {
      content: `name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: docker build -t my-app .`,
      language: 'yaml'
    }
  };

  return (
    <div className="bg-[#1e1e2e] rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-700 bg-[#1a1b26] overflow-x-auto">
        {Object.keys(files).map(filename => (
          <button
            key={filename}
            onClick={() => setActiveFile(filename)}
            className={`px-4 py-2 text-sm ${
              activeFile === filename 
                ? 'bg-[#1e1e2e] text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:bg-[#1e1e2e]'
            }`}
          >
            {filename.split('/').pop()}
          </button>
        ))}
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="text-gray-300">
          <code>{files[activeFile as keyof typeof files].content}</code>
        </pre>
      </div>
    </div>
  );
};

// GitHub Repository View
const GitHubRepo: React.FC = () => {
  const [pushing, setPushing] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setPushing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#1e1e2e] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Github className="w-8 h-8 text-gray-400" />
          <span className="text-gray-200 text-lg">project-repo</span>
        </div>
        {pushing && (
          <div className="flex items-center gap-2 text-blue-400">
            <span className="animate-pulse">Pushing to main...</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2 text-gray-300">
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4 text-blue-400" />
          <span>src/</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <FileText className="w-4 h-4" />
          <span>main.py</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4 text-orange-400" />
          <span>terraform/</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <FileText className="w-4 h-4" />
          <span>main.tf</span>
        </div>
      </div>
    </div>
  );
};

// GitHub Actions Pipeline
interface Step {
  name: string;
  status: 'complete' | 'in-progress' | 'pending';
}

const GitHubActions: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  
  const steps: Step[] = [
    { name: 'Build Docker Image', status: 'complete' },
    { name: 'Push to Registry', status: 'complete' },
    { name: 'Terraform Init', status: 'in-progress' },
    { name: 'Terraform Apply', status: 'pending' },
    { name: 'Deploy to K8s', status: 'pending' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(curr => (curr < steps.length - 1 ? curr + 1 : curr));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1e1e2e] rounded-lg p-4">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={step.name}
            className={`flex items-center gap-3 p-2 rounded ${
              index === currentStep ? 'bg-blue-500/10 border border-blue-500/50' : ''
            }`}
          >
            {index < currentStep ? (
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            ) : index === currentStep ? (
              <div className="w-5 h-5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-500" />
            )}
            <span className={`text-sm ${
              index <= currentStep ? 'text-gray-200' : 'text-gray-500'
            }`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Docker Registry Visualization
const DockerRegistry: React.FC = () => {
  const [pushProgress, setPushProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPushProgress(curr => curr < 100 ? curr + 20 : curr);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1e1e2e] rounded-lg p-4">
      <div className="flex items-center gap-3 mb-4">
        <Container className="w-6 h-6 text-blue-400" />
        <span className="text-gray-200">Container Registry</span>
      </div>

      <div className="space-y-4">
        <div className="bg-[#1a1b26] p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 font-mono">gcr.io/my-project/my-app</span>
            <span className="text-blue-400">latest</span>
          </div>
          
          {pushProgress < 100 ? (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pushing image layers...</span>
                <span className="text-gray-400">{pushProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${pushProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="text-green-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Image successfully pushed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Component
const DevOpsFlow: React.FC = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState<number>(0);
    
    const handleBack = (): void => {
      navigate(-1);
    };

    const sections: Section[] = [
      {
        title: "Local Development",
        icon: Code,
        content: CodeEditor
      },
      {
        title: "GitHub Repository",
        icon: Github,
        content: GitHubRepo
      },
      {
        title: "GitHub Actions Pipeline",
        icon: Terminal,
        content: GitHubActions
      },
      {
        title: "Container Registry",
        icon: Container,
        content: DockerRegistry
      }
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setActiveSection((current) => (current + 1) % sections.length);
      }, 6000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-950">
        {/* Navigation Bar */}
        <nav className="bg-[#1a1b26] border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  <span>Back</span>
                </button>
                <span className="text-2xl font-bold">
                  <span className="text-blue-500">GKE</span>
                  <span className="text-purple-500">cloud</span>
                </span>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-gray-300 hover:text-white">
                  What is DevOps?
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Why choose us?
                </button>
                <button className="px-4 py-2 bg-pink-500 text-white rounded-md">
                  Daaval AI
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Blog
                </button>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`rounded-lg border-2 transition-all duration-500 ${
                  index === activeSection 
                    ? 'border-blue-500 bg-gray-900/50' 
                    : 'border-gray-800 bg-gray-900/20'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <StepIcon icon={section.icon} className="w-8 h-8 text-gray-400" />
                    <h2 className="text-2xl text-gray-200 font-semibold">{section.title}</h2>
                  </div>
                  {React.createElement(section.content)}
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Contact Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#1a1b26] border-t border-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-center space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Drop A Query
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Request For Call Back
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Email Us
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default DevOpsFlow;