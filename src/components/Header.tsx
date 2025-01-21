import React, { useState } from 'react';
import { Cloud, Menu, X, Play } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import EnhancedCodingDemo from './EnhancedCodingDemo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);  // New state for demo modal
  const navigate = useNavigate();

  // Keep all your existing handlers
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

  // New handler for demo button
  const handleDemoClick = () => {
    setShowDemo(true);
    setIsMenuOpen(false);
  };

  // Keep your existing animation variants
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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo section - Keep exactly as is */}
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={handleWhatIsDevOps}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    size="default"
                  >
                    What is DevOps?
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={handleWhyIsDevOps}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    size="default"
                  >
                    Why choose us?
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={handleDemoClick}
                    className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
                    size="default"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Live Project
                  </Button>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* <Button 
                  onClick={handleDaavalAI}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                  size="default"
                >
                  Daaval AI
                </Button> */}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleBlog}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                  size="default"
                >
                  Blog
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleInternship}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-transparent"
              >
                Pricing
            </Button>
            </motion.div>
            
              {/* <Button variant="outline" size="sm">
                Sign In
              </Button> */}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="default"
              className="md:hidden p-2"
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
              variants={mobileMenuVariants}
              className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden"
            >
              <div className="p-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="grid gap-3">
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <Button 
                      onClick={handleWhatIsDevOps}
                      className="w-full h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    >
                      What is DevOps?
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <Button 
                      onClick={handleWhyIsDevOps}
                      className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    >
                      Why DevOps?
                    </Button>
                  </motion.div>

                  {/* Add Live Demo button in mobile menu */}
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <Button 
                      onClick={handleDemoClick}
                      className="w-full h-12 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Live Project
                    </Button>
                  </motion.div>

                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg overflow-hidden"
                  >
                    {/* <Button 
                      onClick={handleDaavalAI}
                      className="w-full h-12 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                    >
                      Daaval AI
                    </Button> */}
                  </motion.div>

                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <Button 
                      onClick={handleBlog}
                      className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    >
                      Blog
                    </Button>
                  </motion.div>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="srounded-lg overflow-hidden"
                  >
                    <Button 
                      onClick={handleInternship}
                      className="w-full h-12 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
                    >
                      Pricing
                    </Button>
                  </motion.div>
                    {/* <Button 
                      variant="outline"
                      className="w-full h-12"
                    >
                      Sign In
                    </Button> */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-lg w-full max-w-4xl"
              >
                <Button
                  variant="outline"
                  size="default"
                  className="absolute top-4 right-4 z-10"
                  onClick={() => setShowDemo(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <EnhancedCodingDemo />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}