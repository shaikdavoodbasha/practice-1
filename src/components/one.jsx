import React, { useState } from "react";

const One = ({name1}) => {
  const [count, setCount] = useState(0);
    console.log('I am rendering')

  // useState(()=>{
  //   console.log('I am rendering')
  // },[count])
  return (
    <div>
      <h1 className="text-red-800">Fetching Data from Api</h1>
      <h2 className="text-red-600 text-center">Counter app bro</h2>
      <div className="flex justify-center items-center gap-5 mt-5">
        <button
          className="bg-red-500 px-2 py-1 border rounded-[10px] text-white"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
         <button
          className="bg-red-500 px-2 py-1 border rounded-[10px] text-white"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
         <button
          className="bg-red-500 px-2 py-1 border rounded-[10px] text-white"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <h1>The Count values is : <span className="text-green-500">{count}</span></h1>
        <p>this is prop bro : <span className="text-amber-300">{name1}</span></p>
      </div>
    </div>
  );
};

export default One;
