import styled from "styled-components"
import { animation } from "./animation"
import { fadeIn } from "../fadeIn"

export const ContainerWordsHomePage = styled.div`
display: flex;
flex-direction: column;
margin: 150px 0 80px 150px;
gap: 10px;
max-width: 700px;
@media (max-width: 1066px) {
    align-items: center;
    margin-left: 0;
}
@media (max-width: 916px) {
    flex-direction: column;
    text-align: center;
}
@media (max-width: 375px) {
    margin-top: 20px;
}

`

export const H1HomePage = styled.h1`
font-size: 120px;
font-family: none;
@media (max-width: 425px) {
    font-size: 100px;
}
`

export const Paragraph = styled.p`
width: 50%;
@media (max-width: 1066px) {
    width: 50%;
}
@media (max-width: 916px) {
    letter-spacing: 0.5px;
    width: 60%;
}
`

export const ButtonExplore = styled.button`
background-color: #ffffff;
font-family: none;
border: none;
width: 200px;
height: 200px;
font-size: 22px;
border-radius: 80%;
align-self: center;
&:hover{animation: ${animation} 1.5s ease-in-out infinite both;}
`

export const DivContainer = styled.div`
animation: ${fadeIn} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
display: flex;
padding-bottom: 10px;

@media (max-width: 1066px) {
    align-items: center;
}

@media (max-width: 916px) {
    flex-direction: column;
}
`