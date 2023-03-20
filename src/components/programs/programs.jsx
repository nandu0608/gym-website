import React from 'react'
import './programs.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const programs = () => {
    return (
        <div className="programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="programs-categories">
                {programsData.map((programs) => (

                    <div className="category">
                        {programs.image}
                        <span>{programs.heading}</span>
                        <span>{programs.details}</span>
                        <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="" /></div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default programs
