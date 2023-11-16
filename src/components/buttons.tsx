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