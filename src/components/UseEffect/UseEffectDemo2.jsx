import React, { useState, useEffect } from 'react'

const UseEffectDemo2 = () => {
    const [count, setCount] = useState(0);
  
    // An empty array
    // Runs only on the first render
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);
  
    return (
      <>
        <h1>I've rendered {count} times!</h1>
      </>
    )
  }
  
  export default UseEffectDemo2
