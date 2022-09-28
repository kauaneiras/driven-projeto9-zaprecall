import styled from "styled-components"

export default function Footer() {
    return (
        <AlignFooter>
            <h1>0/4 Concluidos</h1>
        </AlignFooter>

    )
}

const AlignFooter = styled.div`
    position: fixed;
    bottom: 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`