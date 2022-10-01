import { useState } from "react";


import Closed from "./Closed"
import OpenedFront from "./OpenedFront";
import OpenedBack from "./OpenedBack";

console.log("CHEGOU NO CARDSTATE");


export default function CardState(props) {
    const [cardstate, setCardState] = useState("closed");
   
    console.log("STATE" + cardstate);

    if(cardstate === "closed"){return <Closed state={setCardState} number={props.number}/>}
    else if(cardstate === "openedfront"){return <OpenedFront state={setCardState} card={props.card}/>}
    else if(cardstate === "openedback"){return <OpenedBack card={props.card}/>}
}