import './App.css';
import StarbucksInput from './components/starbucks-input';
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Ank")
  const onChangeHandler = (newValue) => {
    setValue(newValue)
  }
  
  return (
    <div className="App">
     <StarbucksInput
        name='nickname'
        value={value}
        onChange={onChangeHandler}
        />
    </div>
  );
}

export default App;
