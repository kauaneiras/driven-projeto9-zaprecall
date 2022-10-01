import styled from "styled-components"


export default function OpenedFront(props) {
    return (
        <Card>
            <h1>{props.card.Q}</h1>
            <ion-icon name="reload-outline" onClick={(() => props.state("openedback"))}></ion-icon>
        </Card>
    )
}


const Card = styled.div`
    width: 300px;
    height: 131px;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
`