import React from 'react'
import Accordion from './Accordion'
import { experienceList } from '../constatnts/experience'
const Experience = () => {

  return (
    <section id='experience' className='scroll-mt-16'>
      <div className='my-10 min-h-screen'>
        <div><h1 className='text-sectionTitle'>Experience</h1></div>
        <div className='flex flex-col justify-center place-items-center mt-10'>
          {experienceList.map((experienceItem, index) => (
            <Accordion key={index} isExpanded={true} heading={experienceItem.heading} bodyText={experienceItem.body} timePeriod={experienceItem.timePeriod} technologies={experienceItem.technologies} />
          ))}
        </div>
      </div>
    </section>

  )
}



export default Experience