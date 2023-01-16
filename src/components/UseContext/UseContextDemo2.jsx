import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UseContextDemo2 = () => {
    const [user, setUser] = useState("Bill Gates");
    // Problem:
    // state should be held by the highest parent component in the stack that requires access to the state.
    // we have many nested components. The component at the top and bottom of the stack need acess to the state.
    // to do this without Context, we will nedd to pass the state as "props" through each nested component. 
    // This is called "prop drilling".
    return (
      <>
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
      </>
    );
  }
  
  const Component2 = () => {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  const Component3 = () => {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  const Component4 = () => {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  const Component5 = () => {
    const user = useContext(UserContext);

    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

 export default UseContextDemo2