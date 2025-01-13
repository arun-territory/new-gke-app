import { motion } from 'framer-motion';

interface ComparisonItem {
  other: string;
  ours: string;
}

const comparisons: ComparisonItem[] = [
  {
    other: "They usually have you build small sample apps (like a \"To Do\" app)",
    ours: "We have you build a full, end-to-end e-commerce project with a real frontend, backend, and database"
  },
  {
    other: "They teach each part separately, making it hard to connect everything",
    ours: "You will work on one complete project from start to finish, so you clearly see how all parts fit and work together"
  },
  {
    other: "You might only learn \"how to do\" something without deeper explanations",
    ours: "We focus on why it's important, what it is, and how to do it, using clear examples and real-life case studies"
  },
  {
    other: "Training often feels like just studying theory or isolated tasks",
    ours: "You'll feel like you're already working for a real startup, solving real issues and collaborating as a real team"
  },
  {
    other: "Projects can be outdated or too simple to reflect real industry problems",
    ours: "We use up-to-date tools and methods, so you gain skills that are directly useful in the job market"
  },
  {
    other: "You might get limited feedback or practice",
    ours: "We provide hands-on tasks, brainstorming sessions, and regular feedback to boost your confidence and progress"
  },
  {
    other: "You learn bits and pieces without real-world context",
    ours: "Our program shows how things work in real time, so you never feel like you're just learning—you're doing"
  },
  {
    other: "Often ends once the course finishes, with little follow-up",
    ours: "We offer ongoing mentorship and support, including career advice and help with job placements"
  }
];

export function ComparisonTable() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why We're Different</h2>
          <p className="text-xl text-gray-300">
            A simplified comparison that shows how we stand out from other programs
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-4 bg-gray-800/50 rounded-lg overflow-hidden"
            >
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-700">
                <h3 className="text-lg text-gray-400 font-medium mb-2">Other Courses/Trainings</h3>
                <p>{item.other}</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
                <h3 className="text-lg text-blue-400 font-medium mb-2">Our Internship Program</h3>
                <p className="text-gray-200">{item.ours}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}