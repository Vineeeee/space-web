import styled from "styled-components"
import { fadeIn } from "../fadeIn"

export const H3NoFont = styled.h3`
margin-top: 50px;
font-family: none;
color: #8a8a8a;
`

export const Paragraph = styled.p`
width: 565px;
@media (max-width: 1109px){
    width: 765px;
    padding: 0 10px;
}

@media (max-width: 800px){
    width: 100%;
    padding: 0 10px;
}
`

export const ImgCrew = styled.img`
max-height: 410px;
margin-left: 150px;

@media (max-width: 1109px){
    max-height: auto;
    max-width: 300px;
    margin:0;
    padding-top: 20px;
}

@media (max-width: 320px){
    max-width: 200px;
}
`

export const ButtonCrew = styled.button`
width: 15px;
height: 15px;
border: none;
border-radius: 50%;
`

export const H1noFamily = styled.h1`
font-family: none;
font-size: 40px;

@media (max-width: 377px){
    font-size: 30px;
}
`

export const DivContainer = styled.div`
animation: ${fadeIn} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
display: flex;
margin-left: 150px;
margin-top: 49px;
padding: 0 30px;

@media (max-width: 1109px){
    margin: 0;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
`

export const UlButtons = styled.ul`
display: flex;

@media (max-width: 1109px){
    justify-content: center;
    padding: 0;
}
`