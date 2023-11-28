import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from "react"
import FirstPeopleImg from "../../images/crew/image-anousheh-ansari.png"
import SecondPeopleImg from "../../images/crew/image-douglas-hurley.png"
import ThirdPeopleImg from "../../images/crew/image-mark-shuttleworth.png"
import FouthPeopleImg from "../../images/crew/image-victor-glover.png"
import { fetchData } from "../function";
import { Loading } from "../loading";
import { DivContainer, H1noFamily, H3NoFont, ImgCrew, Paragraph, UlButtons } from "./styledComponents";
import { Button } from "./button"

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

    useEffect(() => {console.log(data);
    fetchData<Crew[]>("crew", setData, setLoading, setError)}, [])

    const handleButtonClick = (crewName: string) => {

        setSelectedCrew(crewName);

        switch (crewName) {
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
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <p>Erro: {error.message}</p>
            ) : (
                <DivContainer>
                    <div>
                        <ul className="p-0">
                            {((data as any)['crew'] as Crew[]).filter((crew: Crew) =>
                                crew.name === selectedCrew).map((crew: Crew) => (
                                    <li key={crew.id}>
                                        <H3NoFont>{crew.role.toLocaleUpperCase()}</H3NoFont>
                                        <H1noFamily>{selectedCrew.toLocaleUpperCase()}</H1noFamily>
                                        <Paragraph className="pb-4 pt-3 mb-3">{crew.bio}</Paragraph>
                                    </li>
                                ))}
                        </ul>
                        <UlButtons>{((data as any)['crew'] as Crew[]).map((crew: Crew) => (
                            <li>
                                <div key={crew.id} className="me-3">
                                    <Button className={selectedCrew === crew.name ? 'active' : ''} onClick={() => {handleButtonClick(crew.name)}}/>
                                </div>
                            </li>
                        ))}</UlButtons>
                    </div>
                    <ImgCrew src={Img} />
                </DivContainer>
            )}
        </div>
    )
}