import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #111;
  height: 60px;

  a {
    text-decoration: none;
    font-size: 28px;
    font-weight: 600;
    color: var(--black);
  }

  button {
    width: 112px;
    height: 28px;
    border: none;
    background-color: var(--black);
    color: var(--background);
    font-weight: bold;
    border-radius: 1000px;
    transition: all 0.2s;

    & + button {
      margin-left: 28px;
    }

    :hover {
      transform: scale(1.05);
    }
  }
`;
