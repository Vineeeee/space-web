import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import { Planets } from "./planets/planets";

export const Destination = () => {

    return (
    <>
        <DivContent>
            <H3Title><SpanNumber>01</SpanNumber> PICK YOUR DESTINATION</H3Title>
        </DivContent>
        <Planets />
    </>
    )
}

export const DivContent = styled.div`
margin: 10px 0 0 150px;
@media (max-width: 1109px) {
    display: flex;
justify-content: center;
margin: 10px 0 0 0;
}

`

export const H3Title = styled.h3`
@media (max-width: 434px) {
    font-size: 20px;
}
`

export const SpanNumber = styled.span`
color: #808080;
`