import styled from "styled-components"
import setinha from "../../assets/img/setinha.png"


export default function OpenedFront(props) {
    return (
        <Card>
            <Question><h1>{props.card.Q}</h1></Question>
            
            <RotateCard>
                <img src={setinha} alt="setinha" onClick={() => props.state("openedback")}/>
                {/* <ion-icon name="reload-outline" onClick={(() => props.state("openedback"))}></ion-icon> */}
            </RotateCard>
        </Card>
    )
}


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 131px;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
`

const Question = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 75%;
    & h1{
        font-size: 16px;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        line-height: 22px;

`

const RotateCard = styled.div`
    height: 25%;
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    & img {
        width: 30px;
        height: 20px;
        cursor: pointer;
    }
`