import styled from "styled-components";

const SlectNumbers = ({ error, setError , slectednumber, setSlectedNumber }) => {
  const numbersArray = [1, 2, 3, 4, 5, 6];

  const numberSelectorHendler=(value)=>{
    setSlectedNumber(value);
    setError("")
  }

  return (
    <>
      <Parent_Container>
        <p className="error">{error}</p>
        <Box_Container>
          {numbersArray.map((value, index) => (
            <Box
              key={index}
              onClick={() => {numberSelectorHendler(value)}}
              isSelected={value == slectednumber}
            >
              {value}
            </Box>
          ))}
        </Box_Container>
        <p>Select number</p>
      </Parent_Container>
    </>
  );
};
export default SlectNumbers;

const Parent_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  p {
    font-weight: 700;
    font-size: large;
  }
  .error {
    color: red;
  }
`;

const Box_Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Box = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  font-weight: 700;
  font-size: x-large;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    cursor: pointer;
    background-color: #c3c3c3;
  }`;