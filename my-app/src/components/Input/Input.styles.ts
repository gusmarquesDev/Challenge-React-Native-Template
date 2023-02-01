import {Ref} from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

interface LabelProps{ 

} 
export const InputView = styled.View`
padding: 16px;
`

export const InputLabel = styled.Text`
  font-family:'Sintony'
  font-style:normal;
  font-weight:400;
  font-size:11px;
  line-height:14px;
  letter-spacing: -0.02em;
  color:#A0A0A0;

`

export const InputStyled = styled(TextInput)`
width:335px;
heigth:148px;
padding:10px;
background-color:#F4F4F4;
border-radius:4px;
margin-bottom:15px;
margin-top:5px;
`