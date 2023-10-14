import { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState('black');
 
  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0  mx-10 p-10">
        <div className="flex flex-wrap border-2 justify-center gap-3 shadow-xl bg-white rounded-2xl px-3 py-2">
            <Button name="Red" txtColor="white" updateColor={setColor}/>
            <Button name="Blue" txtColor="white" updateColor={setColor}/>
            <Button name="Green" txtColor="white" updateColor={setColor}/>
            <Button name="Yellow" txtColor="black" updateColor={setColor}/>
            <Button name="black" txtColor="white" updateColor={setColor}/>

        </div>
        
      </div>
    </div>

  )
}

export default App
