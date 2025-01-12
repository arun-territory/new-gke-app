import React, { useState } from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhyPerfect = () => {
    window.location.hash = '#why-perfect';
    setIsMenuOpen(false);
  };

  const handleDaavalAI = () => {
    window.open('https://huggingface.co/spaces/arunponugoti2565/Daval.AI', '_blank');
    setIsMenuOpen(false);
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

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3
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

          {/* Desktop Navigation */}
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
                Why you should choose us
              </Button>
            </motion.div>
            <Button variant="outline" size="sm">Internship</Button>
            <Button variant="outline" size="sm">Sign In</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-full bg-white md:hidden"
          >
            <div className="pt-20 px-4 space-y-4">
              <Button 
                onClick={handleDaavalAI}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold"
              >
                Daaval AI
              </Button>
              <Button 
                onClick={handleWhyPerfect}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              >
                Why It's Perfect
              </Button>
              <Button variant="outline" className="w-full">
                Internship
              </Button>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}