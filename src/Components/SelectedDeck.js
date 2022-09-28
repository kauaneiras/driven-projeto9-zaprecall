import styled from "styled-components";

export default function SelectDeck(props) {
    return(
        <AlignCenter>
            <h1>{props.deck}</h1>
        </AlignCenter>
    )
}


const AlignCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

