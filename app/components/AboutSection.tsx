'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='scroll-mt-16 text-left' id="about">
      <div className='sm:grid sm:grid-cols-12 flex'>
        <div className='sm:col-span-6 items-center justify-center md:flex hidden'>
          <div className='relative outline outline-offset-8 outline-1 outline-orange-400 h-[380px] w-[380px]'>
            <div className='absolute -left-5 bottom-0.5 hover:bottom-0 hover:left-0 transition-all ease-in-out duration-500'><Image src="/dp.png" width={400} height={400} alt="Shoes" className='relative'/></div>
            
          </div>
        </div>
        <div className='sm:col-span-6 flex-col'>
          <div className='text-mainTitle'><h1 className=''>Hello!</h1></div>
          <div className='sm:text-subTitle text-slate-300'><h2>Im Hashan,</h2></div>
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
          <div className='text-left my-10 '>
            <p>Passionate IT professional with a strong focus on software engineering. Currently exploring the dynamic fields of AI and data science, I specialize in crafting elegant applications with an emphasis on design, user experience, architecture, and code quality. Committed to driving excellence in technology, I am actively learning and seeking opportunities to make meaningful contributions in dynamic work environments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;