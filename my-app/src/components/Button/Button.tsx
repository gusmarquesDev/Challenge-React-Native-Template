import React,{PropsWithChildren, useContext} from 'react'
import { View ,Text} from 'react-native'
import { ContainerButton,LabelButton } from './Button.styles'
interface ButtonProps {
valueButton:string;
onpress: () => void
}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    valueButton,
    onpress,
   ...props
}) => {
    return(
   <ContainerButton onPress={onpress}>
       <LabelButton>{valueButton}</LabelButton>
   </ContainerButton>
    )
}