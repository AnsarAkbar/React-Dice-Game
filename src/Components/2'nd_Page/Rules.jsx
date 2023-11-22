import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesController>
      <h2>How to play dice game</h2>
      <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesController>
  );
};

export default Rules;

let RulesController = styled.div`
  margin: 0 auto;
  max-width: 671px;
  padding: 20px;
  margin-top: 20px ;
  background-color: #fbf1f1;
  border-radius: 5px;
  margin-bottom: 40px ;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
  }
  p {
    margin: 0px;
    font-size: 16px;
    font-weight: 500;
  }
`;
