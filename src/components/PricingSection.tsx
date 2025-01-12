// PricingSection.tsx
import { motion } from 'framer-motion';
import { PricingCard } from './PricingCard';
import { useNavigate } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function PricingSection() {
  const navigate = useNavigate();

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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div variants={item}>
            <PricingCard
              title="Basic"
              price="299"
              buttonText="Syllabus"
              buttonAction={() => navigate('/devops-roadmap')}
              enrollUrl="https://www.arunponugoti.com/"
              features={[
                "Complete infrastructure as code implementation",
                "Production-grade CI/CD pipeline setup",
                "Build and Deploy Containerized apps",
                "Multi-environment deployment strategy using GKE cluster"
              ]}
            />
          </motion.div>
          <motion.div variants={item}>
            <PricingCard
              title="Intermediate"
              price="500"
              recommended={true}
              buttonUrl="https://gkecloud.com/"
              features={[
                "Advanced CI/CD pipeline setup",
                "Advanced Docker & Kubernetes",
                "Infrastructure as Code",
                "1-on-1 mentoring sessions"
              ]}
            />
          </motion.div>
          <motion.div variants={item}>
            <PricingCard
              title="Advanced"
              price="700"
              features={[
                "Everything in Intermediate",
                "Cloud architecture mastery",
                "Enterprise DevOps practices",
                "Career placement support"
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}