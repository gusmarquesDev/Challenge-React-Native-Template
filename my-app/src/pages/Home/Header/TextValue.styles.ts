import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow: 1
})`
flex:1;
`

export const Wrapper = styled.View`
 display:flex;
 flex-direction:column;
 margin-top: 10px;
`

export const WrapperInline = styled.View`
display:flex;
flex-direction:row;
align-items: center;
`

export const LabelWrapper = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.02em;
color: #000000;
margin-top: 5px;

`

export const TitleWrapper = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
text-align: center;
letter-spacing: -0.02em;
color: #000000;
`
export const TitlePercent = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: #0FDF8F;
`
export const WrapperInnline = styled.View`
display:flex;
flex-direction:row;
justify-content:space-around;
`


