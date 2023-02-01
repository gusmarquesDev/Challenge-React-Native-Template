import React from 'react'
import { View, Text } from 'react-native'
import { FullHeightScrollView, InputWraper } from '.././Login/Login.styles'
import { SafeAreaKeyboardContainer, SafeAreaContainer } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

export type CreateAccount = {

}


const CreateAccount: React.FC<CreateAccount> = ({ }) => {
   
   return (
      <>
         <SafeAreaKeyboardContainer>
            <SafeAreaContainer>
               <FullHeightScrollView>
                  <Content>
                     <InputWraper>
                        <Input
                           label='First Name'
                           value={'value'}
                        />
                     </InputWraper>
                     <InputWraper>
                        <Input
                           label='Last Name'
                           value={'value'}
                        />
                     </InputWraper>
                     <InputWraper>
                        <Input
                           label='Password'
                           value={'value'}
                        />
                     </InputWraper>
                  </Content>
                  <Content>
                  <Button/>
                  </Content>
               </FullHeightScrollView>
            </SafeAreaContainer>
         </SafeAreaKeyboardContainer>
      </>
   )
}

export default CreateAccount