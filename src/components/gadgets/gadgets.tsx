import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from "react"
import FirstTechnologyImg from "../../images/technology/image-launch-vehicle-portrait.jpg"
import SecondTechnologyImg from "../../images/technology/image-space-capsule-portrait.jpg"
import ThirdTechnologyImg from "../../images/technology/image-spaceport-portrait.jpg"
import { fetchData } from "../function";
import { DivContent, DivContent2, DivImg, ImgTechnology, LiButtons, ParagraphDescription, UlButtons, UlButtons2 } from "./styledComponents"
import { Button } from "./button"
import { Loading } from "../loading"

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
        <>
            {loading ? (
                <Loading/>
            ) : error ? (
                <p>Erro: {error.message}</p>
            ) : (
                <DivContent>
                    <DivContent2>
                        <UlButtons>{data.tecnology.map((technology: Technology) => (
                            <LiButtons>
                                    <Button className={selectedTechnology === technology.name ? 'active' : ''} 
                                    onClick={() => {handleButtonClick(technology.name)}}>
                                        {technology.id}
                                    </Button>
                            </LiButtons>
                        ))}
                        </UlButtons>
                        <UlButtons2>
                            {data.tecnology.filter((technology: Technology) =>
                                technology.name === selectedTechnology).map((technology: Technology) => (
                                    <div key={technology.id}>
                                        <p>THE TECNOLOGY...</p>
                                        <h1 style={{ fontFamily: "none" }}>{technology.name.toLocaleUpperCase()}</h1>
                                        <ParagraphDescription>{technology.description}</ParagraphDescription>
                                    </div>
                                ))}
                        </UlButtons2>
                    </DivContent2>
                    <DivImg>
                        <ImgTechnology src={Img}/>
                    </DivImg>

                </DivContent>
            )}
        </>
    )
}