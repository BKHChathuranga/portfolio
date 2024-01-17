import Image from 'next/image';
import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  image: string;
};

const PublicationCard: FC<Props> = (props: Props) => {
  return (
    <a href='https://medium.com/introduction-to-typescript/echarts-for-react-74b1240dffd7' target='_blank' rel="noopener noreferrer">
      <div
        className="w-96 h-48 shadow-none relative group hover:scale-105  rounded-xl transition-all duration-300 ease-in-out"
      >
        <Image
          src={props.image}
          alt="Shoes"
          layout="fill"
          objectFit="cover"
          className="group absolute inset-0 rounded-xl hover:blur-3xl" // Ensure this inside the Image class
        />
        <div className="card-body absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10">
          <h2 className="card-title text-orange-500 text-2xl font-semibold">{props.title}</h2>
          <p className="text-white">{props.description}</p>
        </div>
      </div>
    </a>
  );
};

export default PublicationCard;
