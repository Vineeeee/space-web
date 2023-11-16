import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from "react"
import FirstTechnologyImg from "../../images/technology/image-launch-vehicle-portrait.jpg"
import SecondTechnologyImg from "../../images/technology/image-space-capsule-portrait.jpg"
import ThirdTechnologyImg from "../../images/technology/image-spaceport-portrait.jpg"
import { fetchData } from "../function";
import { ImgTechnology, ParagraphDescription } from "./styledComponents"
import { Button } from "./button"

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
        fetchData<Technology[]>("tecnology", setData, setLoading, setError)
    }, [])

    const handleButtonClick = (technologyName: string) => {

        setSelectedTechnology(technologyName);

        switch (technologyName) {
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


    };
    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-white justify-content-center"></div>
                </div>
            ) : error ? (
                <p>Erro: {error.message}</p>
            ) : (
                <div className="d-flex align-items-center flex-wrap">

                    <div className="d-flex ">
                        <ul className="d-flex flex-column">{data.tecnology.map((technology: Technology) => (
                            <li>
                                <div className="mb-4 ">
                                    <Button className={selectedTechnology === technology.name ? 'active' : ''} 
                                    onClick={() => {handleButtonClick(technology.name)}}>
                                        {technology.id}
                                    </Button>
                                </div>
                            </li>
                        ))}</ul>
                        <ul>
                            {data.tecnology.filter((technology: Technology) =>
                                technology.name === selectedTechnology).map((technology: Technology) => (
                                    <div key={technology.id}>
                                        <p>THE TECNOLOGY...</p>
                                        <h1 style={{ fontFamily: "none" }}>{technology.name.toLocaleUpperCase()}</h1>
                                        <ParagraphDescription>{technology.description}</ParagraphDescription>
                                    </div>
                                ))}
                        </ul>
                    </div>
                    <div className="d-flex ms-5">
                        <ImgTechnology src={Img}/>
                    </div>

                </div>
            )}
        </div>
    )
}