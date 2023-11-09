import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from "react"
import { H1noFamily } from "../planets/moon";
import FirstTechnologyImg from "../../images/technology/image-launch-vehicle-portrait.jpg"
import SecondTechnologyImg from "../../images/technology/image-space-capsule-portrait.jpg"
import ThirdTechnologyImg from "../../images/technology/image-spaceport-portrait.jpg"
import styled from "styled-components";

type Technology = {
    id: number;
    name: string;
    description: string;
};

export const Gadgets = () => {
    const [data, setData] = useState<Technology[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedTechnology, setSelectedTechnology] = useState<string>("Launch vehicle");
    const [Img, setImg] = useState<string>(FirstTechnologyImg)

    useEffect(() => {
        async function fetchData() {


            try {
                const response = await fetch('https://api-planets-ylxj.onrender.com/tecnology')
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
                <div className="d-flex align-items-center flex-wrap">

                    <div className="d-flex ">
                    <ul className="d-flex flex-column">{data.tecnology.map((technology: Technology) => (
                            <li>
                                <div className="mb-4 ">
                                    
                                    <ButtonTechnology style={{fontFamily: "none", fontSize: "25px"}} onClick={() => {
                                        setSelectedTechnology(technology.name);

                                        switch (technology.name) {
                                            case "Launch vehicle":
                                                setImg(FirstTechnologyImg);
                                                break;
                                            case "Spaceport":
                                                setImg(SecondTechnologyImg);
                                                break;
                                            case "Space capsule":
                                                setImg(ThirdTechnologyImg);
                                                break;
                                            default:
                                                setImg(FirstTechnologyImg);
                                        }
                                    }}>{technology.id}
                                    </ButtonTechnology>
                                </div>
                            </li>
                        ))}</ul>
                        <ul>
                            {data.tecnology.filter((technology: Technology) =>
                                technology.name === selectedTechnology).map((technology: Technology) => (
                                    <div key={technology.id}>
                                        <p>THE TECNOLOGY...</p>
                                        <h1 style={{fontFamily: "none"}}>{technology.name.toLocaleUpperCase()}</h1>
                                        <ParagraphDescription>{technology.description}</ParagraphDescription>
                                    </div>
                                ))}
                        </ul>
                    </div>
                    <div className="d-flex ms-5">
                        <ImgCrew src={Img} />
                    </div>

                </div>
            )}
        </div>
    )
}

const ParagraphDescription = styled.p`
width: 500px;
margin-top: 30px;
` 

const ButtonTechnology = styled.button`
width: 70px;
height: 70px;
background: none;
color: #ffffff;
border: 1px #ffffff solid;
border-radius: 50%;
`

const ImgCrew = styled.img`
max-height: 400px;
`

const ButtonCrew = styled.button`
width: 15px;
height: 15px;
border: none;
border-radius: 50%;
`