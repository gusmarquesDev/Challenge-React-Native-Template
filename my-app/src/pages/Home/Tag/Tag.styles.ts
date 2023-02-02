import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow:1
})`
flex:1;
`

export const Wrapper = styled.View`
width: 130px;
height: 30px;
background: #F7EFFF;
border-radius: 4px;
display: flex;
flex-direction: row;
justify-content: space-around;
justify-content: center;
align-items: center;
margin-top: 25px;
`

export const TextTag = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 600;
font-size: 11px;
line-height: 14px;
text-align: center;
letter-spacing: -0.02em;
color: #770FDF;
`





