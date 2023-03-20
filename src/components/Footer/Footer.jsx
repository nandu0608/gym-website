import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className='footer-nav'>
                    <h1>EXPLORE </h1>
                    <Link to='home' spy={true} smooth={true}><h3>home</h3></Link>
                    <Link to='programs' spy={true} smooth={true}><h3>Programs</h3></Link>
                    <Link to='reasons' spy={true} smooth={true}><h3>reasons</h3></Link>
                    <Link to='plan' spy={true} smooth={true}><h3>plans</h3></Link>
                    <Link to='testimonials' spy={true} smooth={true}><h3>testimonials</h3></Link>
                </div>
                <div className="connect">
                    <h1>CONNECT WITH US:</h1>
                    <div className='social-icon'>
                        <div ><LinkedInIcon className='linkedin' style={{ fontSize: 32 }} /><span> LinkedIn</span></div>
                        <div><InstagramIcon className='insta' style={{ fontSize: 32 }} /><span> Instagram</span></div>
                        <div><FacebookIcon className='fb' style={{ fontSize: 32 }} /><span> Facebook</span></div>
                        <div><YouTubeIcon className='yt' style={{ fontSize: 32 }} /><span> Youtube</span></div>
                    </div>
                </div>
                <div className="contact-us">
                    <img src={logo} alt="" />
                    <div><LocationOnIcon style={{ fontSize: 32 }} />  A-420, Royal Empire Tower, Bandra West, BKC, Mumbai-400067, Maharshtra, India.</div>
                    <div><EmailIcon style={{ fontSize: 32 }} />  n.k.mishra890@gmail.com</div>
                    <div><CallIcon style={{ fontSize: 32 }} />  +91-9876543210</div>

                </div>
            </div>
            <div className='copyright'>
                CREATED BY <span> NANDKISHOR MISHRA</span> &copy;ALL RIGHTS RESERVED 
            </div>
        </div>
    )
}

export default Footer