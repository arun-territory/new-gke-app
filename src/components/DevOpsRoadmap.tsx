// DevOpsRoadmap.tsx
import { 
    Terminal, 
    GitBranch,
    Workflow,
    Container,
    Cloud,
    FileCode,
    Server,
    ShoppingCart,
    Upload,
    GraduationCap
  } from 'lucide-react';
  import { RoadmapSection } from './RoadmapSection';
  
  export function DevOpsRoadmap() {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              DevOps Learning Roadmap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive guide to mastering DevOps practices and implementing real-world projects
            </p>
          </div>
  
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-100"></div>
  
            {/* Roadmap Sections */}
            <div className="space-y-8">
              <RoadmapSection
                number={1}
                title="Development Environment Setup"
                subtitle="Essential Software Installation and Configuration"
                learningObjectives={[
                  "Set up a complete development environment",
                  "Understand the purpose of each tool",
                  "Configure development tools properly"
                ]}
                details={[
                  "Install Visual Studio Code for development",
                  "Set up Git version control system",
                  "Install Terraform for infrastructure management",
                  "Configure Google Cloud SDK (gcloud CLI)",
                  "Install Docker Desktop for containerization",
                  "Set up Kubernetes SDK (kubectl)"
                ]}
                icon={Terminal}
              />
  
              <RoadmapSection
                number={2}
                title="GitHub Fundamentals"
                subtitle="Version Control and Repository Management"
                learningObjectives={[
                  "Master Git version control basics",
                  "Set up and manage GitHub repositories",
                  "Understand GitHub workflow"
                ]}
                details={[
                  "Create and configure GitHub organization",
                  "Set up and manage repositories",
                  "Connect local environment to remote repositories",
                  "Learn essential Git commands (clone, push, pull, branch, merge)",
                  "Practice branch management and collaboration",
                  "Implement Git best practices"
                ]}
                icon={GitBranch}
              />
  
              <RoadmapSection
                number={3}
                title="GitHub Actions"
                subtitle="Continuous Integration Fundamentals"
                learningObjectives={[
                  "Understand CI/CD principles",
                  "Learn GitHub Actions workflow",
                  "Implement automated testing"
                ]}
                details={[
                  "Introduction to GitHub Actions and CI/CD concepts",
                  "Create basic GitHub Actions workflow",
                  "Implement automated testing pipeline",
                  "Configure workflow triggers and events",
                  "Manage secrets and environment variables",
                  "Practice with a simple project deployment"
                ]}
                icon={Workflow}
              />
  
              <RoadmapSection
                number={4}
                title="Docker Fundamentals"
                subtitle="Container Development and Management"
                learningObjectives={[
                  "Master Docker basics",
                  "Build and manage containers",
                  "Implement multi-container applications"
                ]}
                details={[
                  "Understanding Docker concepts and architecture",
                  "Create and optimize Dockerfiles",
                  "Build and manage Docker images",
                  "Run and manage Docker containers",
                  "Implement Docker Compose for multi-container apps",
                  "Practice Docker networking and volume management"
                ]}
                icon={Container}
              />
  
              <RoadmapSection
                number={5}
                title="Google Cloud Platform"
                subtitle="Cloud Infrastructure Management"
                learningObjectives={[
                  "Understand cloud computing concepts",
                  "Master GCP resource management",
                  "Implement cloud best practices"
                ]}
                details={[
                  "GCP fundamentals and core services",
                  "Create and manage GCP projects",
                  "Configure networking and VPC",
                  "Manage compute resources (VM instances)",
                  "Set up storage and databases",
                  "Implement IAM and security practices"
                ]}
                icon={Cloud}
              />
  
              <RoadmapSection
                number={6}
                title="Terraform Fundamentals"
                subtitle="Infrastructure as Code"
                learningObjectives={[
                  "Master Infrastructure as Code concepts",
                  "Learn Terraform syntax and practices",
                  "Implement modular infrastructure"
                ]}
                details={[
                  "Introduction to Infrastructure as Code",
                  "Terraform basics and architecture",
                  "Understanding HCL syntax and data types",
                  "Create and manage Terraform modules",
                  "Implement state management",
                  "Practice with a small infrastructure project"
                ]}
                icon={FileCode}
              />
  
              <RoadmapSection
                number={7}
                title="GKE Cluster Setup"
                subtitle="Kubernetes on Google Cloud"
                learningObjectives={[
                  "Master GKE cluster management",
                  "Configure cluster resources",
                  "Implement service integration"
                ]}
                details={[
                  "GKE cluster architecture and components",
                  "Create and configure GKE cluster",
                  "Set up node pools and networking",
                  "Configure cluster security",
                  "Implement monitoring and logging",
                  "Practice cluster maintenance and scaling"
                ]}
                icon={Server}
              />
  
              <RoadmapSection
                number={8}
                title="E-commerce Project Development"
                subtitle="Local Development and Testing"
                learningObjectives={[
                  "Build real-world application",
                  "Implement Docker Compose workflow",
                  "Master local testing practices"
                ]}
                details={[
                  "Set up e-commerce application codebase",
                  "Create Docker configuration",
                  "Implement Docker Compose for local development",
                  "Configure development environment",
                  "Implement testing strategy",
                  "Practice debugging and troubleshooting"
                ]}
                icon={ShoppingCart}
              />
  
              <RoadmapSection
                number={9}
                title="Production Deployment"
                subtitle="GKE Cluster Deployment"
                learningObjectives={[
                  "Master Kubernetes deployment",
                  "Implement production best practices",
                  "Configure monitoring and scaling"
                ]}
                details={[
                  "Create Kubernetes manifest files",
                  "Configure deployment strategies",
                  "Set up services and ingress",
                  "Implement configuration management",
                  "Configure auto-scaling",
                  "Monitor application performance"
                ]}
                icon={Upload}
              />
  
              <RoadmapSection
                number={10}
                title="Project Documentation and Review"
                subtitle="Interview Preparation and Documentation"
                learningObjectives={[
                  "Document project architecture",
                  "Master project explanation",
                  "Prepare for technical interviews"
                ]}
                details={[
                  "Document project architecture and design",
                  "Create deployment and operation guides",
                  "Prepare project presentation",
                  "Document troubleshooting procedures",
                  "Practice technical explanations",
                  "Review best practices and lessons learned"
                ]}
                icon={GraduationCap}
              />
            </div>
          </div>
  
          {/* Footer Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Complete this roadmap to become proficient in DevOps practices and cloud-native development
            </p>
          </div>
        </div>
      </div>
    );
  }