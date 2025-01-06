import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "This program transformed my career. I went from a junior developer to a DevOps engineer in just 2 months!",
    author: "Sarah Johnson",
    role: "DevOps Engineer at Tech Corp"
  },
  {
    quote: "The hands-on projects and mentorship were invaluable. I learned more here than in years of self-study.",
    author: "Michael Chen",
    role: "Cloud Architect at StartupX"
  },
  {
    quote: "The best investment I've made in my career. The real-world projects prepared me for actual work scenarios.",
    author: "Emma Davis",
    role: "SRE at CloudScale"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-blue-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}