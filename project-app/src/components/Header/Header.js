import React, { useState, useEffect } from 'react'
import sun from '../../assets/images/icon-sun.svg'
import moon from '../../assets/images/icon-moon.svg'
import darkbackgrounddesktop from '../../assets/images/bg-desktop-dark.jpg'
import darkbackgroundmobile from '../../assets/images/bg-mobile-dark.jpg'
import lightbackgrounddesktop from '../../assets/images/bg-desktop-light.jpg'
import lightbackgroundmobile from '../../assets/images/bg-mobile-light.jpg'
import styled from 'styled-components'
import '../../styles/Header.css'
import { setTheme } from '../../utilities/Theme'


const StyledHeader = styled.header`
padding: 4.5em 0 1em 0;
height: 250px;


@media(max-width: 540px) {
    padding: 4.5em 1.5em 1em 1.5em;
}

@media(max-width: 375px) {
    padding: 2em 1.5em;
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

    const settheme = () => {

        setBackground(prevBackground => {
            return {
                ...prevBackground,
                lightmode: !background.lightmode,
            }
        })

        handleOnClick();


    }

    // changing themes and adding the theme class

    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])


    // switching background header image depending on dark or light mode

    function switchmodes() {
        if (background.lightmode) {
            style.backgroundImage = `url(${background.lightdesktop})`
        }
        else {
            style.backgroundImage = `url(${background.darkdesktop})`
        }

    }

    switchmodes();



    // switching background header image from desktop to mobile
    function resize() {

        const setbackgroundimg = window.matchMedia('(max-width: 375px)')
        if (setbackgroundimg.matches) {
            background.lightmode ? style.backgroundImage = `url(${background.darkmobile})` : style.backgroundImage = `url(${background.lightmobile})`
        }
        else {
            background.lightmode ? style.backgroundImage = `url(${background.darkdesktop})` : style.backgroundImage = `url(${background.lightdesktop})`
        }
    }

    resize();


    return (
        <StyledHeader className="flex justify-between bg-no-repeat" style={style}>
            <h1 className='relative text-3xl font-bold text-white'>TODO</h1>

            <img className='relative toogle-mode cursor-pointer' src={background.lightmode ? sun : moon} alt="selected mode" onClick={settheme} />
        </StyledHeader>
    )
}


export default Header