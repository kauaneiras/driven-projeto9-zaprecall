import styled from "styled-components"

export default function Closed(props) {

    const icon = () => {
        if (props.Color == "black") {
            return "play-outline";
        } else if (props.Color == "red") {
            return "close-circle";
        } else if (props.Color == "orange") {
            return "help-circle";
        } else if (props.Color == "green") {
            return "checkmark-circle";
        }
    }

    
    return (
        <Card>
            <CardAnswer data-identifier="flashcard-index-item"
            style={props.Color == "black" ? { textDecoration:'none'} : {textDecoration:'line-through', color: `${props.Color}`}}
            >Pegunta {props.number}</CardAnswer>
            <ion-icon name={icon()}  data-identifier={(()=>props.Color == "black"? "flashcard-show-btn" : "flashcard-status")} onClick={(() => props.Color == "black" ? props.state("openedfront"): null)} style={props.Color == "black" ? {cursor: 'pointer', color: 'black'} : {cursor: 'default', color: `${props.Color}`}}></ion-icon>
            
        </Card>
    )
}


const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 25px;
    ion-icon {
        width: 30px;
        height: 34px;
    }
`

const CardAnswer = styled.h1`
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-right: 160px;
`
