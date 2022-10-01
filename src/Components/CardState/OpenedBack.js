import styled from "styled-components"

export default function OpenedBack(props) {
    return (
        <Card>
            <h1>{props.card.R}</h1>
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