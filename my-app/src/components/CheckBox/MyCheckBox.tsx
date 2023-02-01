import React,{FC, SetStateAction, useState} from 'react';
import { Box, LabelBox, ContentBox} from './MyCheckBox.styles';

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
       {isChecked && 'oii'}
    </Box>
    <LabelBox>{label}</LabelBox>
    </ContentBox>
    </>
  )
}


