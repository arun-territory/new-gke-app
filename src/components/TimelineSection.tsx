import { motion } from 'framer-motion';
import { Code, GitBranch, Container, Cloud } from 'lucide-react';

const timeline = [
  {
    icon: Code,
    title: 'Foundation',
    description: 'Master the basics of DevOps and version control',
    week: 'Week 1-2'
  },
  {
    icon: GitBranch,
    title: 'CI/CD Mastery',
    description: 'Build and optimize deployment pipelines',
    week: 'Week 3-4'
  },
  {
    icon: Container,
    title: 'Containerization',
    description: 'Docker and Kubernetes orchestration',
    week: 'Week 5-6'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Deploy and manage cloud infrastructure',
    week: 'Week 7-8'
  }
];

export function TimelineSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Your Learning Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100" />
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative flex ${index % 2 === 0 ? 'justify-end md:pr-8' : 'justify-start md:pl-8'} mb-8`}
            >
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-blue-600">{item.week}</p>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}