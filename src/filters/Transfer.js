import React from 'react'

export default function Transfer() {
    return (
        <div>
            <form action="">
                <p className="bold-text">Фильтровать</p>
                <input type="checkbox" name="onetransfer" id="filterChoice1" />
                <label htmlFor="filterChoice1"> - 1 пересадка</label>
                <br />
                <input type="checkbox" name="notransfer" id="filterChoice2" />
                <label htmlFor="filterChoice2"> - без пересадок</label>
            </form>
        </div>
    )
}
