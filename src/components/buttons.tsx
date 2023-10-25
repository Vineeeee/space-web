import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"

type ButtonsProps = {
        onClick: () => void;
        children: React.ReactNode;
      };

export const Buttons: React.FC<ButtonsProps> = ({ onClick, children})=>{

    return(
        <Button onClick={onClick} className="text-white">{children}</Button>
    )
}

const Button = styled.button`
background: none;
border: none;
`