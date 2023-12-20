import React, {useState} from 'react';
import MyButton from "./components/UI/button/MyButton";
import {findAllByDisplayValue} from "@testing-library/react";


function App() {
  const [counter, setCounter] = useState<number>(0)
  return (
      <div>
        <MyButton onClick={setCounter(()=>counter+1)}>Кнопка</MyButton>
        <div>{counter}</div>
      </div>


  );
}

export default App;
