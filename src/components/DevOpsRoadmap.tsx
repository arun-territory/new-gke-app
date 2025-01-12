import React from 'react';
import { 
  ChevronRight, 
  Terminal, 
  Cloud, 
  Code, 
  Server, 
  Package, 
  FileCode, 
  MessageSquare,
  Box 
} from 'lucide-react';

const RoadmapSection = ({ number, title, subtitle, details, icon: Icon }) => (
  <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <div className="text-sm font-medium text-blue-600">Step {number}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-gray-700 mb-2">{subtitle}</h4>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <ChevronRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function DevOpsRoadmap() {
  const roadmapData = [
    {
      number: 1,
      title: "Software Setup",
      subtitle: "Install and Downloads",
      icon: Terminal,
      details: [
        "Install Visual Studio Code for development",
        "Set up Git version control",
        "Install Terraform for infrastructure as code",
        "Configure Google Cloud SDK",
        "Set up Docker Desktop",
        "Install Kubernetes SDK (kubectl)"
      ]
    },
    {
      number: 2,
      title: "GitHub Basics",
      subtitle: "Org & Repos",
      icon: Code,
      details: [
        "Create and configure GitHub organization",
        "Set up remote repositories",
        "Configure local machine for GitHub access",
        "Learn essential Git commands (clone, push, pull, branch, merge)",
        "Practice Git workflow with sample repository"
      ]
    },
    {
      number: 3,
      title: "GitHub Actions",
      subtitle: "Create Simple Workflow",
      icon: Code,
      details: [
        "Create basic GitHub Actions workflow",
        "Implement simple CI pipeline",
        "Learn workflow syntax and structure",
        "Add status checks and automated testing",
        "Practice with sample application deployment"
      ]
    },
    {
      number: 4,
      title: "Docker Fundamentals",
      subtitle: "Docker Project",
      icon: Box,
      details: [
        "Create Dockerfile for application",
        "Build and manage Docker images",
        "Run and manage containers",
        "Implement Docker Compose for multi-container apps",
        "Practice Docker networking and volumes"
      ]
    },
    {
      number: 5,
      title: "Google Cloud Platform",
      subtitle: "GCP Resources",
      icon: Cloud,
      details: [
        "Set up GCP project and billing",
        "Create and manage basic resources",
        "Configure networking and VPC",
        "Practice with Cloud Storage and Compute Engine",
        "Learn GCP best practices and security"
      ]
    },
    {
      number: 6,
      title: "Terraform Basics",
      subtitle: "Infrastructure as Code",
      icon: FileCode,
      details: [
        "Learn Terraform syntax and data types",
        "Understand state management",
        "Create reusable modules",
        "Implement small infrastructure project",
        "Practice Terraform workflow and commands"
      ]
    },
    {
      number: 7,
      title: "GKE Cluster",
      subtitle: "Cluster Creation & Management",
      icon: Server,
      details: [
        "Create GKE cluster using console/CLI",
        "Configure cluster networking",
        "Set up node pools and scaling",
        "Integrate with other GCP services",
        "Practice cluster management operations"
      ]
    },
    {
      number: 8,
      title: "Docker Implementation",
      subtitle: "E-commerce Project Images",
      icon: Package,
      details: [
        "Containerize e-commerce application components",
        "Create optimized Docker images",
        "Set up multi-container environment with Docker Compose",
        "Test containers locally",
        "Prepare images for Kubernetes deployment"
      ]
    },
    {
      number: 9,
      title: "Kubernetes Deployment",
      subtitle: "Application Deployment",
      icon: Cloud,
      details: [
        "Create Kubernetes manifest files",
        "Configure deployments and services",
        "Set up ingress and load balancing",
        "Implement configuration and secrets",
        "Deploy application to GKE cluster"
      ]
    },
    {
      number: 10,
      title: "Project Documentation",
      subtitle: "Interview Preparation",
      icon: MessageSquare,
      details: [
        "Document project architecture and design",
        "Prepare technical implementation details",
        "Create troubleshooting guide",
        "Document deployment procedures",
        "Prepare project presentation for interviews"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            
            Basic DevOps Learning Roadmap
          </h1>
          <p className="text-lg text-gray-600">
            A structured guide to learning DevOps practices and tools
          </p>
        </div>
        
        <div className="space-y-8">
          {roadmapData.map((section) => (
            <RoadmapSection
              key={section.number}
              number={section.number}
              title={section.title}
              subtitle={section.subtitle}
              details={section.details}
              icon={section.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}