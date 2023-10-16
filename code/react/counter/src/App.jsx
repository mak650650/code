import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter + 1);
      console.log("Added",counter);
    }
    else{
      console.log(`We are at upper limit of ${counter}.`);
    }
  };
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
      console.log("Removed",counter);
    }
    else{
      console.log(`We are at lower limit of ${counter}.`);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>


      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
      <p></p>
    </>
  )
}

export default App
