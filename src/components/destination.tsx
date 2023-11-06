import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import { Moon } from "./planets/moon";

export const Destination = () => {

    type ComponentType = 'ComponentMoon' | 'ComponentMars' | 'ComponentEuropa' | 'ComponentTitan';

    const [activeComponent, setActiveComponent] = useState<ComponentType>("ComponentMoon");

    const handleClick = (component:ComponentType) => {
        setActiveComponent(component);
        console.log(activeComponent);
    };

    return(
        <DivContent>
        <H3Title><SpanNumber>01</SpanNumber> PICK YOUR DESTINATION</H3Title>
        <Moon/>
        </DivContent>
    )
} 

export const DivContent = styled.div`
margin: 60px 0 0 150px;

`

const H3Title = styled.h3`
`

export const SpanNumber = styled.span`
color: #808080;
`