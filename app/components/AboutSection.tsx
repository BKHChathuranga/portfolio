'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='flex flex-row items-left scroll-mt-16 text-left' id="about">
      <div className='grid grid-cols-12'>
        <div className='md:flex col-span-6 items-center justify-center hidden'>
          <div className='relative outline outline-offset-8 outline-1 outline-orange-400 h-[380px] w-[380px]'>
            <div className='absolute -left-5 bottom-0.5 hover:bottom-0 hover:left-0 transition-all ease-in-out duration-500'><Image src="/dp.png" width={400} height={400} alt="Shoes" className='relative'/></div>
            
          </div>
        </div>
        <div className='col-span-6'>
          <div className='text-mainTitle'><h1 className=''>Hello!</h1></div>
          <div className='sm:text-subTitle text-slate-300'><h2>I&apos;m Hashan,</h2></div>
          <div className='sm:text-normalTitle text-l'>
            a <Typewriter
              words={['Full-Stack Software Engineer', 'UI/UX Engineer', 'AI/ML Enthusiast']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
            />
          </div>
          <div className='md:text-left my-10 w-screen sm:w-3/4 text-justify'>
            <p>Passionate IT professional with a strong focus on software engineering. Currently exploring the dynamic fields of AI and data science, I specialize in crafting elegant applications with an emphasis on design, user experience, architecture, and code quality. Committed to driving excellence in technology, I am actively learning and seeking opportunities to make meaningful contributions in dynamic work environments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;