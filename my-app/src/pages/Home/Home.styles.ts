import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow: 1
})`
flex:1;
`

export const WrapperHeader = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`

export const Avatar = styled.View`
background-color: #F4F4F4;
width: 33px;
height: 33px;
justify-content: center;
align-items: center;
border-radius: 50%;
`
export const TextWrapper = styled.Text`
font-size: 14px;
font-style: normal;
line-height: 18px;
letter-spacing: -0.02em;
font-weight: bold;
color: #000;
`
export const WrapperFound = styled.View`
 margin-top:20px;

`
export const TitleContent = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: -0.02em;
margin-bottom: 10px;

color: #000000;
`

