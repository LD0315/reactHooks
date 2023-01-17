import React from 'react';

const mapDemo = () => {
    const myArray = ['apple', 'banana', 'orange'];

    const myList = myArray.map((item) => <p>{item}</p>)

    return myList
}


export default mapDemo

