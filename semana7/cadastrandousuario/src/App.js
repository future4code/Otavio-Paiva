import React from "react";
import styled from "styled-components";

import { Register } from "./components/Register";
import { UserList } from "./components/UserList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class App extends React.Component {
  state = {
    step: 1,
  };

  handlePageRender = () => {
    if (this.state.step === 1) {
      return <Register changeStep={() => this.setState({ step: 2 })} />;
    } else if (this.state.step === 2) {
      return <UserList changeStep={() => this.setState({ step: 1 })} />;
    }
  };

  render() {
    return <Container>{this.handlePageRender()}</Container>;
  }
}
