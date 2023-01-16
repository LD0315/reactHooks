import React, { useState, useEffect } from 'react'

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  // No dependency passed
  // Runs on every render
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default UseEffectDemo