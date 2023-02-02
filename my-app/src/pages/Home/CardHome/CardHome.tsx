import React from 'react'
import { Image,View} from 'react-native'
import { WrapperCard, TitleCard, TextCard, Colum} from './CardHome.styles'

export interface PropsHeader{

}



const CardHome: React.FC = ({
  
 }) => {      
   return (
      <>
      <WrapperCard>
          <Colum>
             <TitleCard>Learn more about carbon credits</TitleCard>
             <TextCard>Check out our top tips!</TextCard>
          </Colum>
          <Image
             style={{ width: 70, height: 70 }}
              source={require('../../../assets/CardImage.png')}
             />
      </WrapperCard>
      </>
   )
}

export default CardHome;