import styled from 'styled-components/native'
interface ContentProps {
    withoutPaddingContent?: boolean
}

const WITHOUT_PADDING = 0

export const Content = styled.View<ContentProps>`
    flex: 1;
    padding: ${props =>
        props.withoutPaddingContent
            ? WITHOUT_PADDING
            : ({ theme }) => `${'10px'} ${'20px'} ${'30px'}`};
`
