import React,{PropsWithChildren, useContext} from 'react'
import { View ,Text} from 'react-native'
import { ContainerButton,LabelButton } from './Button.styles'
interface ButtonProps {

}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
...props
}) => {
    return(
   <ContainerButton>
    <LabelButton>Login</LabelButton>
   </ContainerButton>
    )
}