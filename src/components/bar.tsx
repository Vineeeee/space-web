import styled from "styled-components"
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css"

export const OptionsBar = ({ children }: { children: ReactNode }) => {

    return (
        <Bar className="d-flex justify-content-end">{children}</Bar>
    )
}

const Bar = styled.div`
backdrop-filter: blur(16px);
width: 700px;
height: 100px;
padding-right: 200px;
padding-left: 10px;
gap: 40px;
@media (max-width: 830px) {
    padding-right: 0;
  }
`