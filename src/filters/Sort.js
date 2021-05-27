import React from 'react'

export default function sort() {
    return (
        <div>
            <form action="">
                <p className="bold-text">Сортировать</p>
                <input type="radio" name="sort-type" id="sortChoice1" />
                <label htmlFor="sortChoice1"> - по возрастанию цены</label>
                <br />
                <input type="radio" name="sort-type" id="sortChoice2" />
                <label htmlFor="sortChoice2"> - по убыванию в цене</label>
                <br />
                <input type="radio" name="sort-type" id="sortChoice3" />
                <label htmlFor="sortChoice3"> - по времени в пути</label>
            </form>
        </div>
    )
}
