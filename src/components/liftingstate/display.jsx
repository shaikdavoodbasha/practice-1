import React from 'react'

const Display = ({count}) => {
    console.log('This is Display component')
  return (
    <div>
      <h1 className='text-center'>{count}</h1>
    </div>
  )
}

export default Display
