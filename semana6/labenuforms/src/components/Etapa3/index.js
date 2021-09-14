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

export default class ThirdStep extends React.Component {
  render() {
    return (
      <Container>
        <h1>ETAPA 2 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <label>5. Por que você não terminou um curso de graduação?</label>
        <input type="text" />
        <label>6. Você fez algum curso complementar?</label>
        <select>
          <option value="">Nenhum</option>
          <option value="">Curso técnico</option>
          <option value="">Ensino de inglês</option>
        </select>
        <button onClick={this.props.changeStep}>Próxima etapa</button>
      </Container>
    );
  }
}
