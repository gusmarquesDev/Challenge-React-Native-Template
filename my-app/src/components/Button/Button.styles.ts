import styled,{css} from 'styled-components/native'

interface ButtonProps{
bg:string;
color:string;
border:string;
}

export const LabelButton = styled.Text<ButtonProps>`
${({ color  }) => css`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;
color: ${color ? color : '#fff'};
`}`

export const ContainerButton = styled.TouchableHighlight <ButtonProps>`
${({ bg, color,border }) => css`
flex-direction: row;
margin:10px;
justify-content: center;
align-items: center;
padding: 16px 32px;
background: ${bg ? bg : '#000'};
border: ${border ? border : '#770FDF'};
color: ${color ? color : '#fff'};
border-radius: 4px;
`}`