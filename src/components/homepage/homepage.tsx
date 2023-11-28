import "bootstrap/dist/css/bootstrap.css"
import SecondImg from '../../images/destination/background-destination-desktop.jpg'
import { ButtonExplore, ContainerWordsHomePage, DivContainer, H1HomePage, Paragraph } from "./styledComponents"
import SecondImgMobile from "../../images/destination/background-destination-mobile.jpg"
import SecondImgTablet from "../../images/destination/background-destination-tablet.jpg"
import {ComponentType} from "../main"

export const Homepage = ({ handleClick }: { handleClick: (component: ComponentType, background: string, backgroundMobile: string, backgroundTablet: string) => void })=> {

    return(
        <DivContainer className="d-flex">
            <ContainerWordsHomePage>
            <h4>SO, YOU WANT TO TRAVEL TO</h4>
            <H1HomePage>SPACE</H1HomePage>
            <Paragraph>Let's face it: if you want to go to space, you might as well genuinely go to outer 
                space and not hover kind of on the edge of it. 
                Well sit back, and relax because we'll give you a truly out of 
                this world experience!</Paragraph>
            </ContainerWordsHomePage>
            <ButtonExplore onClick={() => handleClick('ComponentDestination', SecondImg, SecondImgMobile, SecondImgTablet)}>EXPLORE</ButtonExplore>
        </DivContainer>
    )
}