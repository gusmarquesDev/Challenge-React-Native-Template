import React, { useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { FullHeightScrollView, InputWraper } from '.././Login/Login.styles'
import { SafeAreaKeyboardContainer, SafeAreaContainer } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { HeaderLoginFunnel } from '../../theme/globalStyles'
import { MyCheckbox } from '../../components/CheckBox/MyCheckBox'
import theme from '../../theme/theme'

import { ErrorMensage } from './CreateAccount.styles'


export type CreateAccount = {
navigation
}


const CreateAccount: React.FC<CreateAccount> = ({ navigation }) => {
   const [isCheck, setChecked] = useState(false)
   const [errorMensage, setError ] = useState('')

   const HandleCheck = () => {
     setChecked(!isCheck)
   }

   const handleNavigatio = () => {

   }

   const handleName = (e) =>{

   }
   const handleLastName = (e) => {

   }

   const handlePassWord = (e) => {

   }

   const createAccount = () => {
      if(isCheck === false){
         setError('Accpte de termns, please!!')
      }else if(isCheck === true){
         navigation.navigate('Login')
      }
   }

   useEffect(()=>{
      setError('')
   },[isCheck === true])



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
                           onChangeText={(e)=> handleName(e)}
                        />
                     </InputWraper>
                     <InputWraper>
                        <Input
                           label='Last Name'
                           onChangeText={(e) => handleLastName(e)}
                        />
                     </InputWraper>
                     <InputWraper>
                        <Input
                           label='Password'
                           onChangeText={(e) => handlePassWord(e)}
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
                      color={theme.color.colorPrimary}  
                      border={theme.border.borderOutline} 
                      valueButton='Criar Conta'
                      onpress={() => createAccount()}
                      />
                      
                  </Content>
                  <ErrorMensage>{String(errorMensage)}</ErrorMensage>
               </FullHeightScrollView>
               
            </SafeAreaContainer>
            
         </SafeAreaKeyboardContainer>

        
      </>
   )
}

export default CreateAccount