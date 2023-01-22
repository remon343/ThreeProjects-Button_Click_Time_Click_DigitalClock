import React, { useState } from "react";

const DigitalClock = () => {

    let newTime = new Date().toLocaleTimeString();
    const[currTime , setCurrTime] = useState(newTime);

    const updateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCurrTime(newTime);
    };

    setInterval(updateTime,1000);

  return (
    <div className="flex flex-col items-center gap-3 h-screen font-thin my-24">
      <div className="text-xl">
       A digital clock refreshing time by itself. 
      </div>
      <div className="text-6xl font-extrabold">{currTime}</div>
      
    </div>
  );
};

export default DigitalClock;
