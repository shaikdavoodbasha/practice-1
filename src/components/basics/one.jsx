import { useState } from "react";

function One() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React 🚀</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default One;