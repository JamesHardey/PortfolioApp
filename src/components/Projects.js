// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Project1Image from '../assets/ZenithAnalysis.png';
import Project2Image from '../assets/NewApp.png';
import Project3Image from '../assets/JPlayer.png';
import Project4Image from '../assets/NewAppDesktop.png';
import Project5Image from '../assets/F7Team.png';
import Project6Image from '../assets/JTodoApp.png';

const projectData = [
  { 
    title: 'Zenith Analysis',
    description: 'Zenith Analysis is a web application developed using Java, Thymeleaf, jQuery, HTML, and CSS.',
    imageUrl: Project1Image,
    githubUrl: 'https://github.com/JamesHardey/Zenith-Analysis', 
    websiteUrl: null 
  },

  {
    title: 'Mobile News Application', 
    description: 'This is an Android app that uses the New York Times API to display news articles. The app uses Retrofit to fetch data from the API, ViewModel to manage data, and SwipeRefreshLayout to enable users to refresh the content.', 
    imageUrl: Project2Image, 
    githubUrl: 'https://github.com/JamesHardey/NewsAppllication',
    websiteUrl: null 
  },

  {
    title: 'JPlayer', 
    description: 'JPlayer is a desktop video player application built using JavaFX, designed to provide an intuitive and user-friendly interface for playing video content. This open-source project aims to offer essential media player controls and features, making it a valuable addition to your desktop applications.', 
    imageUrl: Project3Image, 
    githubUrl: 'https://github.com/JamesHardey/JPlayer', 
    websiteUrl: null 
  },
  { 
    title: 'Desktop New Application', 
    description: 'This is a News App built using Jetpack Compose for Desktop. It features a simple yet elegant UI, allowing users to browse news articles by categories and view detailed information for each article.', 
    imageUrl: Project4Image, 
    githubUrl: 'https://github.com/JamesHardey/NewsApp', 
    websiteUrl: null 
  },
  {
    title: 'F7Team', 
    description: 'A F7Team website with React', 
    imageUrl: Project5Image, 
    githubUrl: 'https://website-frontend-git-main-fantastic7s-projects.vercel.app/', 
    websiteUrl: 'https://website-frontend-git-main-fantastic7s-projects.vercel.app/' 
  },
  { 
    title: 'JTodoApp', 
    description: 'JTodoApp is a simple and elegant app that helps you manage your tasks with ease. You can add, edit, and delete tasks, mark them as completed, and view them in a clean and user-friendly interface. You can also switch between a light (day) and dark (night) theme to suit your mood and preference.', 
    imageUrl: Project6Image, 
    githubUrl: 'https://github.com/yourusername/project3', 
    websiteUrl: null 
  },
];

const Projects = () => {
  return (
    <div className="flex-1 py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition duration-300 flex items-center"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition duration-300 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
