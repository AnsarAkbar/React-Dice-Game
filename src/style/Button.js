import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 30px;
  background: black;
  color: white;
  border: none;
  text-align: center;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.2s background ease-in;
  }
`;
