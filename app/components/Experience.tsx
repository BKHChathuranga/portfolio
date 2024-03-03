import React from 'react'
import Accordion from './Accordion'
import { experienceList } from '../constants/Experience'
const Experience = () => {
  return (
    <section id='experience' className='scroll-mt-16'>
      <div className='my-10 h-max'>
        <div><h1 className='text-sectionTitle mb-10'>Experience</h1></div>
        <Accordion />
      </div>
    </section>

  )
}



export default Experience