import React from 'react'
import AboutSection from './components/AboutSection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatIDoSection from './components/WhatIDoSection';
import MyWorkSection from './components/MyWorkSection';
import Experience from './components/Experience';
import Publications from './components/Publications';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col justify-center max-w-[1440px] sm:px-5 h-full text-center md:px-20 sm:mx-auto mx-5'>
        <AboutSection />
        <div className='divider'></div>
        <WhatIDoSection />
        <div className='divider'></div>
        <MyWorkSection />
        <div className='divider'></div>
        <Experience />
        <div className='divider'></div>
        {/* <Publications /> */}
      </div>
      <Footer />
    </div>

  )
}

export default HomePage;