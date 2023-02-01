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

