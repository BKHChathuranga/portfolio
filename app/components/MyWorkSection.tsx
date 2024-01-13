import React from 'react'
import ProjectCard from './ProjectCard'

const MyWorkSection = () => {
    return (
        <section className='my-10 scroll-mt-12' id='projects'>
            <div>
                <h1 className='text-sectionTitle'>My Work</h1>
            </div>
            <div className='flex justify-center gap-4 flex-wrap'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>
        </section>
    )
}

export default MyWorkSection