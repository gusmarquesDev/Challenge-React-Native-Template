import React from 'react'
import { View, Text,Image } from 'react-native'
import { SafeAreaContainer } from '../../utils/screen/SafeArea'


export interface PropsHome{
 navigation
}



const Home: React.FC<PropsHome> = ({ navigation }) => {

   return (
      <>
        <SafeAreaContainer>
        <Image
        style={{width:20, height:20}}
        source={require('../../assets/User.png')}
        />
        </SafeAreaContainer> 
      </>
   )
}

export default Home