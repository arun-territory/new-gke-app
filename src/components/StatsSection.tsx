import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Trophy } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Students Enrolled' },
  { icon: Briefcase, value: '90%', label: 'Job Placement' },
  { icon: Award, value: '50+', label: 'Industry Partners' },
  { icon: Trophy, value: '100+', label: 'Projects Completed' },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-75" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-75">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}