function Button(props){
    const color = `${props.name.toLowerCase()}`
    return (
      <>
            <button
            className="outline-none px-8 py-2 rounded-2xl  font-md font-bold"
            style={{backgroundColor: props.name.toLowerCase(),color:`${props.txtColor}`}} onClick={()=> props.updateColor(`${color}`)}
            >{props.name}</button>
      </>
    )
}
export default Button