import React, { useEffect, useState } from 'react'
import './gototop.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Gototop = () => {
  const [visible, setvisible] = useState(false)
  const handleclick = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" })
  }
  const handlescroll = () => {
    const winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winscroll > 250) { setvisible(true) }
    else { setvisible(false) }
  }
  useEffect(() => {
    window.addEventListener("scroll", handlescroll)

    return () => {
      window.removeEventListener("scroll", handlescroll)
    }
  }, [])

  return (
    <div>
     {visible && 
     ( <div onClick={handleclick}>
        <KeyboardDoubleArrowUpIcon style={{ fontSize: 50 }} className="gototop" />
      </div>
     )
    }
    </div>
  )
}

export default Gototop
