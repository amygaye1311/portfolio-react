import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        -
      </button>
      <span className="text-lg font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}

export default Counter;