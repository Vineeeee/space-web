import styled, {keyframes} from "styled-components"
import "bootstrap/dist/css/bootstrap.css"

export const Homepage = ({ handleClick }: { handleClick: (component: ComponentType) => void })=> {

    return(
        <div className="d-flex">
            <ContainerWordsHomePage>
            <h3 className="lead w-50">SO, YOU WANT TO TRAVEL TO</h3>
            <H1HomePage>SPACE</H1HomePage>
            <p className="w-50">Let's face it: if you want to go to space, you might as well genuinely go to outer 
                space and not hover kind of on the edge of it. 
                Well sit back, and relax because we'll give you a truly out of 
                this world experience!</p>
            </ContainerWordsHomePage>
            <ButtonExplore onClick={() => handleClick('ComponentDestination')}>EXPLORE</ButtonExplore>
            </div>
    )
}


const animation = keyframes`

from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }

`

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
