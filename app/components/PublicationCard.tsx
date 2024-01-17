import React, { FC } from 'react'

type Props ={
    title:string;
    description: string;
    image:string;
}

const PublicationCard : FC<Props> = ( props: Props) => {
    return (
            <a href='https://medium.com/introduction-to-typescript/echarts-for-react-74b1240dffd7' target='_blank' rel="noopener noreferrer">
                <div className="card w-96 shadow-xl image-full backdrop-blur-3xl">
                    <figure><img src={props.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-slate-100">{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            </a>
    )
}

export default PublicationCard