import React,{FC} from 'react'
import { KeyboardAvoidingView, KeyboardAvoidingViewProps} from 'react-native'
import styled from 'styled-components' 


const StyledKeyboard = styled(KeyboardAvoidingView)`
flex:1;

`
interface CustomKeyboardAvoidingViewProps extends KeyboardAvoidingViewProps {
    keyboardViewValue?: number
}

export const CustomKeyboard: FC = ({ children, keyboardViewValue, enabled }: CustomKeyboardAvoidingViewProps) => (
    <StyledKeyboard behavior="padding" enabled={enabled} keyboardVerticalOffset={keyboardViewValue}>
        {children}
    </StyledKeyboard>
)



