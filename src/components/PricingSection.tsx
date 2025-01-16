import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Types
interface FeatureItemProps {
  feature: string;
  description?: string;
}

interface DevOpsPath {
  title: string;
  description: string;
  practices: string[];
}

// Basic FeatureItem component used in JrDevOpsCard
const FeatureItem: React.FC<FeatureItemProps> = ({ feature, description }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="flex items-center">
          <div className="mr-3 text-green-500">✓</div>
          <span className="text-gray-700">{feature}</span>
        </div>
        {description && (
          <div className="text-gray-400">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        )}
      </button>
      {description && isExpanded && (
        <div className="mt-2 ml-8 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
          {description}
        </div>
      )}
    </div>
  );
};

// Jr DevOps Engineer Card Component
const JrDevOpsCard = () => {
  const [expandedPath, setExpandedPath] = useState<number | null>(null);

  const navigate = useNavigate();

  const paths = [
    {
      title: "Students & Fresh Graduates",
      description: "Perfect starting point for academic talents entering the DevOps field",
      practices: [
        "Learn industry-standard DevOps tools and practices",
        "Hands-on experience with real-world projects",
        "Structured learning path for beginners",
        "Career guidance and mentorship"
      ]
    },
    {
      title: "Non-IT Background",
      description: "Carefully designed transition path for career switchers",
      practices: [
        "Basic to advanced programming concepts",
        "Linux fundamentals and system administration",
        "Cloud computing foundations",
        "Practical automation skills"
      ]
    },
    {
      title: "Working Professionals",
      description: "Flexible learning schedule for busy professionals",
      practices: [
        "Weekend batch options available",
        "Recorded sessions for self-paced learning",
        "Project-based practical assignments",
        "Industry-aligned curriculum"
      ]
    },
    {
      title: "Tech Enthusiasts",
      description: "Deep dive into modern DevOps technologies",
      practices: [
        "Hands-on cloud platform experience",
        "Container orchestration with Kubernetes",
        "CI/CD pipeline implementation",
        "Infrastructure as Code practice"
      ]
    }
  ];

  const handleViewSyllabus = () => {
    navigate('/devops-roadmap');
  };

  const handleEnroll = () => {
    window.open('https://arunponugoti.graphy.com/courses/DevOps-Experince-Program--build-from-scratch--677a34060aee285edbc9e590', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-2">Jr DevOps Engineer</h2>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold">₹19,999</span>
        <span className="text-gray-500 ml-2">/3 months</span>
      </div>
      
      <div className="mb-6 space-y-4">
        {paths.map((path, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              onClick={() => setExpandedPath(expandedPath === index ? null : index)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="font-semibold text-gray-900">{path.title}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedPath === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            {expandedPath === index && (
              <div className="mt-4 space-y-4">
                <p className="text-gray-600">{path.description}</p>
                <ul className="space-y-2">
                  {path.practices.map((practice, pIndex) => (
                    <li key={pIndex} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2 text-green-500">✓</span>
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <button 
          onClick={handleViewSyllabus}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Full syllabus
        </button>
        <button 
          onClick={handleEnroll}
          className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

// DevOps Engineer Card Component
const DevOpsCard: React.FC = () => {
  const navigate = useNavigate();
  const [expandedPath, setExpandedPath] = useState<number | null>(null);

  const paths: DevOpsPath[] = [
    {
      title: "Experience Level: Intermediate",
      description: "This program is designed for professionals with 1.5 to 2 years of hands-on DevOps experience",
      practices: [
        "Working knowledge of Linux and basic scripting",
        "Experience with CI/CD pipelines",
        "Basic understanding of cloud platforms",
        "Familiarity with containerization concepts"
      ]
    },
    {
      title: "Pipeline Automation Goals",
      description: "Ready to master advanced GitHub Actions features for complex deployment workflows",
      practices: [
        "Build multi-environment deployment pipelines",
        "Set up matrix builds for multiple services",
        "Implement advanced security scanning",
        "Create reusable workflow templates"
      ]
    },
    {
      title: "Infrastructure Automation",
      description: "Want to create and manage complete cloud environments from development to production using Terraform",
      practices: [
        "Set up multiple environments (dev, staging, prod)",
        "Manage state files and workspaces",
        "Implement proper security practices",
        "Create reusable infrastructure modules"
      ]
    },
    {
      title: "Container Orchestration",
      description: "Looking to handle complex microservices deployment in Kubernetes clusters",
      practices: [
        "Containerize multiple microservices",
        "Deploy and manage services in Kubernetes",
        "Set up proper networking and security",
        "Implement automated scaling"
      ]
    }
  ];

  const handleViewSyllabus = () => {
    navigate('/syllabus');
  };

  const handleEnroll = () => {
    window.open('https://gkecloud.com/', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 relative ring-2 ring-blue-500">
      <div className="absolute top-0 right-0 -mr-1 -mt-1 px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
        Recommended
      </div>
      <h2 className="text-3xl font-bold mb-2">DevOps Engineer</h2>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold">$500</span>
        <span className="text-gray-500 ml-2">/month</span>
      </div>
      <div className="mb-6 space-y-4">
        {paths.map((path, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              onClick={() => setExpandedPath(expandedPath === index ? null : index)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="font-semibold text-gray-900">{path.title}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedPath === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            {expandedPath === index && (
              <div className="mt-4 space-y-4">
                <p className="text-gray-600">{path.description}</p>
                <ul className="space-y-2">
                  {path.practices.map((practice, pIndex) => (
                    <li key={pIndex} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2 text-green-500">✓</span>
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <button 
          onClick={handleViewSyllabus}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Full Syllabus
        </button>
        <button 
          onClick={handleEnroll}
          className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

// Sr DevOps Engineer Card Component
const SrDevOpsCard: React.FC = () => {
  const navigate = useNavigate();
  
  const handleViewSyllabus = () => {
    navigate('/senior-syllabus');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-2">Sr DevOps Engineer</h2>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold">$700</span>
        <span className="text-gray-500 ml-2">/month</span>
      </div>
      <ul className="mb-6 space-y-4">
        {[
          "Everything in Intermediate",
          "Cloud architecture mastery",
          "Enterprise DevOps practices",
          "Career placement support"
        ].map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-3 text-green-500">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-4">
        <button 
          onClick={handleViewSyllabus}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Full syllabus
        </button>
        <button 
          className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => window.open('https://gkecloud.com/contact', '_blank')}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select the plan that best fits your learning goals
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <JrDevOpsCard />
          </div>
          <div className="relative">
            <DevOpsCard />
          </div>
          <div>
            <SrDevOpsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;