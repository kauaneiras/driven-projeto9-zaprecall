import styled from "styled-components"
import logo from '../assets/img/logo-pequeno.png';

export default function Header(){
    return(
        <AlignTopItens>
            <ImageSize src={logo} />
            <Title>ZapRecall</Title>
        </AlignTopItens>
    )
}

const AlignTopItens = styled.div`
    top: 0;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const ImageSize = styled.img`
    width: 52px;
    height: 60px;
    margin-right: 20px;

`

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
    color: #FFFFFF;
`