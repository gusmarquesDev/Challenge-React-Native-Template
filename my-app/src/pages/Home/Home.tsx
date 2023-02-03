import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { SafeAreaContainer, } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Avatar, WrapperHeader, TextWrapper, TitleContent, WrapperFound } from './Home.styles'
import TextValue from './Header/TextValue'
import Tag from './Tag/Tag'
import { Line } from '../../theme/globalStyles'
import { CardChat } from '../../components/CardChart/CardChart'
import CardHome from './CardHome/CardHome'
import CardFooter from './CardFooter/CardFooter'
import { useNavigation } from "@react-navigation/native";
export interface PropsHome {
   navigation
}


const DATA = [
   {
      titleCard: 'Sun',
      current: '$9000',
      percent: '34%',
      nameIcon: 'sun'
   },
   {
      titleCard: 'Wind',
      current: '$9000',
      percent: '34%',
      nameIcon: 'wind'
   },
   {
      titleCard: 'Nature',
      current: '$9000',
      percent: '34%',
      nameIcon: 'nature'
   },
];

const TextCardFooter = [
   {
      text: 'Why should you invest here?'
   },
   {
      text: 'Why should you invest here?'
   }
]


const Home: React.FC<PropsHome> = ({ navigation }) => {


   const handlePage = (nameIcon, namePage) => {
      navigation.navigate('Resume', {
         nameIcon,
         namePage

      });
   };

   return (
      <>
         <SafeAreaContainer>
            <Content>
               <WrapperHeader>
                  <Avatar>
                     <Image
                        style={{ width: 16, height: 21 }}
                        source={require('../../assets/User.png')}
                     />
                  </Avatar>
                  <TextWrapper>Account: $1,457.23</TextWrapper>
                  <View>
                     <Image
                        style={{ width: 16, height: 21 }}
                        source={require('../../assets/Bell.png')}
                     />
                  </View>
               </WrapperHeader>
               <WrapperHeader>
                  <TextValue
                     titlePercent={'32%'}
                     labelWrapper={'Portfolio'}
                     titleWrapper={'$1,245.23'} />
                  <Tag textTag='Earn Rewards' />
               </WrapperHeader>
               <Line />
               <WrapperFound>
                  <TitleContent>Found</TitleContent>
                  <FlatList
                     showsHorizontalScrollIndicator={false}
                     horizontal
                     data={DATA}
                     renderItem={({ item }) =>
                        <View style={{ marginLeft: 10 }}>
                           <CardChat
                              titleCard={item.titleCard}
                              current={item.current}
                              percent={item.percent}
                              nameIcon={item.nameIcon}
                              onPress={() => handlePage(item.nameIcon, item.titleCard)}
                           />
                        </View>
                     }
                  />
               </WrapperFound>
               <CardHome />
               <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={TextCardFooter}
                  renderItem={({ item }) =>
                     <CardFooter item={item.text} />
                  }
               />
            </Content>
         </SafeAreaContainer>
      </>
   )


}

export default Home