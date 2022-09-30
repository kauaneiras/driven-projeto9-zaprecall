import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import Game from './Game';


export default function Start() {
    
    const [selectValue, setSelectValue] = useState(1);  
    const list = [
      {id: 1, name: 'Escola um deck'},
      {id: 2, name: 'DeckZapRecall'},
      {id: 3, name: 'Bleach'},
    ];

    const idDeck = selectValue;


    return (
        <AlignCenter>
            <ImageSize src={logo} />
            <Title>ZapRecall</Title>
            <SelectDeck value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                {list.map((item, index) => (
                    <option value={item.id} key={index}>{item.name}</option>
                ))}
            </SelectDeck>
            <StartButton>{selectValue === 1 ? (<Link to = {`/`} style={{textDecoration:"none"}}>Iniciar Recall</Link>) : (<Link to = {`/game/${idDeck}`}>Iniciar Recall</Link>)}</StartButton>
        </AlignCenter>
    )
}


const AlignCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #FB6B6B;
`
const ImageSize = styled.img`
    width: 136px;
    height: 161px;
    margin-bottom: 20px;
`

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 40px;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 25px;
`

const SelectDeck = styled.select`
    width: 75%;
    max-width: 400px;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 20px;
`

const StartButton = styled.button`
    width: 75%;
    height: 54px;
    max-width: 400px;
    border-radius: 5px;
    color: #D70900;
    background-color: #FFFFFF;
    border: 1px solid #D70900;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
`