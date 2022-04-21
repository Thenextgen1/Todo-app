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


@media(max-width: 540px) {
    padding: 4.5em 1.5em 1em 1.5em;
}
`



const Header = () => {
    const [background, setBackground] = useState({
        lightmode: true,
        darkdesktop: darkbackgrounddesktop,
        darkmobile: darkbackgroundmobile,
        lightdesktop: lightbackgrounddesktop,
        lightmobile: lightbackgroundmobile
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

    function switchmodes() {
        if (background.lightmode) {
            style.backgroundImage = `url(${background.darkdesktop})`
        }
        else {
            style.backgroundImage = `url(${background.lightdesktop})`
        }
    }
    switchmodes();

    // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    //     const newColorScheme = event.matches ? "dark" : "light";
    // });


    function resize() {

        const setbackgroundimg = window.matchMedia('(max-width: 414px)')
        setbackgroundimg.addEventListener('change', () => {
            if (setbackgroundimg.matches) {
                background.lightmode ? style.backgroundImage = `url(${background.darkmobile})` : style.backgroundImage = `url(${background.lightmobile})`
            }
            else {
                background.lightmode ? style.backgroundImage = `url(${background.darkdesktop})` : style.backgroundImage = `url(${background.lightdesktop})`

            }
        })

    }

    resize();

    return (
        <StyledHeader className="flex justify-between bg-no-repeat" style={style}>
            <h1 className='relative text-3xl font-bold text-white'>TODO</h1>
            <img className='relative toogle-mode cursor-pointer' src={background.lightmode ? sun : moon} alt="selected mode" onClick={setTheme} />
        </StyledHeader>
    )
}


export default Header