// src/components/DevOpsSyllabus.tsx
import React from 'react';
import { 
  BookOpen,
  GitBranch,
  Cloud,
  Box,
  Activity,
  Shield,
  Code,
  Lock
} from 'lucide-react';

const DevOpsSyllabus = () => {
  const modules = [
    {
      icon: GitBranch,
      title: "Module 1: Advanced GitHub Actions",
      duration: "2 Weeks",
      topics: [
        {
          name: "Setting Up Multi-Environment Pipelines",
          content: [
            "Creating environment-specific workflows",
            "Setting up environment secrets and variables",
            "Implementing environment protection rules",
            "Creating deployment approvals and gates"
          ]
        },
        {
          name: "Advanced Pipeline Features",
          content: [
            "Matrix builds for multiple services",
            "Creating reusable workflow templates",
            "Custom GitHub Action development",
            "Composite actions for complex tasks"
          ]
        },
        {
          name: "Pipeline Security & Best Practices",
          content: [
            "Implementing code scanning and SAST",
            "Container image scanning",
            "Managing sensitive data and secrets",
            "Setting up dependency scanning"
          ]
        }
      ]
    },
    {
      icon: Cloud,
      title: "Module 2: Infrastructure Automation with Terraform",
      duration: "3 Weeks",
      topics: [
        {
          name: "Setting Up Multi-Environment Infrastructure",
          content: [
            "Creating base GCP organization structure",
            "Setting up project hierarchy",
            "Implementing networking foundations",
            "Creating shared services projects"
          ]
        },
        {
          name: "Environment Configuration & Management",
          content: [
            "Managing state files for multiple environments",
            "Working with Terraform workspaces",
            "Creating reusable Terraform modules",
            "Implementing dynamic configurations"
          ]
        },
        {
          name: "Security & Compliance",
          content: [
            "Setting up IAM and service accounts",
            "Implementing security policies",
            "Network security configuration",
            "Audit logging and monitoring"
          ]
        }
      ]
    },
    {
      icon: Box,
      title: "Module 3: Containerization & Kubernetes",
      duration: "3 Weeks",
      topics: [
        {
          name: "Advanced Containerization",
          content: [
            "Multi-stage Docker builds for microservices",
            "Optimizing container images",
            "Setting up Docker registry",
            "Managing container lifecycle"
          ]
        },
        {
          name: "Kubernetes Deployment Mastery",
          content: [
            "Setting up GKE clusters across environments",
            "Implementing service mesh with Istio",
            "Advanced deployment strategies",
            "Configuration and secret management"
          ]
        },
        {
          name: "Scaling & Optimization",
          content: [
            "Implementing horizontal pod autoscaling",
            "Resource quotas and limits",
            "Performance optimization",
            "Load balancing and traffic management"
          ]
        }
      ]
    },
    {
      icon: Activity,
      title: "Module 4: Monitoring & Observability",
      duration: "2 Weeks",
      topics: [
        {
          name: "Monitoring Infrastructure",
          content: [
            "Setting up Prometheus for metrics",
            "Implementing Grafana dashboards",
            "Log aggregation with Cloud Logging",
            "Creating custom metrics and alerts"
          ]
        },
        {
          name: "Application Performance Monitoring",
          content: [
            "Distributed tracing implementation",
            "Error tracking and debugging",
            "Performance metrics collection",
            "Real-time monitoring and alerts"
          ]
        },
        {
          name: "SRE Practices",
          content: [
            "Defining SLIs, SLOs, and SLAs",
            "Implementing error budgets",
            "Creating incident response plans",
            "Setting up on-call procedures"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Advanced DevOps Engineering Program
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master enterprise-level DevOps practices with our comprehensive curriculum
            </p>
          </div>

          <div className="grid gap-8">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <module.icon className="w-6 h-6 text-blue-500" />
                      <h2 className="text-2xl font-semibold text-gray-900">{module.title}</h2>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {module.duration}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="space-y-3">
                        <h3 className="text-lg font-medium text-gray-900">{topic.name}</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {topic.content.map((item, itemIndex) => (
                            <li 
                              key={itemIndex} 
                              className="flex items-start space-x-2"
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Program Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span className="text-gray-700">Hands-on experience with real-world projects</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span className="text-gray-700">Industry-standard tools and practices</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span className="text-gray-700">Enterprise-level infrastructure management</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span className="text-gray-700">Advanced monitoring and observability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsSyllabus;