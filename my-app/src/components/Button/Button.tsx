import React,{PropsWithChildren, useContext} from 'react'
import { View ,Text} from 'react-native'
import { ContainerButton,LabelButton } from './Button.styles'
interface ButtonProps {
valueButton:string;
}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    valueButton,
   ...props
}) => {
    return(
   <ContainerButton>
       <LabelButton>{valueButton}</LabelButton>
   </ContainerButton>
    )
}