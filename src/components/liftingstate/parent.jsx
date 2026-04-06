import React, { useState } from "react";
import Child from "./child";
import Display from "./display";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("This is Parent component");

  return (
    <div>
      <Child count={count} setCount={setCount} />
      <Display count={count} />
    </div>
  );
};

export default Parent;
