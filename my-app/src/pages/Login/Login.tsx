import React, {useState }from 'react'
import { View, Text,Linking } from 'react-native'
import { FullHeightScrollView, InputWraper,TextSignUp } from './Login.styles'
import { SafeAreaKeyboardContainer, SafeAreaContainer } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { HeaderLoginFunnel } from '../../theme/globalStyles'
import theme from '../../theme/theme'
import  {TextWithButton}  from '../../components/TextWithButton/TextWithButton'


export interface PropsLogin{
 navigation
}





const Login: React.FC<PropsLogin> = ({ navigation }) => {

   const [email, setEmail] = useState('');
   const [password, setPasswrod] = useState('');
   const [hidePassword, setHidePassword] = useState(true);
   

   const onChangeTextEmail = (e) => {
     setEmail(e)
   }

   const onChangeTextPassword = (e) => {
      setPasswrod(e)
    }


   return (
      <>
         <SafeAreaKeyboardContainer>
            <SafeAreaContainer>
               <FullHeightScrollView>
                  <Content>
                     <HeaderLoginFunnel> Login </HeaderLoginFunnel>
                     <InputWraper>
                        <Input
                           label='E-mail'
                           // value={email}
                           onChangeText={(e) => onChangeTextEmail(e)}
                        />
                     </InputWraper>
                     <InputWraper>
                        <Input
                           onChangeText={(e) => onChangeTextPassword(e)}
                           label='Password'
                           hidePassword={hidePassword}
                        
                        />
                     </InputWraper>
                  </Content>
                  <Content>
                  <Button  
                  bg={theme.background.bgPrimary} 
                  color={theme.color.colorPrimary} 
                  border={theme.border.borderOutline} 
                  valueButton='Login' 
                  onpress={() => navigation.navigate('CreateAccount')}/>
                  <TextWithButton
                   beforeText={`Don't have account?`}
                   textInsideButton={`Sign up here`}
                   onPress={() => navigation.navigate('CreateAccount')}
                  />
                  </Content>
               </FullHeightScrollView>
            </SafeAreaContainer>
         </SafeAreaKeyboardContainer>
         
      </>
   )
}

export default Login