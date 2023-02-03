import styled from 'styled-components/native'

interface ButtonProps {

}

export const CardContainer = styled.TouchableOpacity`
box-sizing: border-box;
width: 140px;
height: 160px;
background: #FFFFFF;
border: 1px solid #E6E6E6;
border-radius: 4px;
padding: 10px;
`
export const HeaderCard = styled.View`
display: flex;
flex-direction: column;
justify-content: flex-start;

`
export const TitleCard = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.02em;
color: #000000;
margin-top:5px;
`
export const ContentCard = styled.View`
padding: 5px;
`
export const FooterCard = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`
export const TextCurrent = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: #000000;

`

export const TextPercent = styled.Text` 
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: right;
letter-spacing: -0.02em;
color: #0FDF8F;
`
