import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const icons = [
  {
    name: "Google Cloud Platform",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
      <path fill="#1976d2" d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598 c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5 c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288 C43,23.563,41.086,20.279,38.193,18.359z"/>
      <path fill="#ff3d00" d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5 c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598 C31.188,9.003,27.761,7.576,24,7.576z"/>
      <path fill="#4caf50" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71 C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"/>
      <path fill="#ffc107" d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717 c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71 C12.53,30.469,11.5,28.999,11.5,27.29z"/>
    </svg>`
  },
  {
    name: "Terraform",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
      <polygon fill="#6042ea" points="17,23 5,16 5,2 17,9"/>
      <polygon fill="#6042ea" points="31,31 19,24 19,10 31,17"/>
      <polygon fill="#4040b2" points="33,31 45,24 45,10 33,17"/>
      <polygon fill="#6042ea" points="31,47 19,40 19,26 31,33"/>
    </svg>`
  },
  {
    name: "Docker",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
      <path fill="#2395ec" d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"/>
    </svg>`
  },
  {
    name: "Kubernetes",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
      <path fill="#0277bd" d="M44.766,28.174l-3.663-16.12c-0.163-0.72-0.642-1.316-1.304-1.643L24.976,3.245 c-0.662-0.327-1.429-0.327-2.09,0L8.063,10.411c-0.662,0.327-1.141,0.922-1.304,1.643l-3.663,16.12c-0.163,0.72,0.01,1.47,0.46,2.037 l10.259,12.93c0.46,0.576,1.16,0.913,1.889,0.913h16.453c0.729,0,1.429-0.336,1.889-0.913l10.259-12.93 C44.756,29.643,44.929,28.894,44.766,28.174z"/>
    </svg>`
  }
];

export function AnimatedIcons() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const iconVariants = {
    enter: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    center: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 h-48">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIconIndex}
          variants={iconVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 flex items-center justify-center"
               dangerouslySetInnerHTML={{ __html: icons[currentIconIndex].svg }}
          />
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-xl font-medium text-gray-800"
          >
            {icons[currentIconIndex].name}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}