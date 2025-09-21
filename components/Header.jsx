import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image className="rounded-full w-32" src={assets.profile_img} alt=""/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi | I'm William Mark <Image className="w-6" src={assets.hand_icon} alt=""/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend web developer based in London.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2' href="#contact">contact me <Image className='rounded-full w-4' src={assets.right_arrow_white} alt=''/></a>
            <a className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' href="/sample-resume.pdf" download>my resume <Image className='w-4' src={assets.download_icon} alt=''/></a>
        </div>
    </div>
  )
}

export default Header