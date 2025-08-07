import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
    const centiSeconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${centiSeconds}`;
  };

  return (
    <>
      
      <div className=' m-auto my-50 size-fit p-15 px-8 rounded-2xl bg-gray-800 shadow-[4px_4px_10px_black]  '>
        <h1 className='text-white text-3xl mb-4 text-center font-semibold '>STOPWATCH</h1>
        <div className='text-white bg-blue-700 px-10 p-5 rounded-2xl shadow-2xl text-4xl font-mono font-semibold mb-4  '>
          {formatTime(time)}
        </div>
        <div className='space-x-4 text-center '>
          <button onClick={() => setIsRunning(true)} className="mt-4 transition-all duration-250 bg-green-500 hover:bg-green-700 rounded-md text-white font-semibold px-3 py-1.5 cursor-pointer">Start</button>
          <button onClick={() => setIsRunning(false)} className="transition-all duration-250 bg-yellow-400 hover:bg-yellow-600 rounded-md text-white font-semibold px-3 py-1.5 cursor-pointer">Stop</button>
          <button onClick={() => { setIsRunning(false); setTime(0); }} className="transition-all duration-250 hover:bg-red-700 bg-red-600 rounded-md text-white font-semibold px-3 py-1.5 cursor-pointer">Reset</button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
