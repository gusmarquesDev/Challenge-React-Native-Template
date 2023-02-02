import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow:1
})`
flex:1;
`

export const Wrapper = styled.View`
 display:flex;
 flex-direction:column;
 padding:10px
`
export const  WrapperfirstPart = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;

`


