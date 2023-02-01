import styled from 'styled-components/native'
import { CustomKeyboard } from '../Customkeyboard'

interface SafeAreaProps {
    color?: string | undefined
}

export const SafeAreaView = styled.SafeAreaView<SafeAreaProps>`
    background: ${({ theme, color }) => (color ? color : '#fff')};
    flex: 0;
`

export const SafeAreaContainer = styled.SafeAreaView<SafeAreaProps>`
    background: ${({ theme, color }) => (color ? color : '#ffff')};
    flex: 1;
`

export const SafeAreaKeyboardContainer = styled(CustomKeyboard)``
