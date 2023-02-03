import React, { FC, SetStateAction, useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { Content, TextContent } from './TextWithButton.styles';

export interface TextWithButtonProps {
  beforeText: string
  onPress
  textInsideButton: string
  afterButton?: string
}

export const TextWithButton: React.FC<TextWithButtonProps> = ({
  beforeText,
  onPress,
  textInsideButton,
  afterButton
}) => {

  return (
    <>
      <Content>
        <TextContent>
          {beforeText}
        </TextContent>
        <TouchableOpacity onPress={onPress}>
          <TextContent>{textInsideButton}</TextContent>
        </TouchableOpacity>
        <TextContent>
          {afterButton}
        </TextContent>
      </Content>
    </>
  )
}


