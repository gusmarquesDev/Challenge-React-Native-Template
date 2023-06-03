import { Ref } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

interface LabelProps {

}
export const InputView = styled.View`
padding: 16px;
`

export const InputLabel = styled.Text`

  font-style: normal;
  font-weight:400px;
  font-size:11px;
  line-height:14px;
  color:#A0A0A0;
`

export const InputStyled = styled(TextInput)`
width:335px;
height:48px;
padding:10px;
background-color:#F4F4F4;
margin-bottom:15px;
margin-top:5px;
`
export const InputPasswordSection = styled.View`
flex-direction: row;
justify-content: center;

`