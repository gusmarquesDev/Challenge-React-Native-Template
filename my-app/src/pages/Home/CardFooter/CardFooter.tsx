import React from 'react'
import { Image, View } from 'react-native'
import { WrapperCard, TitleCardFooter } from './CardFooter.styles'

export interface PropsCardFooter {
   item: string
}



const CardFooter: React.FC<PropsCardFooter> = ({
   item
}) => {
   return (
      <>
         <WrapperCard>
            <TitleCardFooter>{item}</TitleCardFooter>
         </WrapperCard>
      </>
   )
}

export default CardFooter;