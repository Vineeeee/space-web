import styled from "styled-components"
import { fadeIn } from "../fadeIn"

export const H1noFamily = styled.h1`
font-family: none;
font-size: 80px;

@media (max-width: 360px) {
    font-size: 50px;
}
`

export const DivContainer = styled.div`
display: flex;
padding: 40px 0;
margin-left: 150px;
line-height: 18px;
animation: ${fadeIn} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@media (max-width: 1109px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
}
`

export const DivText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1109px) {
    display: flex;
flex-direction: column;
align-items: center;
}
`

export const Paragraph = styled.p`

@media (max-width: 1109px) {
    text-align: center;
}
@media (max-width: 360px) {
    font-size: 12px;
}
`

export const ParagraphDetails = styled.p`

@media (max-width: 434px) {
    font-size: 13px;
}
`

export const H3Details = styled.h3`

@media (max-width: 434px) {
    font-size: 13px;
}
`

export const LiButtons = styled.li`
margin-right: 48px;

@media (max-width: 386px) {
    margin-right: 24px;
}

@media (max-width: 360px) {
    width: 30px;
}
`