import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, dealy: 0.3}} className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>
        <motion.h2 initial={{y: -20,opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='text-center text-5xl font-Ovo'>My Services</motion.h2>

        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</motion.p>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, dealy: 0.9}} className='grid grid-cols-auto gap-6 my-10'>
          {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div whileHover={{scale: 1.05}} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--shadow-black)] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white' key={index}>
              <Image className='w-10' src={icon} alt=''/>
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
              <a className='flex items-center gap-2 text-sm mt-5' href={link}>
                Read more <Image className='w-4' src={assets.right_arrow} alt=''/>
              </a>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Services

