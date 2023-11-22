import { useState } from "react";
import StartGame from "./Components/1'st_Page/StartGame";
import PlayGame from "./Components/2'nd_Page/PlayGame";

function App() {
  const [isGameStart, setisGameStart] = useState(false);

  let toggleGamePlay = () => {
    setisGameStart((previousVal) => !previousVal);
  };
  return (
    <>{isGameStart ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;