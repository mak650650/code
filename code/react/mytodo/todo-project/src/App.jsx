import { useState } from "react";
import Task from "./child_component/Task";


export default function App() {
  const [task , setTask] = useState(null);
  const [time , setTime] = useState(null);
  const [date , setDate] = useState(null);
  
  return (
        <>
        <div className="w-full overflow-y-hidden   max-w-7xl mx-auto my-10 ">
          <div className="rounded-xl  bg-neutral-800 text-white border-2 border-gray-600 shadow-2xl font-sans">
              {/* Heading */}
              <div className="flex justify-center gap-8">
                  <div className="text-6xl py-10 my-6 w-20 h-2 border-4 border-sky-500 bg-sky-500 relative z-0">
                      <div className="absolute w-full h-2 rounded-lg shadow-lg bg-stone-900  z-1 rotate-140 -translate-y-21 translate-x-4"></div>
                      <div className="absolute w-1/2 h-3 rounded-lg shadow-lg bg-stone-900  z-1 origin-center translate-y-2 rotate-45"></div>
                  </div>
                      <h1 className="text-6xl py-10 underline font-sans text-sky-500 font-bold">My Todo</h1>
                </div>
      
          {/* Task Add button ,time and input */}
          <div className=" mx-10">
              <div className="max-w-4xl mx-auto flex flex-col">
                  <div className="bg-neutral-900 rounded-lg gap-2 px-5 border-2 border-gray-600 shadow-2xl flex justify-around">
                      <input type="text" name="task" id="" className=" my-5 bg-neutral-900 active:outline-none active:border-0 rounded-md w-2/3 py-2 pl-3 text-white focus:outline-none" placeholder="Add your task"/>
                      <input 
                      type="time" 
                      name="" 
                      id="" 
                      className="bg-gray-300 my-5 rounded-md py-2 px-3 text-black  border-0 focus:outline-none"/>
                      <input 
                      type="date" 
                      name="" id="" 
                      className="bg-gray-300 active::bg-black my-5 rounded-md py-2 pl-3 text-black focus:outline-none"/>
                  
                  </div>
                  <div className="flex justify-center">
                      <button  className=" rounded-md text-center px-20 py-2 mt-3 text-white bg-sky-700 font-md font-semibold">ADD</button>
                  </div>
                  <label className="text-center text-gray-500 font-sans m-0 text-md w-full h-7">
                      <span className="invisible">new task is added </span>
                  </label>
              </div>

              

              {/* Tasks dashboard */}
              <div className="overflow-auto hover:overflow-y-scroll ">
              <div className=" h-96   py-5 text-black">
                  <Task content='do this Task 1' deadline="today"/>
                  <Task content='do this Task 2'/>
                  <Task content='do this Task 3'/>
                  <Task content='do this Task 2'/>
                  <Task content='do this Task 3'/> 
                  <Task content='do this Task 2'/>
                  <Task content='do this Task 3'/> 
                  <Task content='do this Task 2'/>
                  <Task content='do this Task 3'/> 
                  <Task content='do this Task 2'/>
                  <Task content='do this Task 3'/>
              </div>
              </div>
          <div className="w-full h-5"></div>
          </div>
          </div>
      </div>
        </>
  )}