import React from 'react'
import Button from './button'
import styled from 'styled-components'
import Logo from './images/jtailsLogoNoTag.png'

export default class NavBar extends React.Component {

    render() {
        const NavContainer = styled.div`
        height: 7em;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 3;
        `
        const NavButtons = styled(Button)`
        float: right;
        border-radius: 0px;
        border: none;
        width: 10%;
        padding-top: 2em;
        text-shadow: 2px 2px 2px rgba(18,201,50,0.55);
        font-size: 1.2em;
        font-weight: bold;
        `
        const TopLogo = styled.img`
        height: 100%;
        `



        return(
            <NavContainer>
                <TopLogo src={Logo}></TopLogo>
                <NavButtons >LESSONS</NavButtons>
                <NavButtons >ABOUT</NavButtons>
                <NavButtons >HOME</NavButtons>
            </NavContainer>
        )
    }
}