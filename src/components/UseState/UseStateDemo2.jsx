import { useState } from 'react'

const UseStateDemo2 = () => {
    // multiple state hooks
    const [brand, setBrand] = useState("Toyota");
    const [model, setModel] = useState("Mirai");
    const [year, setYear] = useState("2014");
    const [color, setColor] = useState("red");
    // create a single Hook that holds an object
    const [car, setCar] = useState({
        brand: "BMW",
        model: "BMW X7",
        year: "2000",
        color: "silver"

    });

    // use the js spread operator to update only the color of the car.
    const updateColor = () => {
        setCar(prevState => {
            return {...prevState, color: "green"}
        });
    }

    return (
        <>
            <h1>My {brand}</h1>
            <p>It is a {color} {model} from {year}.</p>

            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}.</p>
            <button
                type="button"
                onClick={updateColor}
                >Change</button>
        </>
    )
}

export default UseStateDemo2