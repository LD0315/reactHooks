import React, { useState, useEffect } from 'react'

const UseEffectDemo3 = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    // Runs on the first render
    // render dependent on variable changes
    // If the count variable updates, the effect will run again
    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]);
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    )
  }
  
  export default UseEffectDemo3
