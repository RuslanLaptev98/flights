import React from 'react'

export default function Airlines({ flights }) {
    return (
        <div>
            <p className="bold-text">Авиакомпании</p>
            <input type="checkbox" name="name" id="id" />
            <label htmlFor="id"> - функция недоступна :(</label>
            <br />
            <input type="checkbox" name="name2" id="id2" />
            <label htmlFor="id2"> - функция недоступна :(</label>
        </div>
    )
}
