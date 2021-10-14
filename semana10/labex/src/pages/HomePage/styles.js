import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80");
`;

export const Content = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  > div {
    width: 30%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 40px;
      font-weight: bold;
      text-transform: uppercase;
    }

    span {
      color: var(--shape);
    }

    p {
      margin-top: 20px;
    }
  }

  img {
    margin-left: 40px;
  }
`;
