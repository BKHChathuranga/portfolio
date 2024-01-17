import Image from 'next/image';
import React, { FC } from 'react'

type Props = {
    header: string;
    description: string;
    role: string[];
    technology: string[];
    image: string;
}

const ProjectCard: FC<Props> = (props: Props) => {
    return (
        <div className="group flex md:flex-row flex-col card card-side bg-base-100 shadow-xl transition ease-in-out delay-150 bg-gradient-to-r from-[#1d262b] via-[#2a3338] to-[#41494e] hover:scale-105 hover:bg-[#0e161b] duration-300 sm:w-[80%] ">
            <div className='basis-1/4 px-4 pt-0'>
                <figure className='min-w-[30%]'><Image src={props.image} alt="Movie" width={400} height={400} className='bg-cover' /></figure>
            </div>
            <div className="basis-3/4 card-body flex flex-col px-4 pb-4 pt-0 sm:p-8">
                <h2 className="group card-title text-xl text-orange-400 duration-300">{props.header}</h2>
                <p className='text-start text-sm'>{props.description}</p>
                <div className='flex  flex-col sm:flex-row justify-start align-top gap-2'>
                    {props.role.map((role, index) => (
                        <div className="badge badge-primary" key={index}>{role}</div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row card-actions justify-end flex-wrap">
                    {props.technology.map((tech, index) => (
                        <div className="badge badge-primary badge-outline py-3 align-middle" key={index}> <p className='text-l' >{tech}</p> </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard