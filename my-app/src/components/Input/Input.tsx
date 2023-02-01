import React,{ forwardRef,Ref } from "react";
import { TextInput } from "react-native";
import {InputView, InputLabel, InputStyled} from './Input.styles'

export interface InputProps{
  value:string| undefined
  label:string
}

export const Input = forwardRef(
    (
        {
            value,
            label,
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
            {...props}
           />
           
        </InputView>
        </>
    )
})