import { useState } from "react";
import styled from "styled-components"

export default function Footer(props) {
       
    const itemscore = props.score;
    const heightFooter = () => {
        if (itemscore.length == 0) {
            return "70px"
        } else {
            return "126px"
        }
    }
    
    const score = () => {
        let scorevalue = 0;
        itemscore.forEach( s => {  
            if (s == "green") {
                scorevalue += 1;
            } else if (s == "orange") {
                scorevalue += 1;
            } else if (s == "red") {
                scorevalue += 1;
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
        <AlignFooter heightFooter={heightFooter}>
            <FooterCounter data-identifier="flashcard-counter">{score()}/4 Concluidos</FooterCounter>
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
    height: ${props => props.heightFooter};
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const AlignIcons = styled.div`
    display: flex;
    margin-top: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ion-icon {
        width: 25px;
        height: 25px;
    }
`

const FooterCounter = styled.h1`
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`