import React from "react";

const Child = ({ count, setCount }) => {
    console.log('This is Child component')

  return (
    <div className="flex justify-center">
      <button
        className="text-red-600 px-2 py-1 border"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Child;
