import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import SlectNumbers from "./SlectNumbers";
import styled from "styled-components";
import Dice_Roller from "./Dice_Roller";

function PlayGame() {
  const [score, setScore] = useState(0);
  const [slectednumber, setSlectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");


  const random_number_genrator = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!slectednumber) {
      setError("You do not selected any number");
      return;
    }
    // setError("");
    let randomNumber = random_number_genrator(1, 7);
    setCurrentDice(() => randomNumber);

    if (slectednumber == randomNumber) {
      setScore((preValue) => preValue + slectednumber);
    } else {
      setScore((preValue) => preValue - 2);
    }

    setSlectedNumber(undefined);
  };

  return (
    <Main_Container>
      <div className="top_section">
        <TotalScore score={score} />
        <SlectNumbers
          error={error}
          setError={setError}
          slectednumber={slectednumber}
          setSlectedNumber={setSlectedNumber}
        />
      </div>
      <Dice_Roller
        setScore={setScore}
        currentDice={currentDice}
        rollDice={rollDice}
      />
    </Main_Container>
  );
}
export default PlayGame;

const Main_Container = styled.main`
  .top_section {
    justify-content: space-around;
    display: flex;
    margin-top: 36px;
    margin-top: 36px;
  }
`;
