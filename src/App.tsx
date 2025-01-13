import React, { type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Layers, GitBranch, Terminal, Database, Cloud } from 'lucide-react';

// Import components
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PricingSection } from './components/PricingSection';
import { StatsSection } from './components/StatsSection';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialSection } from './components/TestimonialSection';
import { WhyPerfect } from './pages/WhyPerfect';
import DevOpsGuidePage from './pages/DevOpsGuidePage';
import { ComparisonTable } from './pages/ComparisonTable';
import { DevOpsRoadmap } from './components/DevOpsRoadmap';
import BlogViewer from './pages/BlogViewer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// Features data
const features = [
  {
    icon: <Container className="w-6 h-6 text-blue-600" />,
    title: "Docker & Containerization",
    description: "Master container technologies and learn how to build, ship, and run distributed applications."
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: "CI/CD Pipelines",
    description: "Build automated pipelines for continuous integration and deployment using industry-standard tools."
  },
  {
    icon: <GitBranch className="w-6 h-6 text-blue-600" />,
    title: "Version Control",
    description: "Learn Git workflows and collaboration practices used in professional development teams."
  },
  {
    icon: <Terminal className="w-6 h-6 text-blue-600" />,
    title: "Infrastructure as Code",
    description: "Define and manage infrastructure using code with tools like Terraform and Ansible."
  },
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "Monitoring & Logging",
    description: "Implement monitoring solutions and manage logs for complex distributed systems."
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: "Cloud Platforms",
    description: "Work with major cloud providers and learn cloud-native development practices."
  }
];

// HomePage Component
const HomePage = () => {
  const handleLearnMore = () => {
    window.open('https://www.youtube.com/watch?v=pQ87vVMZK-A', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">DevOps Experience Program</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Build from Scratch
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your career with hands-on DevOps experience. Learn the tools, practices, and mindset needed to excel in modern software development.
            </p>
            <motion.div 
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleLearnMore}
                  className="w-full sm:w-auto"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <StatsSection />
      <TimelineSection />
      
      {/* Features Section */}
      <motion.div 
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <TestimonialSection />
      <PricingSection />
      
      {/* Why Perfect Section */}
      <div id="why-perfect">
        <WhyPerfect />
      </div>
    </>
  );
};

// Layout Component
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// ScrollToTop Component
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devops-roadmap" element={<DevOpsRoadmap />} />
          <Route path="/what-is-devops" element={<DevOpsGuidePage />} />
          <Route path="/why-is-devops" element={<ComparisonTable />} />
          <Route path="/internship-file" element={<PricingSection />} />
          <Route path="/blog/*" element={<BlogViewer />} />
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;