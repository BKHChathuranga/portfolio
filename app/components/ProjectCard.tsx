import React from 'react'

const ProjectCard = () => {
    return (
        <div>
            <div className="group card card-side bg-base-100 shadow-xl transition ease-in-out delay-150 bg-gradient-to-r from-[#1d262b] via-[#2a3338] to-[#41494e] hover:scale-105 hover:bg-[#0e161b] duration-300">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="group card-title text-xl text-orange-500 duration-300">New movie is released!</h2>
                    <p className='text-start text-sm'>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline py-3 align-middle"> <p className='text-l'>Primary</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard