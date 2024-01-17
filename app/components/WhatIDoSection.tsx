import React from 'react'
import Card from './Card'
import { skillList } from '../constatnts/SkillsList'

const WhatIDoSection = () => {
    return (
        <section id='whatIDo' className='scroll-mt-16'>
            <div>
                <h1 className='text-sectionTitle text-center'>My Expertise</h1>
            </div>
            <div className='flex flex-row justify-center my-10 gap-8 flex-wrap'>
                {skillList.map((skill,index) =>(
                    <Card key={index} head={skill.heading} description={skill.description} technology={skill.technologies}/>
                ))}
            </div>
        </section>


    )
}

export default WhatIDoSection