import styled from "styled-components/native"

import { ScrollView } from 'react-native'


export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow:1
})`
flex:1;
`

export const ContentResume = styled.View`
padding:10px;
`

export const WrapperResume = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`

export const WrapperChat = styled.View`
justify-content: center;
`
export const WrapperInline = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Inline = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`
export const TextChart = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
text-align: center;
letter-spacing: -0.02em;
color: #000000;
margin-bottom: 10px;
`

export const TextPercent = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: #0FDF8F;
`
export const WrapperChart = styled.View`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: auto;
`

export const TitleResume = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 21px;
letter-spacing: -0.02em;
color: #000000;
margin-top:15px;
margin-bottom: 20px;
`
export const TextResume = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #000000;
`


