import React from 'react'
import { Image,View} from 'react-native'
import { Wrapper,LabelWrapper,TitleWrapper,TitlePercent,WrapperInline } from './TextValue.styles'

export interface PropsHeader{
 labelWrapper:string 
 titleWrapper:string 
 titlePercent:string 
}



const TextValue: React.FC<PropsHeader> = ({
   labelWrapper,
   titlePercent,
   titleWrapper
 }) => {      
   return (
      <>
       <Wrapper>
          <LabelWrapper>{labelWrapper}</LabelWrapper>
         <WrapperInline>
            <TitleWrapper>{titleWrapper}</TitleWrapper>
            <WrapperInline>
            <Image
               style={{ width: 9, height: 7, marginHorizontal:2 }}
               source={require('../../../assets/percentArrow.png')}
               />
               <TitlePercent> {titlePercent}</TitlePercent>
            </WrapperInline>
         </WrapperInline>
       </Wrapper>
      </>
   )
}

export default TextValue;