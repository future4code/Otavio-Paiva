import React from "react";
import styled from "styled-components";
import FirstStep from "./components/Etapa1/index";
import SecondStep from "./components/Etapa2/index";
import ThirdStep from "./components/Etapa3/index";
import FinalStep from "./components/Final/index";

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

export default class App extends React.Component {
  state = {
    step: 1,
  };

  pageRender = () => {
    if (this.state.step === 1) {
      return <FirstStep changeStep={() => this.setState({ step: 2 })} />;
    } else if (this.state.step === 2) {
      return <SecondStep changeStep={() => this.setState({ step: 3 })} />;
    } else if (this.state.step === 3) {
      return <ThirdStep changeStep={() => this.setState({ step: 4 })} />;
    } else if (this.state.step === 4) {
      return <FinalStep />;
    }
  };

  render() {
    return <Container>{this.pageRender()}</Container>;
  }
}
