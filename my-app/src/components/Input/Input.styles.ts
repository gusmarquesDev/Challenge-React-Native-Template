import {Ref} from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

interface LabelProps{ 

} 
export const InputView = styled.View`
flex-direction: row;
height: 56px;
padding: 16px;
padding-right: 12px;
`

export const InputLabel = styled.Text`
    align-self: center;
    background-color: white;
    color: '#000';
    font-family: regular;
    font-size: 10px;
    left: 12;
    position: absolute;
`

export const InputStyled = styled(TextInput)`
    color: '#000';
    flex: 10;
    font-family: regular;
    font-size: 12px;
    padding-vertical: 0;
`