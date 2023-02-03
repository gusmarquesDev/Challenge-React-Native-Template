import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow:1
})`
flex:1;
`

export const InputWraper = styled.View`
 margin-botton:5px;
`

export const TextSignUp = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.02em;
color: #A0A0A0;
text-align: center;
`

