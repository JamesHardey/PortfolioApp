import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Project1Image from '../assets/ZenithAnalysis.png';
import Project2Image from '../assets/NewApp.png';
import Project3Image from '../assets/JPlayer.png';
import Project4Image from '../assets/NewAppDesktop.png';
import Project5Image from '../assets/F7Team.png';
import Project6Image from '../assets/JTodoApp.png';

const projectData = [
  {
    title: 'Zenith Analysis',
    shortDescription: 'Web application for data analysis using Java and Thymeleaf.',
    longDescription: 'Zenith Analysis is a comprehensive web application developed using Java, Thymeleaf, jQuery, HTML, and CSS. It provides powerful tools for data analysis, visualization, and reporting. The application features an intuitive user interface, real-time data processing, and customizable dashboards to meet various analytical needs.',
    imageUrl: Project1Image,
    githubUrl: 'https://github.com/JamesHardey/Zenith-Analysis',
    websiteUrl: null
  },
  {
    title: 'Mobile News Application',
    shortDescription: 'Android app displaying news articles using NYT API.',
    longDescription: 'This Android app leverages the New York Times API to deliver up-to-date news articles to users. Built with modern Android development practices, it uses Retrofit for efficient API communication, ViewModel for robust data management, and SwipeRefreshLayout for a seamless user experience. The app showcases responsive design and smooth performance across various Android devices.',
    imageUrl: Project2Image,
    githubUrl: 'https://github.com/JamesHardey/NewsAppllication',
    websiteUrl: null
  },
  {
    title: 'JPlayer',
    shortDescription: 'JavaFX-based desktop video player with intuitive controls.',
    longDescription: 'JPlayer is a feature-rich desktop video player application built using JavaFX. It offers an intuitive and user-friendly interface for playing various video formats. The player includes essential media controls, playlist management, and customizable settings. Its open-source nature allows for community contributions and continuous improvements, making it a versatile choice for desktop video playback.',
    imageUrl: Project3Image,
    githubUrl: 'https://github.com/JamesHardey/JPlayer',
    websiteUrl: null
  },
  {
    title: 'Desktop News Application',
    shortDescription: 'Jetpack Compose desktop app for browsing news articles.',
    longDescription: 'This Desktop News Application is built using Jetpack Compose for Desktop, showcasing the power of Kotlin and modern UI frameworks. It features a clean and elegant user interface that allows users to browse news articles by categories and view detailed information for each article. The app demonstrates responsive design, efficient data handling, and smooth animations, providing a native desktop experience for news consumption.',
    imageUrl: Project4Image,
    githubUrl: 'https://github.com/JamesHardey/NewsApp',
    websiteUrl: null
  },
  {
    title: 'F7Team',
    shortDescription: 'React-based website for F7Team.',
    longDescription: 'F7Team is a dynamic and responsive website built with React, showcasing the capabilities and projects of the F7Team. The site features modern web design principles, including responsive layouts, interactive elements, and optimized performance. It serves as a central hub for team information, project portfolios, and contact details, demonstrating proficiency in front-end development and UI/UX design.',
    imageUrl: Project5Image,
    githubUrl: 'https://website-frontend-git-main-fantastic7s-projects.vercel.app/',
    websiteUrl: 'https://website-frontend-git-main-fantastic7s-projects.vercel.app/'
  },
  {
    title: 'JTodoApp',
    shortDescription: 'Elegant todo app with light/dark theme support.',
    longDescription: 'JTodoApp is a sophisticated task management application that combines functionality with aesthetic appeal. It allows users to add, edit, and delete tasks, mark them as completed, and view them in a clean, user-friendly interface. The app features a dual-theme system, allowing users to switch between light (day) and dark (night) modes. Built with modern development practices, it showcases efficient state management, local storage integration, and responsive design principles.',
    imageUrl: Project6Image,
    githubUrl: 'https://github.com/yourusername/project3',
    websiteUrl: null
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

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
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openPopup(project)}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-2">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-contain" />
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 text-white hover:text-primary bg-gray-800 rounded-full p-2"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-grow">
                <h3 className="text-2xl font-semibold text-primary mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                <div className="flex space-x-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition duration-300 flex items-center"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.websiteUrl && (
                    <a
                      href={selectedProject.websiteUrl}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;