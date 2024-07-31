import Image from 'next/image';
import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  image: string;
  link: string
};

const PublicationCard: FC<Props> = (props: Props) => {
  return (
    <a href={props.link} target='_blank' rel="noopener noreferrer" className='group'>
      <div
        className="flex flex-col bg-gradient-to-r from-[#2a3338] rounded-xl md:w-[calc(100vw/3)] lg:w-[calc(100vw/4)] w-[calc(100vw-50px)] gap-5 p-5 hover:bg-gradient-to-r hover:from-[#41494e] transition ease-linear border-gray-600 border-s-2 hover:scale-[0.95] cursor-pointer"
      >
        <div className='flex w-full justify-center'>
          <img
            src={props.image}
            alt="Shoes"
            className="w-full object-cover h-40 rounded-xl object-center"
          />
        </div>

        <div>
          <h2 className="card-title  text-2xl font-semibold text-left mb-5 text-orange-500">{props.title}</h2>
          <p className="text-[oklch(0.756879 0.123666 76.890484 / 1)] text-left">{props.description}</p>
        </div>
      </div>
    </a>
  );
};

export default PublicationCard;
