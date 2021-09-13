import React from "react";
import styled from "styled-components";
import SecondStep from "../Etapa2/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  /* height: 400px; */
  padding: 20px;

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

export default class FirstStep extends React.Component {
  render() {
    return (
      <Container>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <label>1. Qual o seu nome?</label>
        <input type="text" />
        <label>2. Qual sua idade?</label>
        <input type="text" />
        <label>3. Qual seu email?</label>
        <input type="text" />
        <label>4. Qual sua escolaridade?</label>
        <select>
          <option value="">Ensino médio incompleto</option>
          <option value="">Ensino médio completo</option>
          <option value="">Ensino superior incompleto</option>
          <option value="">Ensino superio completo</option>
        </select>
        <button onClick={this.props.changeStep}>Próxima etapa</button>
      </Container>
    );
  }
}
