// ------------ Módulos Usados ------------ \\
import React, { useState} from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";

// ---------- Componentes Usados ---------- \\
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SelectDeck from "../Components/SelectedDeck";


export default function Game() {
    const {idDeck} = useParams();
    const [score, setScore] = useState([]);

    return (
        <AlignCenter>
            <Header/>
            <SelectDeck idDeck={idDeck} setScore = {setScore}/>
            <Footer score={score}/>
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