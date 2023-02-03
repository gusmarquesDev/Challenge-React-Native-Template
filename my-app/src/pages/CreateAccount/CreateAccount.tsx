import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FullHeightScrollView, InputWraper } from '.././Login/Login.styles'
import { SafeAreaKeyboardContainer, SafeAreaContainer } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { HeaderLoginFunnel } from '../../theme/globalStyles'
import { MyCheckbox } from '../../components/CheckBox/MyCheckBox'
import theme from '../../theme/theme'


export type CreateAccount = {
navigation
}


const CreateAccount: React.FC<CreateAccount> = ({ navigation }) => {
   const [isCheck, setChecked] = useState(false)

   const HandleCheck = () => {
    
   }

   const handleNavigatio = () => {

   }

   return (
      <>
         <SafeAreaKeyboardContainer>
            <SafeAreaContainer>
               <FullHeightScrollView>
                  <Content>
                  <HeaderLoginFunnel>
                    Create Account
                 </HeaderLoginFunnel>
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
                     <MyCheckbox 
                     label='I am over 18 years of age and I have read and agree to the Terms of Service and Privacy policy.' 
                     isChecked={isCheck} 
                     onPress={HandleCheck}/>
                  </Content>
                  <Content>
                      <Button 
                      bg={theme.background.bgPrimary} 
                      color={theme.color.colorSecondary}  
                      border={theme.border.borderSecondary} 
                      valueButton='Criar Conta'
                      onpress={() => navigation.navigate('Home')}
                      />
                  </Content>
               </FullHeightScrollView>
               
            </SafeAreaContainer>
            
         </SafeAreaKeyboardContainer>

        
      </>
   )
}

export default CreateAccount