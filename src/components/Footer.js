// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const socialMediaLinks = [
    { platform: 'Twitter', url: 'https://x.com/hahmess', icon: <FaTwitter /> },
    { platform: 'GitHub', url: 'https://github.com/JamesHardey', icon: <FaGithub /> },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/james-adefehinti-b461b3116/', icon: <FaLinkedin /> }
];

const Footer = () => {
    return (
        <footer className="bg-background py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white mb-4 md:mb-0"
                    >
                        © 2024 James Ade. All rights reserved.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex space-x-4"
                    >
                        {socialMediaLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary hover:cursor-pointer transition duration-300 text-2xl"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
