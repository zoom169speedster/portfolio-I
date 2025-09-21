import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image className='w-36 mx-auto mb-2 ' src={assets.logo} alt=''/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image className='w-6' src={assets.mail_icon} alt=''/>
            yash274602@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; Yash Kushwaha | All rights reserved</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.github.com/alwaysyash616">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/alwaysyash">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.github.com/alwaysyash">Twitter</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
