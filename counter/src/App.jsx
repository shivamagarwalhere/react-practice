import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  
  const addValue = () => {
    if (counter<20) counter = counter+1;
    else counter = 20;
    setCounter(counter);
    console.log("value current:", counter);
  }

  const removeValue = () => {
    if (counter<1) counter=0;
    else counter = counter-1;
    setCounter(counter);
    console.log("value current:", counter);
  }

  return (
    <>
      <h1>Project Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>   
      
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
