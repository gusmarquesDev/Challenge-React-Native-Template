import React,{PropsWithChildren, useContext} from 'react'
import { View ,Text} from 'react-native'
import { ContainerButton,LabelButton } from './Button.styles'
interface ButtonProps {
valueButton:string;
onpress?: () => void
bg:string
color:string
border:string
}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    valueButton,
    bg,
    color,
    border,
    onpress,
   ...props
}) => {
    return(
   <ContainerButton bg={bg} color={color} border={border} onPress={onpress}>
       <LabelButton color={color}>{valueButton}</LabelButton>
   </ContainerButton>
    )
}