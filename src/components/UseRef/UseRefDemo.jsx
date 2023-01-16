import React, { useState, useEffect, useRef } from "react";

const UseRefDemo = () => {
    // if we tried to count how many times our application renders using the useState Hook,
    // we would caught in an infinite loop since this Hook itself causes a re-render.
    // to avoid this, we can use the useRef Hook.
    // useRef() only returns one item. It returns an Object called current.
    // when we initialise useRef we set the initial value: useRef(0).
    // const count = {current: 0}. We can access the count by using count.current.
    const [inputValue, setInputValue] = useState("");
    const refCount = useRef(0);
    const inputElement = useRef();
    const previousInputValue = useRef("");

    useEffect(() => {
        //console.log(refCount);
        console.log(refCount.current);
        refCount.current = refCount.current + 1;
    });

    // we can add a ref attribute to an element to access it directly in the DOM.
    // by clicking the button, the input field will get focus.
    const focusInput = () => {
        inputElement.current.focus();
      };

    // the useRef Hook can also be used to keep track of previous state values.
    // this is because we are able to persist useRef values between renders.
    // we use a combination of useState, useEffect, and useRef to keep track of the previous state.
    // in the useEffect, we are updating the useRef current value each time the inputValue
    // is updated by entering text into the imput field.
    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {refCount.current}</h1>

            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
            <br/><br/>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    )
}

export default UseRefDemo
