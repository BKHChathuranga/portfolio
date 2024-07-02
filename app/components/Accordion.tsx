import React, { FC } from 'react'


const Accordion = () => {
    return (
        
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start sm:text-end mb-10 text-start">
                        <time className="font-mono italic">Jan 2021 - Jul 2021</time>
                        <div className="text-lg font-black">Information Technology Instructor</div>
                        Worked as a IT instructor at Tekxila cloud school which was initiated by Codegen.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end text-start mb-10">
                        <time className="font-mono italic">Dec 2022 - Jun 2023 </time>
                        <div className="text-lg font-black">Software Engineer Intern</div>
                        Worked in individual intern projects and project ConverseUp as a trainee software engineer.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start sm:text-end mb-10 text-start">
                        <time className="font-mono italic">Apr 2022 - Dec 2023</time>
                        <div className="text-lg font-black">Full-stack Developer</div>
                        Worked in a salon management system as full-stack developer. Gathered experience from the requirements gathering and client handling to delivering a working quality product.
                    </div>
                    <hr />
                </li>
            </ul>

    )
}

export default Accordion