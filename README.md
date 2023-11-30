# Breve descrição do propósito da aplicação
Fiz essa aplicação para mostrar uma simulação de turismo espacial com quatro abas para acessar a home, os planetas, os profissionais e as tecnologias. Tudo isso usando React, typescript, bootstrap, useState, pgadmin, sql, node.js, styled components, vite e uma API usando banco de dados que eu mesmo criei.

## Breve descrição das funcionalidades da aplicação entregue

# No arquivo front end (esse do repositorio)

No app.tsx retorna uma variavel global para todos os componentes e o arquivo main.tsx.

Na main.tsx retorna uma div que atualiza o background no momento que muda de aba usando useState de acordo com o tamanho da tela, dentro da div retorna a imagem da logo e as próprias abas de transição e caso a largura da tela for menor que 861px aparece um menu hamburguer com uma animação para dar um charme a mais.

No loading.tsx retorna um spinner de loading enquanto espera resposta da busca do servidor utilizando banco de dados. Com uma interface usando bootstrap.

Na function.tsx retorna uma funçao que será usada para requisitar os dados

No fadeIn.ts retorna animações.

No buttons.tsx e bar.tsx retornam os botoes e a barra que será usado no main.tsx.

Na pasta images tem as imagens que serão usadas na aplicação.

Nos destination.tsx, crew.tsx e technology.tsx retornam respectivamente os componentes planets.tsx, people.tsx e gadgets.tsx que são componentes referentes de cada aba

## Ferramentas utilizadas.

Na function.ts retorna uma função que requisita a API que criei:

