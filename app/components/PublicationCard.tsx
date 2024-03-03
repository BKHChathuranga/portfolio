import Image from 'next/image';
import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  image: string;
};

const PublicationCard: FC<Props> = (props: Props) => {
  return (
    <a href='https://medium.com/introduction-to-typescript/echarts-for-react-74b1240dffd7' target='_blank' rel="noopener noreferrer" className='group'>
      <div
        className="w-96 h-48 shadow-none group-hover:scale-105 relative rounded-xl duration-300 ease-in-out hover:transition-all"
      >
        <Image
          src={props.image}
          alt="Shoes"
          layout="fill"
          objectFit="fit"
          className="absolute inset-0  hover:transition-all "
        />
        <div className="absolute inset-0 group-hover:bg-black opacity-50">
          {/* Overlay for text visibility */}
        </div>
        <div className="card-body absolute inset-0 z-20">
          <h2 className="card-title text-white text-2xl font-semibold">{props.title}</h2>
          <p className="text-white">{props.description}</p>
        </div>
      </div>
    </a>
  );
};

export default PublicationCard;
