import React from 'react'

const PublicationCard = () => {
    return (
        <section id='publications'>
            <a href='https://medium.com/introduction-to-typescript/echarts-for-react-74b1240dffd7' target='_blank' rel="noopener noreferrer">
                <div className="card w-96 shadow-xl image-full backdrop-blur-3xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-slate-100">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </a>
        </section>
    )
}

export default PublicationCard