```
type Content = "destination" | "crew" | "tecnology"

    export async function fetchData<T>(content: Content,
        setData: React.Dispatch<React.SetStateAction<T>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setError: React.Dispatch<React.SetStateAction<Error | null>>) {

    try {
        const response = await fetch(`https://api-planets-ylxj.onrender.com/${content}`)
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
```
No type Content utilizei somente esses 3 tipos pois no server que fiz deploy (https://api-planets-ylxj.onrender.com/) pode ser usado crew, tecnology e destination para acessar o conteudo do respectivo tema:

![image](https://github.com/Vineeeee/space-web/assets/129313151/3f347293-4468-4352-81ca-30fd20829358)

No parametro abaixo utilizei o T para que seja usado qualquer tipo de estado no parâmetro.

```
setData: React.Dispatch<React.SetStateAction<T>>
```

O esquema abaixo é de teste e erro:

```
try {
        const response = await fetch(`https://api-planets-ylxj.onrender.com/${content}`)
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
```

No main.tsx dentro da pasta components criei o que vai ser a pagina principal que será entregue todos os componentes onde o usuario verá o conteudo

```
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import FirstImg from "../images/home/background-home-desktop.jpg"
import SecondImg from "../images/destination/background-destination-desktop.jpg"
import ThirdImg from "../images/crew/background-crew-desktop.jpg"
import FourthImg from "../images/technology/background-technology-desktop.jpg"
import FirstImgMobile from "../images/home/background-home-mobile.jpg"
import SecondImgMobile from "../images/destination/background-destination-mobile.jpg"
import ThirdImgMobile from "../images/crew/background-crew-mobile.jpg"
import FourthImgMobile from "../images/technology/background-technology-mobile.jpg"
import FirstImgTablet from "../images/home/background-home-tablet.jpg"
import SecondImgTablet from "../images/destination/background-destination-tablet.jpg"
import ThirdImgTablet from "../images/crew/background-crew-tablet.jpg"
import FourthImgTablet from "../images/technology/background-technology-tablet.jpg"
import Logo from "../images/shared - Copia/logo.svg"
import { OptionsBar } from "./bar"
import { Buttons } from "./buttons"
import { Homepage } from "./homepage/homepage"
import { useState } from "react"
import { Destination } from "./destination"
import { Crew } from "./crew"
import { Technology } from "./technology"
import { Squash as Hamburger } from 'hamburger-react'
import { slideOutEllipticTop, slideOutEllipticTopBack } from "./fadeIn"

export type ComponentType = 'ComponentHomePage' | 'ComponentDestination' | 'ComponentCrew' | 'ComponentTechnology';

export const Main = () => {

    const [activeComponent, setActiveComponent] = useState<ComponentType>("ComponentHomePage");
    const [backgroundImage, setBackgroundImage] = useState<string>(FirstImg)
    const [backgroundMobile, setBackgroundMobile] = useState<string>(FirstImgMobile)
    const [backgroundTablet, setbackgroundTablet] = useState<string>(FirstImgTablet)
    const [activeButton, setActiveButton] = useState<ComponentType>("ComponentHomePage");
    const [isOpen, setOpen] = useState<boolean>(false)
    const [isClose, setClose] = useState<boolean>(false)

    const handleClick = (component: ComponentType, background: string, backgroundMobile: string, backgroundTablet: string) => {
        setActiveComponent(component);
        setBackgroundImage(background)
        setActiveButton(component);
        setBackgroundMobile(backgroundMobile);
        setbackgroundTablet(backgroundTablet);
    };

    return (<>
        <BackgroundMain backgroundImage={backgroundImage}
            backgroundImgMobile={backgroundMobile}
            backgroundTablet={backgroundTablet}
        >
            <div className="d-flex p-0 pt-5 container-fluid justify-content-between">
                <ImgLogo src={Logo} />
                <OptionsBar>
                    <DivButtonsContainer>
                        <Buttons onClick={() => handleClick('ComponentHomePage', FirstImg, FirstImgMobile, FirstImgTablet)}
                            className={activeButton === 'ComponentHomePage' ? 'active' : ''}><span className="fw-bold">00</span> HOME</Buttons>

                        <Buttons onClick={() => handleClick('ComponentDestination', SecondImg, SecondImgMobile, SecondImgTablet)}
                            className={activeButton === 'ComponentDestination' ? 'active' : ''}><span className="fw-bold">01</span> DESTINATION</Buttons>

                        <Buttons onClick={() => handleClick('ComponentCrew', ThirdImg, ThirdImgMobile, ThirdImgTablet)}
                            className={activeButton === 'ComponentCrew' ? 'active' : ''}><span className="fw-bold">02</span> CREW</Buttons>

                        <Buttons onClick={() => handleClick('ComponentTechnology', FourthImg, FourthImgMobile, FourthImgTablet)}
                            className={activeButton === 'ComponentTechnology' ? 'active' : ''}><span className="fw-bold">03</span> TECHNOLOGY</Buttons>
                    </DivButtonsContainer>
                    <DivHamburguer>
                        <Hamburger color="#ffffff" onToggle={toggled => {
                            if (toggled) {
                                setOpen(true)
                                setClose(false)
                            } else {
                                setClose(true)
                                setTimeout(() => {
                                    setOpen(false)
                                    setClose(false)
                                }, 700);
                            }
                        }} />
                    </DivHamburguer>
                </OptionsBar>

            </div>
            <Menu toggled={isOpen} isClose={isClose}>
                <Buttons onClick={() => handleClick('ComponentHomePage', FirstImg, FirstImgMobile, FirstImgTablet)}
    className={activeButton === 'ComponentHomePage' ? 'active' : ''}><span className="fw-bold">00</span> HOME</Buttons>

<Buttons onClick={() => handleClick('ComponentDestination', SecondImg, SecondImgMobile, SecondImgTablet)}
    className={activeButton === 'ComponentDestination' ? 'active' : ''}><span className="fw-bold">01</span> DESTINATION</Buttons>

<Buttons onClick={() => handleClick('ComponentCrew', ThirdImg, ThirdImgMobile, ThirdImgTablet)}
    className={activeButton === 'ComponentCrew' ? 'active' : ''}><span className="fw-bold">02</span> CREW</Buttons>

<Buttons onClick={() => handleClick('ComponentTechnology', FourthImg, FourthImgMobile, FourthImgTablet)}
    className={activeButton === 'ComponentTechnology' ? 'active' : ''}><span className="fw-bold">03</span> TECHNOLOGY</Buttons>
            </Menu>

            {activeComponent === 'ComponentHomePage' && <Homepage handleClick={handleClick} />}
            {activeComponent === 'ComponentDestination' && <Destination />}
            {activeComponent === 'ComponentCrew' && <Crew />}
            {activeComponent === 'ComponentTechnology' && <Technology />}

        </BackgroundMain>

    </>
    )
}

const BackgroundMain = styled.div<{ backgroundImage: string; backgroundImgMobile: string; backgroundTablet: string }>`
min-height: 100vh;
background-image: url(${props => props.backgroundImage});
background-size: cover;
background-position: center;
transition: background 0.5s ease-in-out;

@media (max-width: 375px) {
    background-image: url(${props => props.backgroundImgMobile});
}

@media (max-width: 768px) {
    background-image: url(${props => props.backgroundTablet});
}
`

const ImgLogo = styled.img`
max-height: 50px;
align-self: center;
margin-left: 30px;
`

const DivButtonsContainer = styled.div`
display: flex;
gap: 50px;
@media (max-width: 830px) {
    display: none;
  }
`

const DivHamburguer = styled.div`
display: none;

@media (max-width: 830px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 10px;
  }
`

const Menu = styled.div<{ toggled: boolean; isClose: boolean }>`
display: none;

@media (max-width: 830px) {
    display: ${props => props.toggled ? "flex" : "none"};
    width: 120px;
    height: 180px;
    background-color: #141029;
    position: absolute;
    right: 0;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
    flex-direction: column;
    justify-content: center;
    gap:15px;
    z-index:1;
    animation: ${props => props.isClose ?
        slideOutEllipticTopBack : slideOutEllipticTop} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`
```
Aqui no ComponentType usei strings especificas para determinados componentes que irão ser adicionados no estado activeComponent dentro da função handleClick assim como os estados backgroundImage, backgroundTablet e backgroundMobile que pegam as imagens importadas

os estados isOpen e isClose vai ser usados dentro do hamburguer icon
```
export type ComponentType = 'ComponentHomePage' | 'ComponentDestination' | 'ComponentCrew' | 'ComponentTechnology';

export const Main = () => {

    const [activeComponent, setActiveComponent] = useState<ComponentType>("ComponentHomePage");
    const [backgroundImage, setBackgroundImage] = useState<string>(FirstImg)
    const [backgroundMobile, setBackgroundMobile] = useState<string>(FirstImgMobile)
    const [backgroundTablet, setbackgroundTablet] = useState<string>(FirstImgTablet)
    const [activeButton, setActiveButton] = useState<ComponentType>("ComponentHomePage");
    const [isOpen, setOpen] = useState<boolean>(false)
    const [isClose, setClose] = useState<boolean>(false)

    const handleClick = (component: ComponentType, background: string, backgroundMobile: string, backgroundTablet: string) => {
        setActiveComponent(component);
        setBackgroundImage(background)
        setActiveButton(component);
        setBackgroundMobile(backgroundMobile);
        setbackgroundTablet(backgroundTablet);
    };
```
Aqui criei uma div de loading quando o site tiver buscando o conteudo do server.
```
import "bootstrap/dist/css/bootstrap.css"
import styled from "styled-components"

export const Loading = () => {

    return (
        <DivLoading className="d-flex justify-content-center">
            <div className="spinner-border text-white justify-content-center"></div>
        </DivLoading>
    )
}

const DivLoading = styled.div`
height: 100vh;
`
```
No buttons.tsx usei o type ButtonsProps para que ele possa herdar uma função onClick, children e className como opcional 
```
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"

type ButtonsProps = {
        onClick: () => void;
        children: React.ReactNode;
        className?: string;
      };

export const Buttons: React.FC<ButtonsProps> = ({ onClick, children, className})=>{

    return(
        <Button onClick={onClick} className={className}>{children}</Button>
    )
}

export const Button = styled.button`
background: none;
border: none;
color: #ffffff;

&.active {
    --thickness: 4px;
  box-sizing: border-box;
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% + var(--thickness)),
    0 calc(100% + var(--thickness))
  );
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% + var(--thickness)),
    0 calc(100% + var(--thickness))
  );
  display: block;
  font-weight: 900;
  -webkit-mask-image: none;
  position: relative;
  text-transform: uppercase;

  &:before {
  background: #fff;
  bottom: calc(var(--thickness) * -1);
  content: "";
  display: block;
  height: var(--thickness);
  left: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
}

  }

`
```
## planets.tsx 
```
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

    useEffect(() => { fetchData<Destination[]>("destination", setData, setLoading, setError) }, [data])

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
```
Aqui no planets.tsx usei o type Destination para que seja especificado o que deve retornar na resposta de uma requisição de um servidor
```
type Destination = {
    id: number;
    name: string;
    description: string;
    distance: string;
    travel: string;
};
```
No estado data será colocado a resposta da aquisição de um servidor, o estado loading será um teste de carregamento da pagina, o de error será o teste de erro, o de selectedDestination será de o planeta selecionado e o de Img o de imagem
```
    const [data, setData] = useState<Destination[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("Moon");
    const [Img, setImg] = useState<string>(MoonImg)
```
no useEffect coloco a função apresentada anteriormente e de parametro coloco os respectivos estados, e coloco o estado data pra ser "vigiado" durante o uso do useEffect 
```
 useEffect(() => { fetchData<Destination[]>("destination", setData, setLoading, setError) }, [data])
```
essa função handleButtonClick será colocada num button personalizado
```
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
```
## Passo a passo dos comandos para que possamos rodar o seu projeto no seu computador
Abrir o terminal, e rodar npm run dev ou entrar no link: https://vineeeee.github.io/space-web/
