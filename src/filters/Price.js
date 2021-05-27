import React, { useState, useEffect } from 'react'

export default function Price({ flights }) {
    console.log(flights)
    const [minNumber, setMinNumber] = useState()
    const [maxNumber, setMaxNumber] = useState()
    useEffect(() => {
        console.log(minNumber)
        console.log(maxNumber)
    }, [minNumber])
    return (
        <div>
            <p className="bold-text">Цена</p>
            <p>функция недоступна :(</p>
            <label htmlFor="startPrice">От </label>
            <input
                type="number"
                name="startPrice"
                id="startPrice"
                value={minNumber}
                onChange={(event) => setMinNumber(event.target.value)}
            />
            <br />
            <label htmlFor="endPrice">До </label>
            <input
                type="number"
                name="endPrice"
                id="endPrice"
                value={maxNumber}
                onChange={(event) => setMaxNumber(event.target.value)}
            />
        </div>
    )
}
