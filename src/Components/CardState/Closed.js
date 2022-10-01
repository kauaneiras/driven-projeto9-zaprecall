import styled from "styled-components"

export default function Closed(props) {
    return (
        <Card>
            <CardAnswer>Pegunta {props.number}</CardAnswer>
            <ion-icon name="play-outline" onClick={(() => props.state("openedfront"))}></ion-icon>
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
        cursor: pointer;
    }
`

const CardAnswer = styled.h1`
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-right: 160px;
`
