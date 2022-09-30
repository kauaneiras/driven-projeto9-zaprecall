import { useState } from "react";
import styled from "styled-components";

//-------------- IMPORT DECKS --------------------\\
import DeckRecall from "./Decks/DeckRecall";
import DeckBleach from "./Decks/DeckBleach";
import Closed from "./CardState/Closed";
import OpenedFront from "./CardState/OpenedFront";
import OpenedBack from "./CardState/OpenedBack";
//--------------------------------------------------\\

export default function SelectDeck() {
    const [cardstate, setCardState] = useState("closed");
    const [cards, setCards] = useState([]);

    // const propsobject = props.idDeck;

    // function SelectDeckWithProps(){
    //     if(propsobject === 2){
    //         return "DeckRecall";
    //     }else if(propsobject === 3){
    //         return "DeckBleach";
    //     }
    // }


    
    // console.log(choosecardsfromdeck)



    function CardState() {
        if(cardstate === "closed"){return <Closed state={setCardState}/>}
        else if(cardstate === "openedfront"){return <OpenedFront state={setCardState}/>}
        else if(cardstate === "openedback"){<OpenedBack/>}
    }

    

    return(
        <AlignCenter>
            {CardState()}
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

const Card = styled.div`
    width: 75%;
    max-width: 50px;
`

