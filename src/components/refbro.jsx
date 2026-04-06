import React, { useEffect, useRef, useState } from 'react'

const Refbro = () => {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)
//   console.log('helo bro');
  useEffect(() => {
    renderCount.current += 1;
    // setCount(count+1)
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <h1>Count: {count}</h1>
      <h1>Render Count: {renderCount.current}</h1>
    </div>
  )
}

export default Refbro