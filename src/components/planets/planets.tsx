import { useState, useEffect } from "react"
import MoonImg from "../../images/destination/image-moon.png"
import EuropaImg from "../../images/destination/image-europa.png"
import MarsImg from "../../images/destination/image-mars.png"
import TitanImg from "../../images/destination/image-titan.png"
import "bootstrap/dist/css/bootstrap.css"
import { Destination } from "../destination";
import { Buttons } from "../buttons"
import { fetchData } from "../function"
import { Loading } from "../loading"
import { DivContainer, DivText, H1noFamily, H3Details, LiButtons, Paragraph, ParagraphDetails } from "./styledComponents"

type Destination = {
    id: number;
    name: string;
    description: string;
    distance: string;
    travel: string;
};


export const Planets = () => {
    const [data, setData] = useState<Destination[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("Moon");
    const [Img, setImg] = useState<string>(MoonImg)

    useEffect(() => { fetchData<Destination[]>("destination", setData, setLoading, setError) }, [])

    const handleButtonClick = (destinationName: string) => {
    setSelectedDestination(destinationName);

    switch (destinationName) {
        case "Moon":
            setImg(MoonImg);
            break;
        case "Europa":
            setImg(EuropaImg);
            break;
        case "Mars":
            setImg(MarsImg);
            break;
        case "Titan":
            setImg(TitanImg);
            break;
        default:
            setImg(MoonImg);
    }
};

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <p>Erro: {error.message}</p>
            ) : (
                <DivContainer>
                    <img src={Img} className={`w-50`} alt={selectedDestination} />
                    <DivText className="d-flex flex-column pt-5">
                        <ul className="d-flex">{((data as any)['destinations'] as Destination[]).map((destination: Destination) => (
                                <LiButtons key={destination.id}>
                                        <Buttons className={selectedDestination === destination.name ? 'active' : ''} onClick={() => {
                                            handleButtonClick(destination.name)
                                        }}>
                                            {destination.name.toLocaleUpperCase()}
                                        </Buttons>
                                </LiButtons>
                        ))}</ul>
                        <H1noFamily>{selectedDestination.toLocaleUpperCase()}</H1noFamily>
                        {((data as any)['destinations'] as Destination[]).filter((destination: Destination) =>
                            destination.name === selectedDestination).map((destination: Destination) => (
                                <DivText key={destination.id}>
                                    <Paragraph className="w-50 pb-4">{destination.description}</Paragraph>
                                    <hr className="text-bg-danger w-50" />
                                    <div className="d-flex">
                                        <div className="me-5">
                                            <ParagraphDetails>AVG. DISTANCE</ParagraphDetails>
                                            <H3Details>{destination.distance.toLocaleUpperCase()}</H3Details>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <ParagraphDetails>EST. TRAVEL TIME</ParagraphDetails>
                                            <H3Details>{destination.travel.toLocaleUpperCase()}</H3Details>
                                        </div>
                                    </div>
                                </DivText>
                            ))}
                    </DivText>
                </DivContainer>
    )
}
        </div >
    )
}