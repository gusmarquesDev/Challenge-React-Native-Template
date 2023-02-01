import React from 'react'
import { View,Text } from 'react-native'
import {FullHeightScrollView, InputWraper} from './Login.styles'
import { SafeAreaKeyboardContainer, SafeAreaContainer} from '../../utils/screen/SafeArea'
import {Content} from '../../utils/screen/Page'
import {Input} from '../../components/Input/Input'
export type PropsLogin = {

}


const Login: React.FC<PropsLogin> = ({ }) => {


   return (
      <>
      <SafeAreaKeyboardContainer>
          <SafeAreaContainer>
             <FullHeightScrollView>
                <Content>
                   <InputWraper>
                   
                   <Input
                   label='Email'
                   value={'oii'}
                   />
                   </InputWraper>
                </Content>
             </FullHeightScrollView>
          </SafeAreaContainer>
      </SafeAreaKeyboardContainer>
      </>
   )
}

export default Login