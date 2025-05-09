import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CounterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-yellow-400 drop-shadow-md">
        🚗 Car Speedometer
      </h1>

      <div className="bg-gray-800 rounded-xl shadow-2xl p-10 w-full max-w-sm text-center">
        <p className="text-lg text-gray-300 mb-4">Current Speed</p>
        <div className="text-6xl font-bold text-yellow-400 mb-6 border-4 border-yellow-400 rounded-full p-6">
          {count}
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Brake
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Accelerate
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Turbo +5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
