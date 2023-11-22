import React from "react";
import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default TotalScore;

let Container = styled.div`
  text-align: center;
  max-width: 130px;
  h1 {
    font-size: 100px;
    line-height: 10px;
    font-weight: 500;
    margin: 36px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
