import { useState } from "react";

const UseContextDemo = () => {
    const [user, setUser] = useState("Jesse Hall");
    // Problem:
    // state should be held by the highest parent component in the stack that requires access to the state.
    // we have many nested components. The component at the top and bottom of the stack need acess to the state.
    // to do this without Context, we will nedd to pass the state as "props" through each nested component. 
    // This is called "prop drilling".
    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </>
    );
  }
  
  const Component2 = ({ user }) => {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  
  const Component3 = ({ user }) => {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }
  
  const Component4 = ({ user }) => {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }
  
  const Component5 = ({ user }) => {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

 export default UseContextDemo