import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaContainer } from '../../utils/screen/SafeArea'

export interface PropsHeader{
 naviagtion
}



const Header: React.FC<PropsHeader> = ({ navigation }) => {

   return (
      <>
        <SafeAreaContainer>

        </SafeAreaContainer>
         
      </>
   )
}

export default Header