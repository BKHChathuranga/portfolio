import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsList } from '../constatnts/MyWork'

const MyWorkSection = () => {
    return (
        <section className='scroll-m-12' id='projects'>
            <div>
                <h1 className='text-sectionTitle mb-10'>My Work</h1>
            </div>
            <div className='flex flex-col justify-center gap-4 align-middle items-center'>
                {projectsList.map((project) =>(
                    <ProjectCard key={project.index} header={project.heading} description={project.description} role={project.Role} technology={project.technologies} image={project.image}/>
                ))}
            </div>
        </section>
    )
}

export default MyWorkSection