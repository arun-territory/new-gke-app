// src/components/QuoteSlider.tsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    author: "Richard Feynman",
    duration: 8000
  },
  {
    text: "The first principle is that you must not fool yourself – and you are the easiest person to fool.",
    author: "Richard Feynman",
    duration: 7000
  },
  {
    text: "What I cannot create, I do not understand.",
    author: "Richard Feynman",
    duration: 6000
  },
  {
    text: "I learned very early the difference between knowing the name of something and knowing something.",
    author: "Richard Feynman",
    duration: 7000
  }
];

const QuoteSlider = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % quotes.length);
          setIsTransitioning(false);
        }, 500);
      }, quotes[currentQuote].duration);
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentQuote, isPaused]);

  const handleQuoteClick = (index: number) => {
    if (index === currentQuote || isTransitioning) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuote(index);
      setIsTransitioning(false);
    }, 500);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startTimer();
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto px-4 py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center min-h-[200px] flex flex-col justify-center relative group"
        >
          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Paused - Hover to read
            </div>
          )}
          <div className="relative">
            <div className="absolute -left-4 -top-4 text-6xl text-blue-500 opacity-20">"</div>
            <p className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4 px-8">
              {quotes[currentQuote].text}
            </p>
            <div className="absolute -right-4 bottom-0 text-6xl text-blue-500 opacity-20">"</div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-blue-600 font-semibold mt-4"
          >
            - {quotes[currentQuote].author}
          </motion.p>
        </motion.div>
      </AnimatePresence>
      
      {/* Quote Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => handleQuoteClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuote 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-300 hover:bg-blue-300'
            }`}
            disabled={isTransitioning}
            aria-label={`Quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;