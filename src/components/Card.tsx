import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "p-6 rounded-lg bg-white shadow-lg border border-gray-100",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}