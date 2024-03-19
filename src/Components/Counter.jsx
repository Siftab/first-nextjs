"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p className="text-4xl text-cyan-400 font-semibold">Counter :{counter}</p>
      <button
        className="px-4 py-6 bg-amber-300 m-7 rounded-lg"
        onClick={() => setCounter(counter + 1)}
      >
        Plus
      </button>
      <button
        className="px-4 py-6 bg-amber-300 m-7 rounded-lg"
        onClick={() => setCounter(counter - 1)}
      >
        Minus
      </button>
    </div>
  );
};

export default Counter;
