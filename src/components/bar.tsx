import styled from "styled-components"
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react"

export const OptionsBar = ({children}: { children: ReactNode })=>{

    const [isOpen, setOpen] = useState(false)

    return(
        <Bar className="d-flex justify-content-end">
            {children}
            <DivHamburguer>
                <Hamburger color="#ffffff" toggled={isOpen} toggle={setOpen}/>
            </DivHamburguer>
        </Bar>
    )
}

const Bar = styled.div`
backdrop-filter: blur(16px);
width: 700px;
height: 100px;
padding-right: 200px;
padding-left: 10px;
gap: 40px;
@media (max-width: 900px) {
    padding-right: 0;
  }
`

const DivHamburguer = styled.div`
display: none;
@media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 10px;
  }
`