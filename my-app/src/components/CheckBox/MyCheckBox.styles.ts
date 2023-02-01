import { CheckBoxProps } from './MyCheckBox'
import styled from 'styled-components/native'


export const ContentBox = styled.View`
    flex-direction:row;
    aling-items:center;
    padding:20px;
`
export const Box = styled.TouchableOpacity<CheckBoxProps>`
    width:15px;
    height:15px;
    border:1px #000;
    border-radius:5px;
    
`


export const LabelBox = styled.Text`
    font-size:12px;
    margin-left:5px
`
