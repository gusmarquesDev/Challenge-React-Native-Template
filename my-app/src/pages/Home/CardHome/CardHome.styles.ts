import { ScrollView } from 'react-native'
import styled from "styled-components/native"



export const WrapperCard = styled.View`
 height: 105px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 background-color:  #770FDF;
 margin-top: 40px;
 border-radius: 10px;

`

export const Colum = styled.View`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 50%;
`

export const TitleCard = styled.Text`
font-family: 'Sora';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.02em;
color: #FFFFFF;
margin-bottom: 10px;
flex-wrap: wrap;
`

export const TextCard = styled.Text` 
font-family: 'Sora';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.02em;
color: #FFFFFF;
`





