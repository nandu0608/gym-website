import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const tlength = testimonialsData.length;
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const transition = { type: 'spring', duration: '3' }
    return (
        <div className="Testimonials" id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>what they </span>
                <span>say about us</span>
                <div className='review'>
                    {testimonialsData[selected].review}
                </div>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    -{testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" />

            </div>
            <div className="arrows">
                <ChevronLeftIcon className='arrow-l' style={{ fontSize: 50 }}
                    onClick={() => {
                        selected === 0 ? setSelected(tlength - 1) :
                            setSelected((prev) => prev - 1)
                    }}
                />
                <ChevronRightIcon className='arrow-r' style={{ fontSize: 50 }}
                    onClick={() => {
                        selected === tlength - 1 ? setSelected(0) :
                            setSelected((prev) => prev + 1)
                    }}
                />
            </div>
        </div>

    )
}

export default Testimonials