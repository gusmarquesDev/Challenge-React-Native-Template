import styled,{css} from "styled-components/native"


interface TabsProps{
    bg:boolean;
}

export const TabsView = styled.View`
width: 100px;
background-color: transparent;
`
export const TabsText = styled.Text<TabsProps>`
${({ bg }) => css`
font-family: 'Sora';
font-style: normal;
font-weight: ${bg ? 600 : 400};
font-size: 14px;
margin-right: 10px;
color: #000000;
`}`

export const TabsActive = styled.View<TabsProps>`
${({ bg }) => css`
background-color: ${bg ? '#770FDF' : '#ffff'} 
width:70px;
height: 2px;
margin-bottom: 10px;
margin-top:10px
`}
`





