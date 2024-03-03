'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import ReactPlayer from 'react-player';
import './CommonComponent.css'
const AboutSection = () => {
  return (
    <section className='scroll-mt-16 text-left' id="about">
      <div className='sm:grid sm:grid-cols-12 md:gap-16 my-10 flex-wrap'>

        <div className='sm:col-span-12 md:col-span-6 items-center justify-center md:flex'>
          <div className='relative outline outline-offset-8 outline-1 outline-orange-400 md:h-[380px] md:w-[380px] h-[50vh] w-[85vw]'>
            <div className='image-container absolute inset-0 overflow-hidden'>
              <Image src="/dp.png" alt="Shoes" layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
        <div className='sm:col-span-12 md:col-span-6'>
          <div className='text-mainTitle'><h1 className=''>Hello!</h1></div>
          <div className='sm:text-subTitle text-slate-300 text-[50px] font-bold stroke-slate-100 fill-none'><h2>Im Hashan,</h2></div>
          <div className='sm:text-normalTitle text-[40px] font-bold h-24'>
            a <Typewriter
              words={['Full-Stack Software Engineer', 'UI/UX Engineer', 'AI/ML Enthusiast']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
            />
          </div>
          <div className='text-wrap my-10 w-full text-justify'>
            <p>Passionate IT professional with a strong focus on software engineering. Currently exploring the dynamic fields of AI and data science, I specialize in crafting elegant applications with an emphasis on design, user experience, architecture, and code quality. Committed to driving excellence in technology, I am actively learning and seeking opportunities to make meaningful contributions in dynamic work environments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;