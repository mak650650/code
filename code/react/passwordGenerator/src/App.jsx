import { useState ,useCallback ,useEffect , useRef} from "react"

export default function App() {
  //useState used to define state and give it to handle by react
  const [length ,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed ] = useState(false);
  const [charcterAllowed , setcharcterAllowed ] = useState(false);
  const [password , setPassword ] = useState("");

  // defining useRef
  let passwordRef = useRef(null);

  // linking useCallback to memoize the method alonside with its dependencies
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) str += '0123456789'
    if(charcterAllowed) str += '!@#$%^&*()_+{}|:"<>?~';
  
    for(let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length +  1)
      pass  += str.charAt(char)
    }
    setPassword(pass)
  },[length ,numberAllowed , charcterAllowed ,setPassword])

  // useEffect used for syncing change as per dependencies
  useEffect(()=>{passwordGenerator()} ,[length , numberAllowed ,charcterAllowed ,passwordGenerator])

  // useRef used for referencing value
  const copyPasswordToClipboard = useEffect(()=>{
    window.navigator.clipboard.writeText(password)
  } , [password])

  return (
    <>
      <div className="w-full max-w-2xl rounded-lg shadow-lg mx-auto my-10 p-1 ">
         <div className="flex flex-wrap flex-col shadow rounded-t-lg  bg-gray-700 text-white "
         >
          <h1 className="text-center text-3xl font-mono font-bold mb-5">Password Generator</h1>
            <div className="flex max-md:flex-col max-md:gap-2 text-md mx-2 gap-x-4 mb-2">
                <input 
                id="password_input"
                type="text" 
                value={password} 
                placeholder="password" 
                className="outline-none w-full py-1 px-3 rounded-lg  font-mono text-black"
                readOnly
                ref={passwordRef} />
                <button className=" font-mono max-md:mx-20 font-bold border bg-slate-300 text-black rounded-lg px-4 active:bg-slate-400" onClick={passwordGenerator}>Generate</button>
                <button className=" font-mono max-md:mx-20 font-bold border bg-slate-300 text-black rounded-lg px-6 active:bg-slate-400" onClick={copyPasswordToClipboard}>Copy</button>

            </div>
            <div className="flex justify-evenly max-md:flex-col  max-md:items-center text-md text-emerald-400 gap-x-6 mx-1 ">
              <div className="flex gap-x-1  py-2">
                <input 
                type="range" 
                min={8}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}/>
                <label className="text-md font-mono font-bold mt-1">Length:{length}</label>
              </div>
              <div className="flex gap-x-1 items-center py-1">
                <input 
                type="checkbox"
                defaultChecked={numberAllowed} 
                className="cursor-pointer "
                onChange={()=>{
                  setNumberAllowed((prev)=> !prev)
                }}/>
                <label className="text-md  mx-1 font-mono font-bold mt-1">Numbers</label>
              </div>
              <div className="flex gap-x-1 items-center py-2">
                <input 
                type="checkbox"
                defaultChecked={charcterAllowed} 
                className="cursor-pointer"
                onChange={()=>{
                  setcharcterAllowed((prev)=> !prev)
                }}/>
                <label className="text-md  mx-1 font-mono font-bold mt-1">Character</label>
              </div>
              
            </div>
     
        </div>
        <a href="https://github.com/mak650650" className="pt-3 max-md:pt-2">
          <div className=" flex bg-slate-100 max-md:text-sm  rounded-b-lg text-black font-mono font-semibold border border-white mt-3 h-12 justify-center gap-1">
              <span className="pt-3 max-md:pt-2">Created by: </span>
              <a href="https://imgur.com/Nkt2gd3"><img src="https://i.imgur.com/Nkt2gd3.png" title="source: imgur.com" /></a>
              <span className="pt-3 max-md:pt-2">Akash Mishra</span>
          </div>
        </a>   
        
      </div>
    </>
  )
}