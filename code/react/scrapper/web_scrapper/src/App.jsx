import { useId, useState } from "react"

function App() {
  const id = useId();
  const [pkg , setPkg] = useState();
  const handleInput = (e) =>{
    setPkg(e.target.value)
  }
  const handleClick = (pkg) => {
      const data = fetch(`https://study.iitm.ac.in/ds/`)
      .then((res)=>{data=res.text})
      console.log(data)
  }
  return (
    <div className="bg-black w-full h-screen text-white p-32 flex justify-center">
      <div className="flex w-64 flex-col">
        <input 
        type="search"
        id={id}
        placeholder="Package"
        className="py-8 rounded-xl h-12 focus:outline-none outline-none text-black px-5"
        onChange={()=>(handleInput())}
         />
         <button
         className="bg-gray-700 rounded-lg py-2 mx-10 mt-2"
          onClick={() => (handleClick())}>Fetch</button>
      </div>
    </div>
  )
}

export default App