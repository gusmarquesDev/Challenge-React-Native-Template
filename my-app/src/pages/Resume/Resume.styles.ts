import styled from "styled-components/native"

import { ScrollView } from 'react-native'


export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow: 1
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

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
text-align: center;
color: #000000;
margin-bottom: 10px;
`

export const TextPercent = styled.Text`

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
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
font-style: normal;
font-weight: 600;
font-size: 17px;
color: #000000;
margin-top:15px;
margin-bottom: 20px;
`
export const TitleResumePortFolio = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #000000;
margin-top:15px;
margin-bottom: 20px;
`


export const TextResume = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const InlineView = styled.View`
flex-direction: row;
align-items: center;
`

export const ColumnButtons = styled.View`
flex-direction: column;
width: 50%;
`
export const InlineViewBetween = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const LightText = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #A0A0A0;
`

export const LightTextCenter = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #A0A0A0;
text-align: center;
`
export const CardInfo = styled.View`
flex-direction: row;
padding: 10px;
align-self: center;
margin-top: 20px;
margin-bottom: 20px;
width: 335px;
height: 115px;
background: #F4F4F4;
`


export const TitleHeader = styled.Text`
 font-size: 20px;
 font-weight: bold;
 text-align: center;

`

