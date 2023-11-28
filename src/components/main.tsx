import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import FirstImg from "../images/home/background-home-desktop.jpg"
import SecondImg from "../images/destination/background-destination-desktop.jpg"
import ThirdImg from "../images/crew/background-crew-desktop.jpg"
import FourthImg from "../images/technology/background-technology-desktop.jpg"
import FirstImgMobile from "../images/home/background-home-mobile.jpg"
import SecondImgMobile from "../images/destination/background-destination-mobile.jpg"
import ThirdImgMobile from "../images/crew/background-crew-mobile.jpg"
import FourthImgMobile from "../images/technology/background-technology-mobile.jpg"
import FirstImgTablet from "../images/home/background-home-tablet.jpg"
import SecondImgTablet from "../images/destination/background-destination-tablet.jpg"
import ThirdImgTablet from "../images/crew/background-crew-tablet.jpg"
import FourthImgTablet from "../images/technology/background-technology-tablet.jpg"
import Logo from "../images/shared - Copia/logo.svg"
import { OptionsBar } from "./bar"
import { Buttons } from "./buttons"
import { Homepage } from "./homepage/homepage"
import { useState } from "react"
import { Destination } from "./destination"
import { Crew } from "./crew"
import { Technology } from "./technology"
import { Squash as Hamburger } from 'hamburger-react'
import { slideOutEllipticTop, slideOutEllipticTopBack } from "./fadeIn"

export type ComponentType = 'ComponentHomePage' | 'ComponentDestination' | 'ComponentCrew' | 'ComponentTechnology';

export const Main = () => {

    const [activeComponent, setActiveComponent] = useState<ComponentType>("ComponentHomePage");
    const [backgroundImage, setBackgroundImage] = useState<string>(FirstImg)
    const [backgroundMobile, setBackgroundMobile] = useState<string>(FirstImgMobile)
    const [backgroundTablet, setbackgroundTablet] = useState<string>(FirstImgTablet)
    const [activeButton, setActiveButton] = useState<ComponentType>("ComponentHomePage");
    const [isOpen, setOpen] = useState<boolean>(false)
    const [isClose, setClose] = useState<boolean>(false)

    const handleClick = (component: ComponentType, background: string, backgroundMobile: string, backgroundTablet: string) => {
        setActiveComponent(component);
        setBackgroundImage(background)
        setActiveButton(component);
        setBackgroundMobile(backgroundMobile);
        setbackgroundTablet(backgroundTablet);
    };

    return (<>
        <BackgroundMain backgroundImage={backgroundImage}
            backgroundImgMobile={backgroundMobile}
            backgroundTablet={backgroundTablet}
        >
            <div className="d-flex p-0 pt-5 container-fluid justify-content-between">
                <ImgLogo src={Logo} />
                <OptionsBar>
                    <DivButtonsContainer>
                        <Buttons onClick={() => handleClick('ComponentHomePage', FirstImg, FirstImgMobile, FirstImgTablet)}
                            className={activeButton === 'ComponentHomePage' ? 'active' : ''}><span className="fw-bold">00</span> HOME</Buttons>

                        <Buttons onClick={() => handleClick('ComponentDestination', SecondImg, SecondImgMobile, SecondImgTablet)}
                            className={activeButton === 'ComponentDestination' ? 'active' : ''}><span className="fw-bold">01</span> DESTINATION</Buttons>

                        <Buttons onClick={() => handleClick('ComponentCrew', ThirdImg, ThirdImgMobile, ThirdImgTablet)}
                            className={activeButton === 'ComponentCrew' ? 'active' : ''}><span className="fw-bold">02</span> CREW</Buttons>

                        <Buttons onClick={() => handleClick('ComponentTechnology', FourthImg, FourthImgMobile, FourthImgTablet)}
                            className={activeButton === 'ComponentTechnology' ? 'active' : ''}><span className="fw-bold">03</span> TECHNOLOGY</Buttons>
                    </DivButtonsContainer>
                    <DivHamburguer>
                        <Hamburger color="#ffffff" onToggle={toggled => {
                            if (toggled) {
                                setOpen(true)
                                setClose(false)
                            } else {
                                setClose(true)
                                setTimeout(() => {
                                    setOpen(false)
                                    setClose(false)
                                }, 700);
                            }
                        }} />
                    </DivHamburguer>
                </OptionsBar>

            </div>
            <Menu toggled={isOpen} isClose={isClose}>
                <Buttons onClick={() => handleClick('ComponentHomePage', FirstImg, FirstImgMobile, FirstImgTablet)}
    className={activeButton === 'ComponentHomePage' ? 'active' : ''}><span className="fw-bold">00</span> HOME</Buttons>

<Buttons onClick={() => handleClick('ComponentDestination', SecondImg, SecondImgMobile, SecondImgTablet)}
    className={activeButton === 'ComponentDestination' ? 'active' : ''}><span className="fw-bold">01</span> DESTINATION</Buttons>

<Buttons onClick={() => handleClick('ComponentCrew', ThirdImg, ThirdImgMobile, ThirdImgTablet)}
    className={activeButton === 'ComponentCrew' ? 'active' : ''}><span className="fw-bold">02</span> CREW</Buttons>

<Buttons onClick={() => handleClick('ComponentTechnology', FourthImg, FourthImgMobile, FourthImgTablet)}
    className={activeButton === 'ComponentTechnology' ? 'active' : ''}><span className="fw-bold">03</span> TECHNOLOGY</Buttons>
            </Menu>

            {activeComponent === 'ComponentHomePage' && <Homepage handleClick={handleClick} />}
            {activeComponent === 'ComponentDestination' && <Destination />}
            {activeComponent === 'ComponentCrew' && <Crew />}
            {activeComponent === 'ComponentTechnology' && <Technology />}

        </BackgroundMain>

    </>
    )
}

const BackgroundMain = styled.div<{ backgroundImage: string; backgroundImgMobile: string; backgroundTablet: string }>`
min-height: 100vh;
background-image: url(${props => props.backgroundImage});
background-size: cover;
background-position: center;
transition: background 0.5s ease-in-out;

@media (max-width: 375px) {
    background-image: url(${props => props.backgroundImgMobile});
}

@media (max-width: 768px) {
    background-image: url(${props => props.backgroundTablet});
}
`

const ImgLogo = styled.img`
max-height: 50px;
align-self: center;
margin-left: 30px;
`

const DivButtonsContainer = styled.div`
display: flex;
gap: 50px;
@media (max-width: 830px) {
    display: none;
  }
`

const DivHamburguer = styled.div`
display: none;

@media (max-width: 830px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 10px;
  }
`

const Menu = styled.div<{ toggled: boolean; isClose: boolean }>`
display: none;

@media (max-width: 830px) {
    display: ${props => props.toggled ? "flex" : "none"};
    width: 120px;
    height: 180px;
    background-color: #141029;
    position: absolute;
    right: 0;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
    flex-direction: column;
    justify-content: center;
    gap:15px;
    z-index:1;
    animation: ${props => props.isClose ?
        slideOutEllipticTopBack : slideOutEllipticTop} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`