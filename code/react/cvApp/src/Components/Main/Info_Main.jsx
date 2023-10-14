
function Info_Main() {
    return (
        <>
           <div className="bg-gray-600 text-white h-40 my-10 mx-10 rounded-3xl max-[1100px]:h-60" >
                <div className="flex justify-evenly max-[1100px]:flex-col max-[1100px]:mx-5 max-[1100px]:align-text-top max-md:text-center">
                    <h1 className=" text-4xl font-bold px-0 mt-5  ">Resume maker</h1>
                    <div className=" mt-5 max-md:text-center">
                        <button className="px-5 rounded-3xl bg-slate-900 hover:bg-slate-700 py-2 mr-1 ">Save</button>
                        <button className="px-5 rounded-3xl bg-slate-900 hover:bg-slate-700 py-2">Autofill</button>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="mr-2 mt-2 font-normal"><span>Created by</span></div>
                    <button className="rounded-3xl px-3 flex h-10 pt-2  bg-neutral-500 hover:bg-neutral-600">
                        <img className="w-full h-3 pr-2 mt-1" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" />
                        <a href="https://www.github.com/mak650650">mak650650</a>
                    </button>
                </div>
           </div>
        </>
    )
}

export default Info_Main