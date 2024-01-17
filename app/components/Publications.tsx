import React from 'react'
import PublicationCard from './PublicationCard'
import { publicationList } from '../constatnts/Publications'

const Publications = () => {
  return (
    <section className='my-10' id='publications'>
      <div className='mb-10'><h1 className='text-sectionTitle'>Publications</h1></div>
      <div className='flex flex-row overflow-x-scroll md:overflow-x-hidden space-x-4'>
        {publicationList.map((publication) => (
          <PublicationCard key={publication.index} title={publication.title} description={publication.description} image={publication.image}/>
        ))}
      </div>
    </section>
  )
}

export default Publications