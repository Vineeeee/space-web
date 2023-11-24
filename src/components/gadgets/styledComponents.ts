import styled from "styled-components"

export const ParagraphDescription = styled.p`
width: 500px;
margin-top: 30px;

@media (max-width: 1109px){
    width: 100%;
    padding:  0 10px 0 0;
}
`

export const ButtonTechnology = styled.button`
width: 70px;
height: 70px;
background: none;
color: #ffffff;
border: 1px #ffffff solid;
border-radius: 50%;
`

export const DivContent = styled.div`
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1109px){
    flex-direction: column-reverse;
}
`

export const ImgTechnology = styled.img`
max-height: 400px;
transition: opacity 0.5s ease-in-out; 
opacity: 1;
border-radius: 50px;

@media (max-width: 1109px){
    margin: 50px 0;
    width: 100%;
    padding: 10px;
}

@media (max-width: 450px){
    padding: 20px;
}
`

export const DivImg = styled.div`
margin-left: 48px;
display: flex;

@media (max-width: 1109px){
    margin: 0;
}
`

export const UlButtons = styled.ul`
display: flex;
flex-direction: column;

@media (max-width: 475px){
    flex-direction: row;
    margin: 0;
    padding: 0;
}
`

export const UlButtons2 = styled.ul`
display: flex;
flex-direction: column;

@media (max-width: 475px){
    text-align: center;
    padding: 20px;
}
`

export const DivContent2 = styled.div`
display: flex;

@media (max-width: 475px){
    flex-direction: column;
    align-items: center;
    padding: 0;
}
`

export const LiButtons = styled.li`
margin-bottom: 32px;

@media (max-width: 475px){
    flex-direction: column;
    padding: 20px;
}

@media (max-width: 347px){
    padding: 10px;
}
`