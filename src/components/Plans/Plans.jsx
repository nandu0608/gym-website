import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'
import { Link } from 'react-router-dom'
const plans = () => {
    return (
        <div className="plans-container" id='plan'>


            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>WITH US</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> {plan.price} ₹</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whitetick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/payment" style={{ textDecoration: 'none' }}><button className='btn'>Join Now</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default plans
