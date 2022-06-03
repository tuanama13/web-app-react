import React from 'react'
import {CloudUploadIcon,UploadIcon,PaperAirplaneIcon,ServerIcon} from '@heroicons/react/solid';
import bgImg from "../assets/cyber-bg.png";


const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h1 className='py-3 text-5xl md:text-7xl'>Cloud Management</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero