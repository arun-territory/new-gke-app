import React from 'react';

const comparisons = [
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
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We're Different</h2>
          <p className="text-xl text-gray-600">
            A simplified comparison that shows how we stand out from other programs
          </p>
        </div>

        {/* Comparison Items */}
        <div className="space-y-4">
          {comparisons.map((comparison, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Left Column */}
              <div className="flex-1 p-6 bg-white border-r border-gray-100">
                <h3 className="text-gray-600 text-lg font-medium mb-2">
                  Other Courses/Trainings
                </h3>
                <p className="text-gray-800">
                  {comparison.other}
                </p>
              </div>

              {/* Right Column */}
              <div className="flex-1 p-6 bg-blue-50">
                <h3 className="text-blue-600 text-lg font-medium mb-2">
                  Our Internship Program
                </h3>
                <p className="text-gray-800">
                  {comparison.ours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}