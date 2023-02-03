import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaContainer, } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Inline, WrapperResume, TextChart, TitleHeader, LightText, TextPercent, CardInfo, InlineViewBetween, ColumnButtons, TitleResumePortFolio, ContentResume, TitleResume, FullHeightScrollView, InlineView } from './Resume.styles'
import { useRoute, useNavigation } from "@react-navigation/native";
import { LineChart, BarChart, PieChart } from 'react-native-svg-charts'
import ButtonDay from './ButtonDay/ButtonDay'
import TableInfo from './TableInfo/TableInfo'
import NewsResume from './NewResume/NewsResume'
import Tabs from './Tabs/Tabs'
import { Button } from '../../components/Button/Button'
import theme from '../../theme/theme'
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
export interface PropsResume {
    navigation
}

type RouteParams = {
    nameIcon: string
    namePage: string
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

const ArrayBg = [
    {
        image: require('../../assets/With1.png'),
        logo: require('../../assets/logo1.png'),
        text: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules. Read more'
    },
    {
        image: require('../../assets/With2.png'),
        logo: require('../../assets/logo2.png'),
        text: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules. Read more'
    }
]

const ArrayTabs = [
    {
        name: 'HighLighted',
        active: true
    },
    {
        name: 'Value',
        active: false
    },
    {
        name: 'Vintage',
        active: false
    },
    {
        name: 'Registry',
        active: false
    },
]
const Resume: React.FC<PropsResume> = ({ navigation }) => {
    const route = useRoute();

    const { nameIcon, namePage } =
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
                <HeaderRNE
                    backgroundColor={'#fff'}
                    style={{ marginBottom: '20px' }}
                    containerStyle={{ marginTop: -40 }}
                    leftComponent={
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image
                                style={{ width: 18, height: 16 }}
                                source={require('../../assets/arrow.png')}

                            />
                        </TouchableOpacity>
                    }
                    centerComponent={<TitleHeader>{namePage}</TitleHeader>

                    }
                />
                <FullHeightScrollView>
                    <ContentResume>
                        <WrapperResume>
                            <TextChart>$18.23</TextChart>
                            <TextChart>2022</TextChart>
                        </WrapperResume>
                        <WrapperResume>
                            <Inline>
                                <Image
                                    style={{ width: 7, height: 7 }}
                                    source={require('../../assets/percentArrow.png')}
                                />
                                <TextPercent>3.51% (1.21)</TextPercent>
                            </Inline>
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
                                    marginHorizontal: 30, marginVertical: 30
                                }}
                                data={arrayDays}
                                renderItem={({ item }) =>
                                    <ButtonDay onPress={() => handleDay} textButton={item.label} />
                                }
                            />
                        </View>
                        <TitleResume>Info & Stats</TitleResume>
                        <TableInfo />
                        <TitleResume>Fund Breakdown</TitleResume>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={ArrayTabs}
                            renderItem={({ item }) =>
                                <Tabs label={item.name} bg={item.active} />
                            }
                        />

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={ArrayBg}
                            renderItem={({ item }) =>
                                <NewsResume imageBg={item.image} textCard={item.text} imageLogo={item.logo} />
                            }
                        />
                        <InlineView>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('../../assets/PortIcon.png')}
                            />
                            <TitleResume>Your PortFolio</TitleResume>
                        </InlineView>
                        <InlineViewBetween>
                            <TitleResumePortFolio>18 credits</TitleResumePortFolio>
                            <TitleResumePortFolio>$328.14</TitleResumePortFolio>
                        </InlineViewBetween>
                        <InlineViewBetween>
                            <InlineView>
                                <Image
                                    style={{ width: 7, height: 7, marginHorizontal: 5 }}
                                    source={require('../../assets/percentArrow.png')}
                                />
                                <TextPercent>8.41%</TextPercent>
                            </InlineView>
                            <LightText>Last purchase 28d ago</LightText>
                        </InlineViewBetween>
                        <InlineViewBetween>
                            <ColumnButtons>
                                <Button bg={theme.background.bgOutLine} color={theme.color.colorOutline} border={theme.border.borderOutline} valueButton='Sell' />
                            </ColumnButtons>
                            <ColumnButtons>
                                <Button bg={theme.background.bgSecondary} color={theme.color.colorPrimary} border={theme.border.borderSecondary} valueButton='Retired Credits' />
                            </ColumnButtons>

                        </InlineViewBetween>
                        <InlineViewBetween>
                            <LightText>You’ve previously retired 28 credits of this asset</LightText>
                        </InlineViewBetween>

                        <CardInfo>
                            <LightText>
                                Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.
                                The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
                            </LightText>
                        </CardInfo>
                        <Button bg={theme.background.bgPrimary} color={theme.color.colorPrimary} border={theme.border.borderOutline} valueButton='buy' />
                    </ContentResume>
                </FullHeightScrollView>
            </SafeAreaContainer>
        </>
    )
}


export default Resume;