import { useState ,useCallback } from "react"

export default function App() {
  const [length ,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed ] = useState(false);
  const [charcterAllowed , setcharcterAllowed ] = useState(false);

  const [password , setPassword ] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) str += '0123456789'
    if(charcterAllowed) str += '!@#$%^&*()_+{}|:"<>?~';
  
    for(let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length ,numberAllowed , charcterAllowed ,setPassword])
  

  return (
    <>
      <div className="w-full max-w-md rounded-lg shadow-lg mx-auto my-10 p-1 ">
         <div className="flex flex-wrap flex-col shadow rounded-lg  bg-gray-700 text-white"
         >
          <h1 className="text-center text-3xl font-mono font-bold">Password Generator</h1>
            <div className="flex text-md mx-2 gap-x-4">
                <input 
                type="text" 
                value={password} 
                placeholder="password" 
                className="outline-none w-full py-1 px-3 rounded-lg read-only: font-mono text-black" />
                <button className=" font-mono font-bold border bg-slate-200 text-black rounded-lg px-4" onClick={passwordGenerator}>Copy</button>
            </div>
            <div className="flex max-md:flex-col text-md text-emerald-400 gap-x-6 mx-1">
              <div className="flex gap-x-1 items-center py-2">
                <input 
                type="range" 
                min={8}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}/>
                <label className="text-sm font-mono font-bold">Length:{length}</label>
              </div>
              <div className="flex gap-x-1 items-center py-2">
                <input 
                type="checkbox"
                defaultChecked={numberAllowed} 
                className="cursor-pointer"
                onChange={()=>{
                  setNumberAllowed((prev)=> !prev)
                }}/>
                <label className="text-sm font-mono font-bold">Numbers</label>
              </div>
              <div className="flex gap-x-1 items-center py-2">
                <input 
                type="checkbox"
                defaultChecked={charcterAllowed} 
                className="cursor-pointer"
                onChange={()=>{
                  setcharcterAllowed((prev)=> !prev)
                }}/>
                <label className="text-sm font-mono font-bold">Character</label>
              </div>
              
            </div>
          
          <div></div>
         </div>
      </div>
    </>
  )
}