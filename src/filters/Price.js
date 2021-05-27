import React from 'react'

export default function Price() {
    return (
        <div>
            <p className="bold-text">Цена</p>
            <label htmlFor="startPrice">От </label>
            <input type="number" name="startPrice" id="startPrice" />
            <br />
            <label htmlFor="endPrice">До </label>
            <input type="number" name="endPrice" id="endPrice" />
        </div>
    )
}
