import React, { useState } from 'react'
import sun from '../../assets/images/icon-sun.svg'
import moon from '../../assets/images/icon-moon.svg'
import darkbackgrounddesktop from '../../assets/images/bg-desktop-dark.jpg'
import darkbackgroundmobile from '../../assets/images/bg-mobile-dark.jpg'
import lightbackgrounddesktop from '../../assets/images/bg-desktop-light.jpg'
import lightbackgroundmobile from '../../assets/images/bg-mobile-light.jpg'
import styled from 'styled-components'
import './Header.css'

const StyledHeader = styled.header`
padding: 4.5em 0 1em 0;
height: 250px;
`



const Header = () => {
    const [background, setBackground] = useState({
        lightmode: true,
    })
    const style = {
        backgroundImage: "images"
    }

    const setTheme = () => {

        setBackground(prevBackground => {
            return {
                ...prevBackground,
                lightmode: !background.lightmode,
            }
        })
    }
    background.lightmode ? style.backgroundImage = `url(${darkbackgrounddesktop})` : style.backgroundImage = `url(${lightbackgrounddesktop})`


    return (
        <StyledHeader className="flex justify-between bg-no-repeat" style={style}>
            <h1 className='relative text-3xl font-bold text-white'>TODO</h1>
            <img className='relative' src={background.lightmode ? sun : moon} alt="selected mode" onClick={setTheme} />
        </StyledHeader>
    )
}


export default Header