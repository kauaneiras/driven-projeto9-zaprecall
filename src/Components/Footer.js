import { useState } from "react";
import styled from "styled-components"

export default function Footer(props) {
       
    const itemscore = props.score;
    
    const score = () => {
        let scorevalue = 0;
        itemscore.forEach( s => {  
            if (s == "green") {
                scorevalue += 1;
            } else if (s == "orange") {
                scorevalue += 1;
            } else if (s == "red") {
                scorevalue += 0;
            }
        });
        return scorevalue;
    }
        

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
            <h1 data-identifier="flashcard-counter">{score()}/4 Concluidos</h1>
            <AlignIcons> 
            {itemscore.map((item, index) => {
                return (
                    <ion-icon name={icon(item)} style={{color:`${iconColor(item)}`}} key={index}></ion-icon>
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