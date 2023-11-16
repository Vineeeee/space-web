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
width: 15px;
height: 15px;
border: none;
border-radius: 50%;

&.active {
 transform: scale(0.55);
 border: 0.15em solid #ffffff;
 background-color: #000000;
 transition: all 0.2s 0.04s linear;
 transform: translate(0%, -50%);
}

`