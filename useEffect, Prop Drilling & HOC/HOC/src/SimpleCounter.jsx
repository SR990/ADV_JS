import { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow w-fit mx-auto mt-10 text-center">
      <h2 className="text-xl mb-2">Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}

export default SimpleCounter;
