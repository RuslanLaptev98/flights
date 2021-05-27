import React from 'react'

export default function Airlines() {
    return (
        <div>
            <p className="bold-text">Авиакомпании</p>
            <input type="checkbox" name="name" id="id" />
            <label htmlFor="id"> - Airline 1 (от 21 049 руб)</label>
            <br />
            <input type="checkbox" name="name2" id="id2" />
            <label htmlFor="id2"> - Airline 2 (от 35 415 руб)</label>
        </div>
    )
}
