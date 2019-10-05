import React from 'react'
import Button from './button'
import styled from 'styled-components'
import combo from '../components/images/jtailsComboMuted.webm'



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

        const ComboVid =styled.video`
        width: 100%;
        height: auto;
        filter: grayscale(100%) blur(1px) contrast(200%) brightness(120%) invert(100%);
        `

        return(
            <div className="navWide">
                <div className="wideDiv">
                    <ComboVidContainer>
                        <ComboOverlay></ComboOverlay>
                        <ComboVid src={combo} autoPlay loop></ComboVid>
                    </ComboVidContainer>
                    <Button href="#">Link 1</Button>
                    <Button href="#">Link 2</Button>
                    <Button href="#">Link 3</Button>
                </div>
            </div>
        )
    }
  }

  export default Test;