import React from 'react'
import styled from 'styled-components'
import Combo from '../components/images/jtailsComboMuted.webm'
import NavBar from './navbar'
import Button from './button'



class Test extends React.Component {

    render() {
        const ComboVidContainer = styled.div`
        width: 100%;
        height: auto;
        position: relative;
        top: 0px;
        left: 0px;
        `
        const ComboOverlay = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 2;
        background: black;
        background: linear-gradient(0deg, rgba(25,25,25,1) 80%, rgba(0,0,0,1) 100%);
        opacity: 0.65;
        `
        const ComboVid = styled.video`
        width: 100%;
        height: auto;
        filter: grayscale(100%) blur(1px) contrast(200%) brightness(30%) ;
        `
        const CenterContainer = styled.div`
        position: absolute;
        width: 80%;
        height: 40em;
        margin: auto;
        top: 25%;
        left: 10%;
        z-index: 2;
        ${'' /* border: 3px solid green; */}
        `
        const Title = styled.h1`
        color: white;
        text-shadow: 2px 2px 2px rgba(18,201,50,0.55);
        font-size: 10em;
        margin: 0px 0px 48px;
        `
        const SubTitle = styled.h2`
        text-shadow: 2px 2px 2px rgba(18,201,50,0.55);
        font-size: 2em;

        Color: white;
        `
        const CTAButton = styled(Button)`
        margin-top: 4em;
        border-radius: 40px;
        font-size: 1em;
        height: 4em;
        width: 12em;
        border: 3px solid rgba(201,27,18,1);
        background-color: rgba(201,27,18,1);
        ${'' /* text-shadow: 2px 2px 1px rgba(18,201,50,0.55) ; */}
        color: white;
        `
        return(
            <div>
                <NavBar>
                </NavBar>
                <ComboVidContainer>
                    <ComboOverlay></ComboOverlay>
                    <ComboVid src={Combo} autoPlay loop></ComboVid>
                    <CenterContainer>
                        <Title>JTAILS</Title>
                        {/* <SubTitle>Professional Smash Player - Content Creator - Teacher</SubTitle> */}
                        <SubTitle>PROFESSIONAL SMASH PLAYER - CONTENT CREATOR - TEACHER</SubTitle>
                        <CTAButton>BOOK A LESSON</CTAButton>
                    </CenterContainer>
                </ComboVidContainer>
            </div>
        )
    }
  }

  export default Test;