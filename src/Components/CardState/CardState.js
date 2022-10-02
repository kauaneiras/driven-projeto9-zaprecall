import { useState } from "react";


// -------- IMPORT CARDS STATES -------- \\
import Closed from "./Closed"
import OpenedFront from "./OpenedFront";
import OpenedBack from "./OpenedBack";
// ------------------------------------- \\





export default function CardState(props) {
    const [cardstate, setCardState] = useState("closed");
    const [color, setColor] = useState("black");
    const [score, setScore] = useState(0);

    const setButton = (button) => {
        if (button == 1) {
            setColor("red");
            setScore(score + 0);
            setCardState("closed");
        } else if (button == 2) {
            setColor("orange");
            setScore(score + 1);
            setCardState("closed");

        } else if (button == 3) {
            setColor("green");
            setScore(score + 1);
            setCardState("closed");
        }
    }
    

    console.log("SCORE: "+score);
    
    
    if (cardstate === "closed") { return <Closed state={setCardState} number={props.number} setbutton={setButton} Color={color}/> }
    else if (cardstate === "openedfront") { return <OpenedFront state={setCardState} card={props.card} setbutton={setButton} /> }
    else if (cardstate === "openedback") { return <OpenedBack state={setCardState} card={props.card} setbutton={setButton} Color={color}/> }
}