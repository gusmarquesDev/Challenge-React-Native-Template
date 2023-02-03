import React from 'react'
import { Image } from 'react-native'
import { Wrapper, TextTag } from './Tag.styles'

export interface PropsHeader {
   textTag: string

}



const Tag: React.FC<PropsHeader> = ({
   textTag
}) => {
   return (
      <>
         <Wrapper>
            <Image
               style={{ width: 15, height: 11, marginHorizontal: 5 }}
               source={require('../../../assets/IconEarn.png')}
            />
            <TextTag>{textTag}</TextTag>
         </Wrapper>
      </>
   )
}

export default Tag;