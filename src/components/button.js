import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.background ? props.background : "none"};
    color: ${props => props.color ? props.color : "white"};
    font-size: ${props => props.fontSize ? props.fontSize : "2rem"};
    border: ${props => props.border ? props.border : "3px solid #12C932"};
    border-radius: 3px;
`

// #12C932
export default Button
