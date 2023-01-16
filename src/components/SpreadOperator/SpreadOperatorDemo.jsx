import React from 'react'

const SpreadOperatorDemo = () => {
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    // js spread operator (...) allows us to copy all or part of an existing array or object into
    // another array or object.
    const numbersCombined = [...numbersOne, ...numbersTwo];

    const numbers = [1, 2, 3, 4, 5,6];
    // Assign the first and second items from numbers to variables and put the rest in an array.
    const [one, two, ...rest] = numbers;

    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'white'
    }

    const updateMyVehicle = {
        type: 'car',
        year: '2022',
        color: 'black'
    }
    // combine two obejects
    const updatedVehicle = {...myVehicle, ...updateMyVehicle};
    console.log(updatedVehicle)
    return (
        <>
        <p>Combine numbers: {numbersCombined}</p>
        <p>First element: {one}</p>
        <p>Second element: {two}</p>
        <p>Rest element: {rest}</p>
        <p>My vehicle: console.log(updatedVehicle)</p>
        </>
    )
}

export default SpreadOperatorDemo
