// ------------ Módulos Usados ------------ \\
import { useParams } from "react-router-dom";
import styled from "styled-components";

// ---------- Componentes Usados ---------- \\
import Header from "../Components/Header";


export default function Game() {
    const {idDeck} = useParams();

    return (
        <AlignCenter>
            <Header/>
            <h1>{idDeck}</h1>
        </AlignCenter>
    )
}

const AlignCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #FB6B6B;
`