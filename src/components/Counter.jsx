import React, { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);
  const IncCount = () => {
    setCount(count + 1);
  };
  return (
    <>
    <div className="flex flex-col items-center gap-3 h-screen font-thin my-24">
        <div className="text-xl">How much do you love me?Click here to say. Then take a screenshot and send me .</div>
      <div className="text-6xl font-extrabold">{count}</div>
      <button className="bg-blue-600 text-white text-3xl uppercase tracking-tighter px-10 py-5 my-4 border hover:shadow-xl hover:transition-colors hover:shadow-blue-500 hover:bg-white hover:text-blue-600 border-blue-500" onClick={IncCount}>Click Me</button>
    </div>
    
    </>
  );
};

export default Counter;
