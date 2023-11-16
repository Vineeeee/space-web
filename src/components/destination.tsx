import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import { Planets } from "./planets/planets";

export const Destination = () => {

    return (
        <DivContent>
            <h3><SpanNumber>01</SpanNumber> PICK YOUR DESTINATION</h3>
            <Planets />
        </DivContent>
    )
}

export const DivContent = styled.div`
margin: 60px 0 0 150px;

`

export const SpanNumber = styled.span`
color: #808080;
`