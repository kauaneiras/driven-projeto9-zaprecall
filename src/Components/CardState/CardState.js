import { useState } from "react";


// -------- IMPORT CARDS STATES -------- \\
import Closed from "./Closed"
import OpenedFront from "./OpenedFront";
import OpenedBack from "./OpenedBack";
// ------------------------------------- \\

export default function CardState(props) {
    const [cardstate, setCardState] = useState("closed");
    const [color, setColor] = useState("black");

    const setButton = (button) => {
        if (button == 1) {
            setColor("red");
            props.sumScore("red");
            setCardState("closed");
        } else if (button == 2) {
            setColor("orange");
            props.sumScore("orange");
            setCardState("closed");

        } else if (button == 3) {
            setColor("green");
            props.sumScore("green");
            setCardState("closed");
        }
    }
    
    
    if (cardstate === "closed") { return <Closed state={setCardState} number={props.number} setbutton={setButton} Color={color}/> }
    else if (cardstate === "openedfront") { return <OpenedFront state={setCardState} card={props.card} setbutton={setButton} /> }
    else if (cardstate === "openedback") { return <OpenedBack state={setCardState} card={props.card} setbutton={setButton} Color={color}/> }
}