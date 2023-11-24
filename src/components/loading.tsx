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