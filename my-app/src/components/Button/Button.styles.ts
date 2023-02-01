import styled from 'styled-components/native'

interface ButtonProps{

}

export const LabelButton = styled.Text`
width: 41px;
height: 26px;
font-family: 'Sitara';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
`

export const ContainerButton = styled.TouchableHighlight <ButtonProps>`
aling-items:center;
flex-direction: row;
margin:10px;
justify-content: center;
align-items: center;
padding: 16px 32px;s
width: 335px;
height: 58px;
background: #770FDF;
border-radius: 4px;
`