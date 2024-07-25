// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-background via-purple-900 to-violet-600">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/JamesProfileImage.png" 
                alt="James Ade" 
                className="rounded-full w-3/4 h-full mx-auto object-cover shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <p className="text-lg mb-4">
                Hello! I'm <strong>James Hardey</strong>, a passionate <strong>Software developer</strong> with a keen eye for design and a love for creating seamless user experiences.
              </p>
              <p className="text-lg mb-4">
                With 3 years of experience in Software development (Android, Web and Desktop), I specialize in building responsive and dynamic web applications using modern technologies like React, and android apps using Jetpack compose, and Java backend using Springboot.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me Gaming or watching soccer matches. I'm always eager to take on new challenges and learn cutting-edge technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;