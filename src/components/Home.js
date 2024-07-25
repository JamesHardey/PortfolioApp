// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-20 flex flex-1 items-center justify-center bg-gradient-to-br from-background via-purple-900 to-violet-600 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          >
            Hello,
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          >
            I'm James Ade
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-4"
          >
            Software Developer | Android | Web | Desktop
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Transforming ideas into powerful, user-centric applications across multiple platforms. 
            With expertise in Android, Web, and Desktop development, I create seamless digital 
            solutions that drive innovation and enhance user experiences.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-8 mb-4 sm:mb-8"
          >
            <div className="text-center">
              <span className="text-3xl sm:text-4xl text-primary block mb-1 sm:mb-2">&#x1F4F1;</span>
              <span className="text-xs sm:text-sm text-gray-300">Android Apps</span>
            </div>
            <div className="text-center">
              <span className="text-3xl sm:text-4xl text-secondary block mb-1 sm:mb-2">&#x1F310;</span>
              <span className="text-xs sm:text-sm text-gray-300">Web Applications</span>
            </div>
            <div className="text-center">
              <span className="text-3xl sm:text-4xl text-accent block mb-1 sm:mb-2">&#x1F5A5;</span>
              <span className="text-xs sm:text-sm text-gray-300">Desktop Software</span>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-secondary text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-base sm:text-lg"
            >
              View My Projects
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary hover:border-secondary text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 text-base sm:text-lg"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
