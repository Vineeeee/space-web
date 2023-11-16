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
import { DivContainer, H1noFamily } from "./styledComponents"

type Destination = {
    id: number;
    name: string;
    description: string;
    distance: string;
    travel: string;
};

type NameSelected = 'Moon' | 'Mars' | 'Europa' | 'Titan';

export const Planets = () => {
    const [data, setData] = useState<Destination[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<NameSelected>("Moon");
    const [Img, setImg] = useState<string>(MoonImg)

    useEffect(() => {fetchData<Destination[]>("destination", setData, setLoading, setError)}, [])

    const handleButtonClick = (destinationName: NameSelected) => {

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
                <DivContainer className="d-flex">
                    <img src={Img} className={`me-5`} alt={selectedDestination} />
                    <div className="d-flex flex-column ps-5">
                        <ul className="d-flex">{data.destinations.map((destination: Destination) => (
                            <li>
                                <div key={destination.id} className="me-5">
                                    <Buttons className={selectedDestination === destination.name ? 'active' : ''} onClick={() => {
                                        handleButtonClick(destination.name)
                                    }}>
                                        {destination.name.toLocaleUpperCase()}
                                    </Buttons>
                                </div>
                            </li>
                        ))}</ul>
                        <ul>
                            <H1noFamily>{selectedDestination.toLocaleUpperCase()}</H1noFamily>
                            {data.destinations.filter((destination: Destination) =>
                                destination.name === selectedDestination).map((destination: Destination) => (
                                    <div key={destination.id}>
                                        <p className="w-50 pb-4">{destination.description}</p>
                                        <hr className="text-bg-danger w-50" />
                                        <div className="d-flex">
                                            <div className="me-5">
                                                <p>AVG. DISTANCE</p>
                                                <h3>{destination.distance.toLocaleUpperCase()}</h3>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <p>EST. TRAVEL TIME</p>
                                                <h3>{destination.travel.toLocaleUpperCase()}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </ul>
                    </div>
                </DivContainer>
            )}
        </div>
    )
}
