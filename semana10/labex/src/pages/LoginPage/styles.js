import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  form {
    padding: 20px;
    border: 1px solid #111;
    width: 320px;
    display: flex;
    flex-direction: column;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    label {
      margin-bottom: 4px;
    }

    input {
      width: 100%;
      border: 1px solid #111;
      height: 32px;
      border-radius: 1000px;
      margin-bottom: 8px;
    }

    button {
      width: 100%;
      margin-top: 16px;
      border: none;
      background-color: var(--black);
      color: var(--background);
      border-radius: 1000px;
      height: 32px;
    }
  }
`;
