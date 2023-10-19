import { info } from "autoprefixer"

export default function Task(props){
   
    return(
        <>
        <div className=" flex gap-6 relative h-10 mx-10 bg-neutral-900 my-4 rounded-lg z-1">
                <input 
                    type="checkbox" 
                    name="" 
                    id=""
                    className="w-5 form-checkbox ml-2" />
                <span className="font-sans text-2xl text-white pt-1">{props.content}</span>

                <div className="flex justify-end  bg-transparent absolute right-0 px-6 gap-4 ">
                    
                    <button onClick={()=>{alert('edit')}}>
                        <img className="h-6" src='https://i.imgur.com/eqyurQy.png/'/>
                    </button>
                    <div className="flex ">
                        <button onClick={()=>{alert('delete')}}>
                            <img className="h-10" src='https://i.imgur.com/JBTuQW4.png'/>
                        </button>
                        <label className="bg-transparent border-gray-600  text-red-300 rounded-3xl pl-4 pt-2 text-md font-sans font-bold " >
                            i
                            <div id="info" className=" invisible absolute rounded-b-xl rounded-l-xl
                             w-full  h-8 bg-slate-500 right-8 top-5"></div>
                        </label>

                    </div>
                    
                </div>
        </div>     
        </>
    )
}