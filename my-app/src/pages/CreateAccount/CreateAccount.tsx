import React, { useState, useEffect} from 'react'
import { FullHeightScrollView, InputWraper } from '.././Login/Login.styles'
import { SafeAreaKeyboardContainer, SafeAreaContainer } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { HeaderLoginFunnel } from '../../theme/globalStyles'
import { MyCheckbox } from '../../components/CheckBox/MyCheckBox'
import theme from '../../theme/theme'
import { useDispatch } from 'react-redux'
import { ErrorMensage } from './CreateAccount.styles'
import { addDataUser} from '../../redux/sliceLanguages'
import { ModalSystem } from '../../components/Modal/ ModalSystem'

export type CreateAccount = {
navigation
}


const CreateAccount: React.FC<CreateAccount> = ({ navigation }) => {
   const [isCheck, setChecked] = useState(false)
   const [errorMensage, setError ] = useState('')
   const [email, setEmail] = useState('')
   const [ismodal, setIsModal] = useState<boolean>(false)

   const HandleCheck = () => {
     setChecked(!isCheck)
   }

   const handleNavigatio = () => {

   }

   const handleName = (e) =>{

   }
   const handleLastName = (e) => {

   }

   const handleEmail = (e) => {

   }

   const dispacth = useDispatch()

   const createAccount = () => {
      if(isCheck === false){
         setError('Accept the terms please!')
      }else if(isCheck === true){
         dispacth(addDataUser(email))
        setIsModal(true)
         setTimeout(() => {
            setIsModal(false)
            navigation.navigate('Login')
         }, 2000);
         
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
                           label='E-mail'
                           value={email}
                           onChangeText={(e) => setEmail(e)}
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
                  <ModalSystem
                   visibleModal={ismodal}
                 text={'you have a account!'}
            />
               </FullHeightScrollView>
           
            </SafeAreaContainer>
           
         </SafeAreaKeyboardContainer>
        
        
      </>
   )
}

export default CreateAccount