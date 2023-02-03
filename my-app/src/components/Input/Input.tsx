import React,{ forwardRef,Ref,useState } from "react";
import { TextInput } from "react-native";
import {InputView, InputLabel, InputStyled} from './Input.styles'
import {Icon} from 'react-native-elements'

export interface InputProps{
  value?:string| undefined
  label:string
  onChangeText
  hidePassword?:boolean
}

export const Input = forwardRef(
    (
        {
            value,
            label,
            onChangeText,
            hidePassword,
            ...props

}:InputProps ,
 ref?: Ref<TextInput>,
    )=> {
    return(
        <>
        <InputView>
        <InputLabel>{label}</InputLabel>
           <InputStyled
            value={value}
            ref={ref}
            onChangeText={onChangeText}
            secureTextEntry={hidePassword}
            {...props}
           />
        </InputView>
        </>
    )
})