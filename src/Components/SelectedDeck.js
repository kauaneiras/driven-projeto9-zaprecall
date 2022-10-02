import { useState } from "react";
import styled from "styled-components";

//-------------- IMPORT DECKS --------------------\\
import CardState from "./CardState/CardState";
//--------------------------------------------------\\

export default function SelectDeck(props) {
    const propsreceived = props.idDeck;
    const [score, setScore] = useState([]);
    const sumScore = (sumscore) => {
        setScore([...score, sumscore]);    
    }
    props.setScore(score);

       
    const DeckBleach = [
        { Q: "Como Ichigo virou um shinigame?", R: "Uma Shinigame transferiu seus poderes para Ichigo" },
        { Q: "Quem são os Arrancar?", R: "São Hallows poderosos que removeram suas máscaras" },
        { Q: "Quem é o Arrancar mais forte de Bleach?", R: "Ulquiorra" },
        { Q: "Qual é a Bankai de Kenpachi Zaraki no anime?", R: "Zaraki não descobriu sua bankai no anime" },
        { Q: "Quem é o(a) tenente de Kenpachi Zaraki?", R: "Ikkaku Madarame" },
        { Q: "No anime, Rukia é tenente de qual capitão?", R: "Jūshirō Ukitake" },
        { Q: "Quem é o gato estranho amigo de Urahara Kisuke?", R: "É a Yoruichi Shihōin, ex-capitã do 2º Esquadrão" },
        { Q: "Porque Urahara foi expulso da Soul Society", R: "Urahara criou o Hougyouku, e Aizen utilizou para criar Vaizards" }
    ];
    
    const DeckRecall = [
        { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
        { Q: "O React é __ ", R: "uma biblioteca JavaScript para construção de interfaces" },
        { Q: "Componentes devem iniciar com __", R: "letra maiúscula" },
        { Q: "Podemos colocar __ dentro do JSX", R: "expressões" },
        { Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma" },
        { Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências" },
        { Q: "Usamos props para __", R: "passar diferentes informações para componentes" },
        { Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];
    
    
const SelectDeck = () =>{
    
    if (propsreceived == 2) { 
        let suffle = (DeckRecall.sort(() => Math.random() - 0.5)).slice(4);
        return (suffle.map((card, index) => <>{<CardState card = {card} number={index+1} sumScore = {sumScore}/> }</>));

    } else if (propsreceived == 3) {
        let suffle = (DeckBleach.sort(() => Math.random() - 0.5)).slice(4);
        return (suffle.map((card, index) => <>{<CardState card = {card} number={index+1} sumScore = {sumScore}/> }</>));
    }
}

    return(
        <AlignCenter>
            {SelectDeck()}
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


