import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../style/Button";
import Rules from "./Rules";

const Dice_Roller = ({ currentDice, rollDice, setScore }) => {
  const [showRules, setShowRules] = useState(false);


  return (
    <>
      <Dice_Controller>
        <div onClick={rollDice}>
          <img
            src={`/Images/DiceRoller/dice_${currentDice}.png`}
            alt="Dice no 1"
          />
        </div>
        <p>Click on dice to roll </p>

        <div className="btns">
          <Button className="reset-btn" onClick={() => setScore(0)}>
            Reset Score
          </Button>
          <Button
            onClick={()=>setShowRules((preV)=>!preV)}
          >
           {showRules ? "Hide":"Show"} Show Rules
          </Button>
        </div>
      </Dice_Controller>
      {showRules && <Rules />}
    </>
  );
};

export default Dice_Roller;

const Dice_Controller = styled.div`
  div {
    display: flex;
    justify-content: center;
    margin-top: 42px;

    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-size: large;
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
  }
  .btns {
    justify-content: center;
    gap: 20px;
    display: grid;
    margin-top: 42px;
    .reset-btn {
      background-color: white;
      color: black;
      border: 2px solid black;
    }
  }
`;
