import React from 'react';
import {Container} from './styles.js'

function ImagemButton(props) {
    return (
        <Container>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Container>

    )
}

export default ImagemButton;