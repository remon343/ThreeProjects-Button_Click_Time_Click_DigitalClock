

import React ,{useState} from 'react'

const Time = () => {
    let newTime = new Date().toLocaleTimeString('en-US');
    const [currTime, setCurrTime] = useState(newTime);
  
    const updateTime = () => {
      newTime = new Date().toLocaleTimeString();
      setCurrTime(newTime);
    };
    return (
      <div className="flex flex-col items-center gap-3 h-screen font-thin my-24">
        <div className="text-xl">
         Click to refresh the time 
        </div>
        <div className="text-6xl font-extrabold">{currTime}</div>
        <button
          className="bg-blue-600 text-white text-3xl uppercase tracking-tighter px-10 py-5 my-4 border hover:shadow-xl hover:transition-colors hover:shadow-blue-500 hover:bg-white hover:text-blue-600 border-blue-500"
          onClick={updateTime}
        >
          Get Time
        </button>
      </div>
    );
}

export default Time;

