import React, { useState } from 'react'

import './Header.css'
import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-scroll";


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false)
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />
      {menuOpened === false && mobile === true ?
        (
          <MenuIcon onClick={() => setmenuOpened(true)} style={{ width: '1.5rem', height: '1.5rem', color: 'white', backgroundColor: 'transparent', borderRadius: "5px" }} />
        ) :
        (
          <ul className='header-menu'>
            <li>
              <Link
                onClick={() => setmenuOpened(false)}
                /* change*/
                to='home'
                spy={true}
                smooth={true}
              >Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuOpened(false)}
                to='programs'
                spy={true}
                smooth={true}
              >programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuOpened(false)}
                to='reasons'
                spy={true}
                smooth={true}
              >Why Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuOpened(false)}
                to='plan'
                spy={true}
                smooth={true}
              >Plans
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setmenuOpened(false)}
                to='testimonials'
                spy={true}
                smooth={true}
              >Testimonials
              </Link>
            </li>
            <li className='user-name'>{isAuthenticated &&  <span>welcome <span>{user.name}</span></span> }</li>
            {
              isAuthenticated ?
                (
                  <li>
                    <button className='btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                    </button>
                  </li>
                ) :
                (
                  <li>
                    <button className='btn' onClick={() => loginWithRedirect()}>Log In</button>
                  </li>
                )
            }


          </ul>

        )
      }


    </div>
  )
}

export default Header

