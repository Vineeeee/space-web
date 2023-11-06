import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from "react"
import { DivContainer, H1noFamily } from "../planets/moon";
import { Button } from "../buttons";
import FirstPeopleImg from "../../images/crew/image-anousheh-ansari.png"
import SecondPeopleImg from "../../images/crew/image-douglas-hurley.png"
import ThirdPeopleImg from "../../images/crew/image-mark-shuttleworth.png"
import FouthPeopleImg from "../../images/crew/image-victor-glover.png"
import styled from "styled-components";

type Crew = {
    id: number;
    name: string;
    bio: string;
    role: string;
};

export const People = () => {
    const [data, setData] = useState<Crew[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedCrew, setSelectedCrew] = useState<string>("Douglas Hurley");
    const [Img, setImg] = useState<string>(FouthPeopleImg)

    useEffect(() => {
        async function fetchData() {


            try {
                const response = await fetch('https://api-planets-ylxj.onrender.com/crew')
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
                <div className="d-flex ">

                    <div className="d-flex flex-column">
                        <ul>
                            {data.crew.filter((crew: Crew) =>
                                crew.name === selectedCrew).map((crew: Crew) => (
                                    <div key={crew.id}>
                                        <H3NoFont>{crew.role.toLocaleUpperCase()}</H3NoFont>
                                        <H1noFamily style={{ fontSize: "40px" }}>{selectedCrew.toLocaleUpperCase()}</H1noFamily>
                                        <p style={{ width: "565px" }} className=" pb-4 pt-3 mb-3">{crew.bio}</p>
                                    </div>
                                ))}
                        </ul>
                        <ul className="d-flex">{data.crew.map((crew: Crew) => (
                            <li>
                                <div key={crew.id} className="me-3">
                                    <ButtonCrew onClick={() => {
                                        setSelectedCrew(crew.name);

                                        switch (crew.name) {
                                            case "Douglas Hurley":
                                                setImg(FouthPeopleImg);
                                                break;
                                            case "Mark Shuttleworth":
                                                setImg(ThirdPeopleImg);
                                                break;
                                            case "Victor Glover":
                                                setImg(SecondPeopleImg);
                                                break;
                                            case "Anousheh Ansari":
                                                setImg(FirstPeopleImg);
                                                break;
                                            default:
                                                setImg(FirstPeopleImg);
                                        }
                                    }}>
                                    </ButtonCrew>
                                </div>
                            </li>
                        ))}</ul>
                    </div>
                    <div className="d-flex ">
                        <ImgCrew src={Img} />
                    </div>

                </div>
            )}
        </div>
    )
}

const H3NoFont = styled.h3`
margin-top: 50px;
font-family: none;
color: #8a8a8a;

`

const ImgCrew = styled.img`
max-height: 410px;
margin-left: 150px;
`

const ButtonCrew = styled.button`
width: 15px;
height: 15px;
border: none;
border-radius: 50%;
`