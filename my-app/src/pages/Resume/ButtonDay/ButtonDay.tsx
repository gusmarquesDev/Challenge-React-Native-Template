import React from 'react'
import { Image, View } from 'react-native'
import { WrapperButton, TextButton } from './Button.styles'

export interface PropsButtonDay {
   onPress,
   textButton
}


const ButtonDay: React.FC<PropsButtonDay> = ({
   onPress,
   textButton
}) => {
   return (
      <>
         <WrapperButton onPress={onPress}>
            <TextButton>{textButton}</TextButton>
         </WrapperButton>
      </>
   )
}

export default ButtonDay;