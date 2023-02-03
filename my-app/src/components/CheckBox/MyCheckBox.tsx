import React,{FC, SetStateAction, useState} from 'react';
import { Box, LabelBox, ContentBox} from './MyCheckBox.styles';
import {Icon} from 'react-native-elements'
export interface CheckBoxProps {
  isChecked:boolean
  label:string
  onPress
  }

export const MyCheckbox: React.FC<CheckBoxProps> = ({
isChecked,
label,
onPress
}) => {

  return(
    <>
    <ContentBox>
    <Box isChecked={isChecked} onPress={onPress}>
       {isChecked && 
       <Icon name='check' 
       type='font-awesome' 
       color='#000' 
       size={10}
       />}
    </Box>
    <LabelBox>{label}</LabelBox>
    </ContentBox>
    </>
  )
}


