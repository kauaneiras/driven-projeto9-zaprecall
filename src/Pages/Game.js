// ------------ Módulos Usados ------------ \\
import { useParams } from "react-router-dom";
import styled from "styled-components";

// ---------- Componentes Usados ---------- \\
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SelectDeck from "../Components/SelectedDeck";


export default function Game() {
    const {idDeck} = useParams();


    return (
        <AlignCenter>
            <Header/>
            <SelectDeck idDeck={idDeck}/>
            <Footer/>
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