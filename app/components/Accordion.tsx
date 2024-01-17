import React, { FC, useEffect, useState } from 'react'

type Props = {
    isExpanded : boolean;
    heading: string;
    bodyText:string;
    timePeriod: string;
    technologies:string[];

}

const Accordion: FC<Props> = (props: Props) => {
    return (
        
            <div className="collapse collapse-arrow bg-base-200 py-2 lg:w-2/4 w-full">
                <input type="radio" name="my-accordion-2" defaultChecked={true}/>
                <div className="flex flex-row justify-between collapse-title">
                   <p className='text-xl font-medium'>{props.heading}</p> 
                   <p className='text-base font-normal'>{props.timePeriod}</p>
                </div>
                <div className="collapse-content bg-gradient-to-r from-[#1d262b] via-[#2a3338] to-[#41494e]">
                    <div className='my-10 md:ml-5'>
                    <p className='text-start'>{props.bodyText}</p>
                    </div>
                    <div className='flex justify-start ml-5'>
                    {props.technologies.map((techItem,index) => (
                        <div key={index} className="badge badge-primary badge-outline py-3 mx-1 align-middle"><p className='text-l'>{techItem}</p></div>
                    ))}
                    </div>
                </div>
            </div>
    )
}

export default Accordion