import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  /* height: 400px; */

  label {
    font-size: 20px;
    margin-bottom: 4px;
  }

  input {
    margin-bottom: 16px;
    width: 100%;
    height: 40px;
    padding: 4px;
    font-size: 20px;
  }

  select {
    height: 40px;
    font-size: 20px;
  }

  option {
    font-size: 20px;
  }

  button {
    margin-top: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default class SecondStep extends React.Component {
  render() {
    return (
      <Container>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <label>5. Qual seu curso?</label>
        <input type="text" />
        <label>6. Qual a unidade de ensino?</label>
        <input type="text" />
        <button onClick={this.props.changeStep}>Próxima etapa</button>
      </Container>
    );
  }
}
