import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { CardContainer, TitleCard, HeaderCard, FooterCard, ContentCard, TextCurrent, TextPercent } from './CardChart.styles'
import { LineChart, AreaChart, BarChart, PieChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

interface CardChartProps {
    titleCard: string
    current: string
    percent: string
    nameIcon: string
    onPress
}
export const CardChat: React.FC<CardChartProps> = ({
    titleCard,
    current,
    percent,
    nameIcon,
    onPress
}) => {
    const [icon, setIcon] = useState<string>('')

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
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

    useEffect(() => {
        switch (nameIcon) {
            case 'sun': {
                setIcon(require('../../assets/Sun.png'))
                break;
            }
            case 'wind': {
                setIcon(require('../../assets/Wind.png'))
                break;
            }
            case 'nature': {
                setIcon(require('../../assets/Nature.png'))
                break;
            }
            default: {
                break;
            }
        }
    }, [nameIcon])

    return (
        <>
            <CardContainer onPress={onPress}>
                <HeaderCard>
                    <Image
                        style={{ width: 16, height: 21 }}
                        source={icon ? icon : require('../../assets/Sun.png')}
                    />
                    <TitleCard>{titleCard}</TitleCard>
                </HeaderCard>
                <ContentCard>
                    {nameIcon === 'sun' && (
                        <LineChart
                            style={{ height: 70 }}
                            data={data}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                        </LineChart>
                    )}
                    {nameIcon === 'wind' && (
                        <BarChart style={{ height: 70 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                        </BarChart>

                    )}
                    {nameIcon === 'nature' && (
                        <PieChart style={{ height: 70 }} data={pieData} />

                    )}

                </ContentCard>
                <FooterCard>
                    <TextCurrent>{current}</TextCurrent>
                    <Image
                        style={{ width: 9, height: 7, marginLeft: 10 }}
                        source={require('../../assets/percentArrow.png')}
                    />
                    <TextPercent>{percent}</TextPercent>
                </FooterCard>
            </CardContainer>
        </>
    )
}