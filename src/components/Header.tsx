import React from 'react';
import { Cloud } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export function Header() {
  const handleWhyPerfect = () => {
    window.location.hash = '#why-perfect';
  };

  const handleDaavalAI = () => {
    window.open('https://huggingface.co/spaces/arunponugoti2565/Daval.AI/', '_blank');
  };

  const letterVariants = {
    initial: { y: 0 },
    animate: { y: [-2, 2, -2], transition: { repeat: Infinity, duration: 2 } }
  };

  const cloudVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: { 
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: { 
        repeat: Infinity, 
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              variants={cloudVariants}
              initial="initial"
              animate="animate"
            >
              <Cloud className="w-12 h-12 text-gradient-primary" />
            </motion.div>
            <div className="flex space-x-1">
              {['G', 'K', 'E', 'cloud'].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={`text-4xl font-black ${
                    letter === 'cloud' 
                      ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text animate-gradient'
                      : 'bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 text-transparent bg-clip-text'
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleDaavalAI}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold"
              >
                Daaval AI
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleWhyPerfect}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              >
                Why It's Perfect
              </Button>
            </motion.div>
            <Button variant="outline" size="sm">Internship</Button>
            <Button variant="outline" size="sm">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}