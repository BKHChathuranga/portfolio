import React, { FC } from 'react'

type Props = {
  head: string;
  description: string,
  technology:string[]
}

const Card:FC<Props> = (props:Props) => {
  return (
    <div className="group card w-96 h-96 transition ease-in-out delay-150 bg-gradient-to-r from-[#1d262b] via-[#2a3338] to-[#41494e] hover:scale-105 hover:bg-[#0e161b] duration-300">
      <div className="card-body">
        <h2 className="group card-title text-2xl group-hover:text-3xl text-orange-500 duration-300">{props.head}</h2>
        <p className='text-start pt-7'>{props.description}</p>
        <div className='divider divider-start'><h3>Technologies</h3></div>
        <div className='flex justify-start flex-wrap gap-2'>
          {props.technology.map((tech,index)=>(
            <div key={index} className="badge badge-primary badge-outline py-1 align-middle"> <p className='text-l'>{tech}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card