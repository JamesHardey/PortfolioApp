// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init("ikL-VZBJYZHUa2VL2");
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_imeweme', 
        'template_j5h3hf9',
        data
      );
      if (result.text === 'OK') {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary";
  const labelClasses = "block text-sm font-medium mb-2 text-gray-300";
  const errorClasses = "mt-1 text-red-500 text-xs";

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-purple-900 to-violet-600">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Get in Touch
          </h2>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6">
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className={inputClasses}
            />
            {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={inputClasses}
            />
            {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className={labelClasses}>Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows="4"
              className={inputClasses}
            ></textarea>
            {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
          {submitStatus === 'success' && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-500"
            >
              Message sent successfully!
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-red-500"
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;