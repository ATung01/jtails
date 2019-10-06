import React from 'react'
import Button from './button'
import styled from 'styled-components'
import Logo from './images/jtailsLogo.png'

export default class NavBar extends React.Component {

    render() {
        const NavContainer = styled.div`
        height: 8em;
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
        height: 100%;
        width: 10%;
        text-shadow: 2px 2px 1px rgba(201,27,18,0.55);
        Color: #12C932;
        font-family: 'Noto Serif', serif;
        font-size: 1.2em;
        `
        const TopLogo = styled.img`
        height: 100%;
        `



        return(
            <NavContainer>
                <TopLogo src={Logo}></TopLogo>
                <NavButtons className="goop">kdlsjflds</NavButtons>
                <NavButtons >kdlsjflds</NavButtons>
                <NavButtons >kdlsjflds</NavButtons>
            </NavContainer>
        )
    }
}