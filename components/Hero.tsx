import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center px-6'>
      <motion.h1 
        className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI Content Generator
      </motion.h1>
      <motion.p 
        className='text-lg md:text-xl lg:text-2xl mb-8'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Generate high-quality content on more than 50 topics effortlessly
      </motion.p>
      <motion.div 
        className='flex flex-col md:flex-row gap-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <button className='bg-white text-purple-500 font-semibold py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition'>
          Get Started
        </button>
        <button className='bg-white text-purple-500 font-semibold py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition'>
          Learn More
        </button>
      </motion.div>
    </div>
  )
}

export default Hero
