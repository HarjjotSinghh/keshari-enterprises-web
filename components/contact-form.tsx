'use client';

import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, contactNo });
  };

  return (
    <div className=" px-8 py-16 w-full">
      <motion.h2
        className="text-white text-center text-3xl mb-6"
        initial="hidden"
        whileInView="animate"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        HAVE A QUESTION OR WANT TO SPEAK TO OUR TEAM?
      </motion.h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-center gap-4">
        {['Name *', 'Email *', 'Contact No. *'].map((placeholder, index) => (
          <motion.input
            key={index}
            type={
              placeholder === 'Contact No. *' ? 'tel' : placeholder === 'Email *' ? 'email' : 'text'
            }
            placeholder={placeholder}
            value={placeholder === 'Name *' ? name : placeholder === 'Email *' ? email : contactNo}
            onChange={(e) => {
              if (placeholder === 'Name *') setName(e.target.value);
              else if (placeholder === 'Email *') setEmail(e.target.value);
              else setContactNo(e.target.value);
            }}
            className="bg-transparent border border-white text-white placeholder-white p-2 w-full sm:w-64"
            required
            initial="hidden"
            whileInView="animate"
            variants={fadeIn} // Changed to use fadeIn variants
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ transitionDelay: `${index * 100}ms` }} // Staggered animation
          />
        ))}
        <motion.button
          type="submit"
          className="bg-primary text-white lg:px-8 px-6 py-2 flex items-center gap-2 justify-center hover:bg-primary/90 transition-colors duration-300"
          initial="hidden"
          whileInView="animate"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="mt-1.5">Submit</span> <ArrowRightIcon className="h-4 w-4" />
        </motion.button>
      </form>
    </div>
  );
}
