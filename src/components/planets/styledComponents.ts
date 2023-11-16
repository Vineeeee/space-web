import styled from "styled-components"
import { fadeIn } from "../fadeIn"

export const H1noFamily = styled.h1`
font-family: none;
font-size: 80px;
`

export const DivContainer = styled.div`
padding: 40px 0;
line-height: 18px;
animation: ${fadeIn} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

`