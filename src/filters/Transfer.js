import React, { useState } from 'react'

export default function Transfer({ flights }) {
    const [oneIsChecked, setOneIsChecked] = useState(true)
    const [zeroIsChecked, setZeroIsChecked] = useState(true)

    return (
        <div>
            <form action="">
                <p className="bold-text">Фильтровать</p>
                <p>функция недоступна :(</p>
                <input
                    type="checkbox"
                    name="onetransfer"
                    id="filterChoice1"
                    checked={oneIsChecked}
                    onChange={(e) => setOneIsChecked(e.target.checked)}
                />
                <label htmlFor="filterChoice1"> - 1 пересадка</label>

                <br />

                <input
                    type="checkbox"
                    name="notransfer"
                    id="filterChoice2"
                    checked={zeroIsChecked}
                    onChange={(e) => setZeroIsChecked(e.target.checked)}
                />
                <label htmlFor="filterChoice2"> - без пересадок</label>
            </form>
        </div>
    )
}
