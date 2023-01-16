import { useState } from 'react'

function UseStateDemo() {
    // use the state variable in the rendered component.
    // use button to update the state.
    const [color, setColor] = useState("pink");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button 
                type="button"
                onClick={() => setColor("blue")}
                >Change</button>
        </>
    )
}

export default UseStateDemo
