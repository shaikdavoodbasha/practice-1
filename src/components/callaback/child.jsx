import React, { useState } from 'react'

const Child = ({sendDataToParent}) => {
    const[input,setInput]  =useState("")
    const handleInput = ()=>{
        sendDataToParent(input)
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleInput}>Sending Data to parent</button>
    </div>
  )
}

export default Child
