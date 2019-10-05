import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.background ? props.background : "#282c34"};
    color: ${props => props.color ? props.background : "#C4D238"};
    font-size: ${props => props.fontSize ? props.fontSize : "2em"};
    border: 3px solid #C4D238;
    border-radius: 3px;
`
export default Button