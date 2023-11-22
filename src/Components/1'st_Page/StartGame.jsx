import React from "react";
import styled from "styled-components";
import { Button } from "../../style/Button";

function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="Images/fontDice.png" alt="" style={{height:"522px",width:"649px"}}/>
      </div>

      <div>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;