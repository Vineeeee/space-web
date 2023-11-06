import { useState, useEffect } from "react"
import MoonImg from "../../images/destination/image-moon.png"
import EuropaImg from "../../images/destination/image-europa.png"
import MarsImg from "../../images/destination/image-mars.png"
import TitanImg from "../../images/destination/image-titan.png"
import "bootstrap/dist/css/bootstrap.css"
import { Destination } from "../destination";
import { Button } from "../buttons"
import styled from "styled-components"

type Destination = {
    id: number;
    name: string;
    description: string;
    distance: string;
    travel: string;
};

export const Moon = () => {
    const [data, setData] = useState<Destination[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("Moon");
    const [Img, setImg] = useState<string>(MoonImg)


    useEffect(() => {
        async function fetchData() {


            try {
                const response = await fetch('https://api-planets-ylxj.onrender.com/destination')
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados')
                }
                const data = await response.json()
                setData(data)
                console.log(data);

            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                } else {
                    setError(new Error('Erro desconhecido'));
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [])

    return (
        <div>
            {loading ? (
                <div className="spinner-border text-white"></div>
            ) : error ? (
                <p>Erro: {error.message}</p>
            ) : (
                <DivContainer className="d-flex ">
                    <img src={Img} className="me-5" alt="Moon's image" />

                    <div className="d-flex flex-column ps-5">
                    <ul className="d-flex">{data.destinations.map((destination: Destination) => (
                        <li>
                            <div key={destination.id} className="me-5">
                                <Button onClick={() => {
                                    setSelectedDestination(destination.name);

                                    switch (destination.name) {
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
                                }}>
                                    {destination.name.toLocaleUpperCase()}
                                </Button>
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

export const H1noFamily = styled.h1`
font-family: none;
font-size: 80px;
`

export const DivContainer = styled.div`
padding: 40px 0;
line-height: 18px;
`