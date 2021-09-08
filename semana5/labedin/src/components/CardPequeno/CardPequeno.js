import React from 'react';
import {Container} from './styles.js';



function CardPequeno(props) {
    return (
        <Container>
            <img src={ props.imagem } />
            <h4><b>{props.titulo}</b> : {props.texto}</h4>            
        </Container>
    )
}

export default CardPequeno;