import React from 'react'
import PublicationCard from './PublicationCard'

const Publications = () => {
  return (
    <section className='my-10' id='publications'>
        <div className='mb-10'><h1 className='text-sectionTitle'>Publications</h1></div>
        <PublicationCard/>
    </section>
  )
}

export default Publications