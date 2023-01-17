import React from 'react';

const PropsDemo = () => {
    const carName = "Honda"

    const Car = (props) => {
        return <h2>I am a { props.brand }!</h2>;
    }

    const Garage = () => {
        return (
          <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carName} />
          </>
        );
    }
  
    // const myElement = <Car brand="Ford" />;
    //return myElement

    return <Garage />
}

export default PropsDemo