import styled from "styled-components"
import { ReactNode } from "react";

export const OptionsBar = ({children}: { children: ReactNode })=>{

    return(
        <Bar className="d-flex justify-content-around">{children}</Bar>
    )
}

const Bar = styled.div`
backdrop-filter: blur(16px);
width: 700px;
height: 100px;
padding-right: 200px;
gap: 40px;
`