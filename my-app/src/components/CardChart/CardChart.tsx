import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { CardContainer, TitleCard, HeaderCard, FooterCard,ContentCard, TextCurrent, TextPercent} from './CardChart.styles'
import { LineChart, Grid } from 'react-native-svg-charts'


interface CardChartProps {
    titleCard:string 
    current:string 
    percent:string
    nameIcon:string
}
export const CardChat: React.FC<CardChartProps> = ({
    titleCard,
    current,
    percent,
    nameIcon
}) => {
   const [icon, setIcon] = useState<string>('')

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  
   useEffect(() => {
    switch(nameIcon) { 
        case 'sun': { 
            setIcon(require('../../assets/Sun.png'))
           break; 
        } 
        case 'wind': { 
            setIcon(require('../../assets/Wind.png'))
           break; 
        } 
        default: { 
           break; 
        } 
     } 
   },[nameIcon])

    return (
        <CardContainer>
            <HeaderCard>
                <Image
                    style={{ width: 16, height: 21 }}
                    source={icon ? icon : require('../../assets/Sun.png')}
                />
                <TitleCard>{titleCard}</TitleCard>
            </HeaderCard>
            <ContentCard>
            <LineChart
                style={{ height: 70 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>
            </ContentCard>
            <FooterCard>
                <TextCurrent>{current}</TextCurrent>
                <Image
                 style={{ width: 9, height: 7, marginLeft:10}}
                 source={require('../../assets/percentArrow.png')}
                 />
                <TextPercent>{percent}</TextPercent>
            </FooterCard>
        </CardContainer>
    )
}