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
width: 70px;
height: 70px;
background: none;
color: #ffffff;
border: 1px #ffffff solid;
border-radius: 50%;
font-family: none;
font-size: 25px;

&:hover {
    background-color: #b1b1b1;
    transition: all 0.2s 0.04s linear;
}

&.active {
 border: 0.15em solid #000000;
 background-color: #ffffff;
 transition: all 0.1s 0.01s linear;
 color: #000000;
}
`