import { useState } from "react";
import styled from "styled-components"

export default function Footer(props) {
    const [size, setSize] = useState(0);
    const [newscore, setNewScore] = useState([]);
    const [numScore, setNumScore] = useState(0);

    
    const itemscore = props.score;
    const sizeScore = itemscore.length;



    console.log("SCORE AFTER PROPS: "+itemscore)
    console.log("SIZE AFTER PROPS: "+sizeScore)

  
    const icon = (i) => {
        if (i == "red") {
            return "close-circle";
        } else if (i == "orange") {
            return "help-circle";
        } else if (i == "green") {
            return "checkmark-circle";
        }
    }

    const iconColor = (i) => {
        if (i == "red") {
            return "red";
        } else if (i == "orange") {
            return "orange";
        } else if (i == "green") {
            return "green";
        }
    }

    return (
        <AlignFooter>
            <h1>{numScore}/4 Concluidos</h1>
            <AlignIcons> 
            {itemscore.map((item, index) => {
                console.log("ITEMMMM: "+ item)
                return (
                    <ion-icon name={icon(item)} style={{color:`${iconColor(item)}`}}></ion-icon>
                )
            }
            )}
            </AlignIcons>
        </AlignFooter>
    )
}

const AlignFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const AlignIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ion-icon {
        width: 20px;
        height: 20px;
    }
`