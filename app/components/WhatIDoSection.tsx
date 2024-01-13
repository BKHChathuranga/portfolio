import React from 'react'
import Card from './Card'

const WhatIDoSection = () => {
    return (
        <section id='whatIDo' className='scroll-mt-16'>
            <div>
                <h1 className='text-sectionTitle text-center'>My Expertise</h1>
            </div>
            <div className='flex flex-row justify-center my-10 gap-8 flex-wrap'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>


    )
}

export default WhatIDoSection