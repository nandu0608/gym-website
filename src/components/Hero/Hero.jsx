
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: '3' }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (


        <div className='hero' id='home'>
            
            <div className="left-h">
               

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "165px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span><span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div >
                        <span>
                            here we will help you to shape and build your ideal body
                            and live up your life to the fullest
                        </span>
                    </div>
                </div>
                { /*figures div started */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+900</span>
                        <span>memebers joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                { /*button div started */}
                <div className="hero-buttons">
                    <buttons className="btn">get started</buttons>
                    <buttons className="btn">learn more</buttons>
                </div>

            </div>
            <div className="right-h">
                {/* changes made by me*/}
                

                <motion.div className="heart-rate"
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                >
                    <img src={heart} alt="" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>

                </motion.div>
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero-image-back' />
                <motion.div className="calories"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                >
                    <img src={calories} alt="" />
                    <div>
                        <span>calories burned</span>
                        <span>224 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>

    );
}

export default Hero;