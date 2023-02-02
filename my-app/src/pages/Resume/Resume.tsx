import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { SafeAreaContainer, } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Inline, WrapperResume, TextChart, TextPercent,ContentResume, TitleResume } from './Resume.styles'
import { useRoute, useNavigation } from "@react-navigation/native";
import { LineChart, BarChart, PieChart } from 'react-native-svg-charts'
import ButtonDay from './ButtonDay/ButtonDay'
import TableInfo from './TableInfo/TableInfo'
export interface PropsResume {
    navigation
}

type RouteParams = {
    nameIcon: string
};

const arrayDays = [
    {
        label: '1h'
    },
    {
        label: '1d'
    },
    {
        label: '1m'
    },
    {
        label: '1y'
    },
    {
        label: 'All'
    }
]

const Resume: React.FC<PropsResume> = ({ navigation }) => {
    const route = useRoute();

    const { nameIcon } =
        route.params as RouteParams;


    const data = [0, 40, 90, 5, 44, -24, 185, 21, 35, 53, -53, 24, 50, -20, -80]
    const fill = 'rgb(134, 65, 244)'

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    const handleDay = () => {

    }


    return (
        <>
            <SafeAreaContainer>
                <ContentResume>
                    <WrapperResume>
                        <View>
                            <TextChart>$18.23</TextChart>
                            <Inline>
                                <Image
                                    style={{ width: 7, height: 7 }}
                                    source={require('../../assets/percentArrow.png')}
                                />
                                <TextPercent>3.51% (1.21)</TextPercent>
                            </Inline>
                        </View>
                        <TextChart>2022</TextChart>
                    </WrapperResume>

                    {nameIcon === 'sun' && (    
                        <LineChart
                            style={{ height: 170, with: 100 }}
                            data={data}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                        </LineChart>
                        
                    )}
                    {nameIcon === 'wind' && (
                        <BarChart style={{ height: 170, with: 100 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                        </BarChart>

                    )}
                    {nameIcon === 'nature' && (
                        <PieChart style={{ height: 170 }} data={pieData} />

                    )}
                    <View>
                      <FlatList
                     showsHorizontalScrollIndicator={false}
                     horizontal
                     style={{
                        marginHorizontal:30, marginVertical:30}}
                     data={arrayDays}
                     renderItem={({ item }) =>
                       <ButtonDay onPress={() => handleDay} textButton={item.label} />
                     }
                  />
                  </View>
                  <TitleResume>Info & Stats</TitleResume>
                   <TableInfo/>
                </ContentResume>
            </SafeAreaContainer>
        </>
    )
}


export default Resume;