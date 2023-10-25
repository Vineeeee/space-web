import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import Img from "../images/home/background-home-desktop.jpg"
import Logo from "../images/shared - Copia/logo.svg"
import { OptionsBar } from "./bar"
import { Buttons } from "./buttons"
import { Homepage } from "./homepage"
import { useState } from "react"

type ComponentType = 'ComponentHomePage' | 'ComponentDestination' | 'ComponentCrew' | 'ComponentTechnology';

export const Main = ()=>{

    const [activeComponent, setActiveComponent] = useState<ComponentType | null>("ComponentHomePage");

    const handleClick = (component:ComponentType) => {
        setActiveComponent(component);
        console.log(activeComponent);
        
    };

    return(
        <>
        <BackgroundMain>
            <div className="d-flex p-0 pt-5 container-fluid justify-content-between">
            <ImgLogo src={Logo}/>
            <OptionsBar>
                <Buttons onClick={() => handleClick('ComponentHomePage')} ><span className="fw-bold">00</span> HOME</Buttons>
                <Buttons onClick={() => handleClick('ComponentDestination')} ><span className="fw-bold">01</span> DESTINATION</Buttons>
                <Buttons onClick={() => handleClick('ComponentCrew')} ><span className="fw-bold">02</span> CREW</Buttons>
                <Buttons onClick={() => handleClick('ComponentTechnology')} ><span className="fw-bold">03</span> TECHNOLOGY</Buttons>
            </OptionsBar>
            </div>
            {activeComponent === 'ComponentHomePage' && <Homepage/>}
        </BackgroundMain>
        </>
    )
}


const BackgroundMain = styled.div`
min-height: 100vh;
background-image: url(${Img});
background-size: cover;
background-position: center;
` 

const ImgLogo = styled.img`
max-height: 50px;
align-self: center;
margin-left: 30px;
` 

