import React, { useState, useEffect } from 'react'
import { Image, ImageBackground } from 'react-native'
import { CardResume, CardResumeBody, CardResumeHeader, TextCardResume } from './NewsResume.styles'


export interface PropsNewsResume {
    imageBg: string,
    textCard: string,
    imageLogo: string,
}

const NewsResume: React.FC<PropsNewsResume> = ({
    imageBg,
    imageLogo,
    textCard
}) => {

    return (
        <>  
            <CardResume>
                <ImageBackground source={imageBg ? imageBg : require('../../../assets/With1.png')} resizeMode="cover">
                    <CardResumeHeader>
                    </CardResumeHeader>
                </ImageBackground>
                <CardResumeBody>
                    <Image
                        source={imageLogo ? imageLogo : require('../../../assets/logo1.png')}
                    />
                    <TextCardResume>{textCard}</TextCardResume>
                </CardResumeBody>
            </CardResume>
        </>
    )
}

export default NewsResume;