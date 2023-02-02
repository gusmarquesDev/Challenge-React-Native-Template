import React from 'react'
import { Image, View } from 'react-native'
import {WrapperInfo, WrapperColumn ,LightTextResume, TextResume} from './TableInfo.styles'

export interface PropsTableInfo {

}


const data = [{

}]
const TableInfo: React.FC<PropsTableInfo> = ({

}) => {
    return (
        <>

            <WrapperInfo>
                <WrapperColumn>
                    <LightTextResume>AUM</LightTextResume>
                    <TextResume>$430.88m</TextResume>
                </WrapperColumn>
                <WrapperColumn>
                    <LightTextResume>TER</LightTextResume>
                    <TextResume>0.15%</TextResume>
                </WrapperColumn>
               
            </WrapperInfo>


            <WrapperInfo>
                <WrapperColumn>
                    <LightTextResume>Vintage</LightTextResume>
                    <TextResume>2019 - 2022</TextResume>
                </WrapperColumn>
                <WrapperColumn>
                    <LightTextResume>Issue Date</LightTextResume>
                    <TextResume>18/04/2022</TextResume>
                </WrapperColumn>
            </WrapperInfo>
            <WrapperInfo>
                <WrapperColumn>
                    <LightTextResume>Price at Close</LightTextResume>
                    <TextResume>$17.68</TextResume>
                </WrapperColumn>
                <WrapperColumn>
                    <LightTextResume>Price at Open</LightTextResume>
                    <TextResume>$17.74</TextResume>
                </WrapperColumn>
            </WrapperInfo>
        </>
    )
}

export default TableInfo;