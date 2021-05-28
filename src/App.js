import Card from './Card'
import jsonFlights from './flights.json'
import { useState, useEffect } from 'react'
import Airlines from './filters/Airlines'
import Price from './filters/Price'

function App() {
    const flights = jsonFlights
    const [visible, setVisible] = useState(2)
    const loadMoreFlights = () => {
        setVisible((prevValue) => prevValue + 2)
    }
    let [flightsArray, setFlightsArray] = useState(
        flights.result.flights.map((flight) => flight)
    )
    const initialFlightsArray = flights.result.flights.map((flight) => flight)

    // Sort
    // по возрастанию цены
    const priceAscending = () => {
        setFlightsArray(
            flightsArray.sort(
                (x, y) =>
                    x.flight.price.total.amount - y.flight.price.total.amount
            )
        )
    }

    // по убыванию цены
    const priceDescending = () => {
        setFlightsArray(
            flightsArray.sort(
                (x, y) =>
                    y.flight.price.total.amount - x.flight.price.total.amount
            )
        )
    }

    // по времени в пути
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

    const [radio, setRadio] = useState()

    // Number of transfers
    const [oneIsChecked, setOneIsChecked] = useState(false)
    const [zeroIsChecked, setZeroIsChecked] = useState(false)
    console.log(flightsArray)
    const zeroChecked = () => {
        if (zeroIsChecked && oneIsChecked) {
            setFlightsArray(
                initialFlightsArray.filter((flight) => {
                    return (
                        flight.flight.legs[0].segments.length -
                            1 +
                            flight.flight.legs[1].segments.length -
                            1 <=
                        1
                    )
                })
            )
        } else if (zeroIsChecked && !oneIsChecked) {
            setFlightsArray(
                initialFlightsArray.filter((flight) => {
                    return (
                        flight.flight.legs[0].segments.length -
                            1 +
                            flight.flight.legs[1].segments.length -
                            1 ===
                        0
                    )
                })
            )
        } else if (!zeroIsChecked && oneIsChecked) {
            setFlightsArray(
                initialFlightsArray.filter((flight) => {
                    return (
                        flight.flight.legs[0].segments.length -
                            1 +
                            flight.flight.legs[1].segments.length -
                            1 ===
                        1
                    )
                })
            )
        } else {
            setFlightsArray(initialFlightsArray)
        }
    }
    const oneChecked = () => {
        if (oneIsChecked && zeroIsChecked) {
            setFlightsArray(
                initialFlightsArray.filter((flight) => {
                    return (
                        flight.flight.legs[0].segments.length -
                            1 +
                            flight.flight.legs[1].segments.length -
                            1 <=
                        1
                    )
                })
            )
        } else if (oneIsChecked && !zeroIsChecked) {
            setFlightsArray(
                initialFlightsArray.filter((flight) => {
                    return (
                        flight.flight.legs[0].segments.length -
                            1 +
                            flight.flight.legs[1].segments.length -
                            1 ===
                        1
                    )
                })
            )
        } else if (!oneIsChecked && zeroIsChecked) {
            setFlightsArray(
                initialFlightsArray.filter((flight) => {
                    return (
                        flight.flight.legs[0].segments.length -
                            1 +
                            flight.flight.legs[1].segments.length -
                            1 ===
                        0
                    )
                })
            )
        } else {
            setFlightsArray(initialFlightsArray)
        }
    }
    useEffect(() => {}, [radio, oneIsChecked, flightsArray])
    useEffect(() => {
        zeroChecked()
    }, [zeroIsChecked])
    useEffect(() => {
        oneChecked()
    }, [oneIsChecked])
    return (
        <div className="App">
            <div className="Filter">
                <div className="grey-box" id="top-grey-box"></div>
                <div className="filter-content">
                    <div>
                        <form action="">
                            <p className="bold-text">Сортировать</p>
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
                            <label htmlFor="sortChoice1">
                                {' '}
                                - по возрастанию цены
                            </label>
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
                            <label htmlFor="sortChoice2">
                                {' '}
                                - по убыванию в цене
                            </label>
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
                            <label htmlFor="sortChoice3">
                                {' '}
                                - по времени в пути
                            </label>
                        </form>
                    </div>

                    <div>
                        <form action="">
                            <p className="bold-text">Фильтровать</p>

                            <input
                                type="checkbox"
                                name="onetransfer"
                                id="filterChoice1"
                                checked={oneIsChecked}
                                onChange={(e) => {
                                    setOneIsChecked(e.target.checked)
                                }}
                            />
                            <label htmlFor="filterChoice1">
                                {' '}
                                - 1 пересадка
                            </label>

                            <br />

                            <input
                                type="checkbox"
                                name="notransfer"
                                id="filterChoice2"
                                checked={zeroIsChecked}
                                onChange={(e) => {
                                    setZeroIsChecked(e.target.checked)
                                }}
                            />
                            <label htmlFor="filterChoice2">
                                {' '}
                                - без пересадок
                            </label>
                        </form>
                    </div>

                    <Price flights={flightsArray} />
                    <Airlines flights={flightsArray} />
                </div>
                <div className="grey-box" id="bottom-grey-box"></div>
            </div>

            <div className="main">
                {flightsArray.slice(0, visible).map((flight) => (
                    <Card flight={flight} key={flight.flightToken} />
                ))}

                <button className="show" onClick={loadMoreFlights}>
                    Показать еще
                </button>
            </div>
        </div>
    )
}

export default App

/*
Стоимость: [id].flight.price.total.amount
For each leg:
    Время в пути: flights.result.flights[0].flight.legs[0].duration
    Количество пересадок: количество сегментов - 1
    Авиакомпания: [0].flight.carrier.caption

    Время отправления: [0].flight.legs[0].segments[0].departureDate
    Дата отправления: [0].flight.legs[0].segments[0].departureDate
    Время прибытия: [0].flight.legs[0].segments[1].arrivalDate
    Дата прибытия: [0].flight.legs[0].segments[1].arrivalDate
    
    Аэропорт отправления: 
        Название: [0].flight.legs[0].segments[0].departureAirport.caption
        Код: [0].flight.legs[0].segments[0].departureAirport.uid
    Аэропорт прибытия: 
        Название: [0].flight.legs[0].segments[1].arrivalAirport.caption
        Код: [0].flight.legs[0].segments[1].arrivalAirport.uid
    Город отправления: [0].flight.legs[0].segments[0].departureCity.caption
    Город прибытия: [0].flight.legs[0].segments[1].arrivalCity.caption
*/
