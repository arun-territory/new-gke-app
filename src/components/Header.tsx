import React, { useState } from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleDaavalAI = () => {
    window.open('https://huggingface.co/spaces/arunponugoti2565/Daval.AI', '_blank');
    setIsMenuOpen(false);
  };

  const handleInternship = () => {
    navigate('/internship-file');
    const pricingSection = document.querySelector('internship-file');
    if (pricingSection) {
      const headerOffset = 80;
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleWhatIsDevOps = () => {
    navigate('/what-is-devops');
    setIsMenuOpen(false);
  };

  const handleWhyIsDevOps = () => {
    navigate('/why-is-devops');
    setIsMenuOpen(false);
  };

  const handleBlog = () => {
    navigate('/blog');
    setIsMenuOpen(false);
  };

  // Animation variants remain the same
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
          {/* Logo section remains the same */}
          <motion.div 
            className="flex items-center space-x-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={handleHome}
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
            <div className="flex space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleWhatIsDevOps}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                  size="default"
                >
                  What is DevOps?
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleWhyIsDevOps}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  size="default"
                >
                  Why choose us?
                </Button>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleDaavalAI}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                size="default"
              >
                Daaval AI
              </Button>
            </motion.div>
            
            {/* Add Blog Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleBlog}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                size="default"
              >
                Blog
              </Button>
            </motion.div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleInternship}
            >
              Internship
            </Button>
            <Button 
              variant="outline" 
              size="sm"
            >
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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
                onClick={handleWhatIsDevOps}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                size="lg"
              >
                What is DevOps?
              </Button>
              
              <Button 
                onClick={handleWhyIsDevOps}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                size="lg"
              >
                Why DevOps?
              </Button>
              <Button 
                onClick={handleDaavalAI}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                size="lg"
              >
                Daaval AI
              </Button>

              {/* Add Blog Button to mobile menu */}
              <Button 
                onClick={handleBlog}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                size="lg"
              >
                Blog
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleInternship}
                size="lg"
              >
                Internship
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                size="lg"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}