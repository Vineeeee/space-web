import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import { animation } from "./animation"
import SecondImg from '../../images/destination/background-destination-desktop.jpg'
import { fadeIn } from "../fadeIn"

export const Homepage = ({ handleClick }: { handleClick: (component: string, background: string) => void })=> {

    return(
        <DivContainer className="d-flex">
            <ContainerWordsHomePage>
            <h3 className="lead w-50">SO, YOU WANT TO TRAVEL TO</h3>
            <H1HomePage>SPACE</H1HomePage>
            <p className="w-50">Let's face it: if you want to go to space, you might as well genuinely go to outer 
                space and not hover kind of on the edge of it. 
                Well sit back, and relax because we'll give you a truly out of 
                this world experience!</p>
            </ContainerWordsHomePage>
            <ButtonExplore onClick={() => handleClick('ComponentDestination', SecondImg)}>EXPLORE</ButtonExplore>
        </DivContainer>
    )
}

const ContainerWordsHomePage = styled.div`
display: flex;
flex-direction: column;
margin: 150px 0 80px 150px;
gap: 10px;
width: 700px;
`

const H1HomePage = styled.h1`
font-size: 120px;
font-family: none;
align-self: flex-start;
`

const ButtonExplore = styled.button`
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

const DivContainer = styled.div`
animation: ${fadeIn} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

`