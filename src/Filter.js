import React from 'react'

export default function Filter({
    flightsArray,
    setFlightsArray,
    radio,
    setRadio,
}) {
    const priceAscending = () => {
        setFlightsArray(
            flightsArray.sort(
                (x, y) =>
                    x.flight.price.total.amount - y.flight.price.total.amount
            )
        )
    }
    const priceDescending = () => {
        setFlightsArray(
            flightsArray.sort(
                (x, y) =>
                    y.flight.price.total.amount - x.flight.price.total.amount
            )
        )
    }
    const travelTime = () => {
        setFlightsArray(
            flightsArray.sort(
                (x, y) =>
                    x.flight.legs[0].duration +
                    x.flight.legs[1].duration -
                    y.flight.legs[0].duration -
                    y.flight.legs[1].duration
            )
        )
    }
    return (
        <aside className="filter">
            <div className="filter__top-box"></div>
            <section className="filter__content">
                <form action="">
                    <p className="filter__title">Сортировать</p>
                    <input
                        type="radio"
                        name="sort-type"
                        id="sortChoice1"
                        checked={radio === 'sortChoice1'}
                        value="sortChoice1"
                        onChange={(e) => {
                            priceAscending()
                            setRadio(e.target.value)
                        }}
                    />
                    <label htmlFor="sortChoice1"> - по возрастанию цены</label>
                    <br />
                    <input
                        type="radio"
                        name="sort-type"
                        id="sortChoice2"
                        checked={radio === 'sortChoice2'}
                        value="sortChoice2"
                        onChange={(e) => {
                            priceDescending()
                            setRadio(e.target.value)
                        }}
                    />
                    <label htmlFor="sortChoice2"> - по убыванию в цене</label>
                    <br />
                    <input
                        type="radio"
                        name="sort-type"
                        id="sortChoice3"
                        checked={radio === 'sortChoice3'}
                        value="sortChoice3"
                        onChange={(e) => {
                            travelTime()
                            setRadio(e.target.value)
                        }}
                    />
                    <label htmlFor="sortChoice3"> - по времени в пути</label>
                </form>
            </section>
            <div className="filter__bottom-box"></div>
        </aside>
    )
}
