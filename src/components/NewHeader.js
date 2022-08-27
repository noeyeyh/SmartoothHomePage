import React, {useState, useEffect} from 'react'
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import classes from './NewHeader.module.scss'
import {Link} from 'react-router-dom'

const NewHeader = () => {
    const [ menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: undefined,
    })

    useEffect(() => {
      const handleResize= () => {
          setSize({
              width: window.innerWidth,
              height:window.innerHeight
          })
      }
      window.addEventListener("resize",handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
      if (size.width >767 && menuOpen) {
          setMenuOpen(false)
      }
    }, [size.width, menuOpen]);
    
    const menuToggleHandler = () => {
        setMenuOpen((p)=>!p)
    }
  return (
      <header className={classes.header}>
          <div className={classes.header__content}>
            <Link to="/" className={classes.header__content__logo}>
                <img src="img/logo_origin.png" alt="logo_big" />
            </Link>
            <nav className={`${classes.header__content__nav} ${
                menuOpen && size.width <768 ? classes.isMenu : ""
            }`}
            >
                <ul>
                    <li>
                        <Link to="/" onClick={menuToggleHandler} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" onClick={menuToggleHandler} >
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/about_us" onClick={menuToggleHandler} >
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.header__content__toggle}>
                {!menuOpen ? (
                    <BiMenuAltRight onClick= {menuToggleHandler} />
                ) : (
                    <AiOutlineClose style={{color:"#fff"}} onClick= {menuToggleHandler} />
                )}
            </div>
          </div>
      </header>
  )
}

export default NewHeader