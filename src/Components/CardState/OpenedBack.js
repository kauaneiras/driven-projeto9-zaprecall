import styled from "styled-components"

export default function OpenedBack(props) {
        

    return (
        <Card>
            <Answer><h1 data-identifier="flashcard-answer">{props.card.R}</h1></Answer>
            <AlignButtons>
                <NAOLEMBREI data-identifier="forgot-btn" onClick={()=> props.setbutton(1)} disabled={props.Color != "black" ? true : false}><h1>Não Lembrei</h1></NAOLEMBREI>
                <QUASENAOLEMBREI data-identifier="almost-forgot-btn" onClick={()=> props.setbutton(2)} disabled={props.Color != "black" ? true : false}><h1>Quase não lembrei</h1></QUASENAOLEMBREI>
                <ZAP data-identifier="zap-btn" onClick={()=> props.setbutton(3)} disabled={props.Color != "black" ? true : false}><h1>Zap!</h1></ZAP>
            </AlignButtons>

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

const Answer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 60%;
    & h1{
        font-size: 16px;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        line-height: 22px;

`
const AlignButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 40%;
`

const NAOLEMBREI = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #FC1414;
    & h1{
        align-text: center;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`
const QUASENAOLEMBREI = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    border: 1px solid #FC8823;
    cursor: pointer;
    & h1{
        align-text: center;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`
const ZAP = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    border: 1px solid #1BB720;
    
    cursor: pointer;
    & h1{
        align-text: center;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`
