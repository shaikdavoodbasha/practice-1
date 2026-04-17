import React, { useContext, useState } from 'react'
import Child from './child'
import { MainContext } from '../../context/appcontext'

const Parent = () => {
    const {name1} = useContext(MainContext)
    const [childData,setChildData] = useState('')
    const fromChild = (childData)=>{
        setChildData(childData)

    }
  return (
    <div>
        <h1>This is from context api {name1}</h1>
      <Child sendDataToParent={fromChild} />
      <h1>This is from child {childData}</h1>
    </div>
  )
}

export default Parent
