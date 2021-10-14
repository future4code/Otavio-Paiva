import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const TripContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TripBoard = styled.div`
  border: 1px solid #111;
  margin-top: 20px;
  margin-left: 20px;
  width: 320px;
  height: 200px;

  h1 {
    font-size: 16px;
  }
`;
