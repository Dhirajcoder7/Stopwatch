import React from 'react'
import {useEffect ,useState} from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
  const FirstCall = () => {
    setCount(count + 1);
  }
 
  function Call() {
    console.log("Hello World");
  }
  useEffect(() => {
    Call();
  },[]);
  // Call();
  return (
    <div>
        <h1>Counter Function</h1>
       <button onClick={FirstCall}>Increment</button>
       <button onClick={() => setCount(0)}>Reset</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default Counter
