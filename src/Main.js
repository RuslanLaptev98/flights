import React, { useState } from 'react'
import Card from './Card'

export default function Main({ flightsArray }) {
    const [visible, setVisible] = useState(2)
    const loadMoreFlights = () => {
        setVisible((prevValue) => prevValue + 2)
    }
    return (
        <main className="main">
            {flightsArray.slice(0, visible).map((flight) => (
                <Card flight={flight} key={flight.flightToken} />
            ))}

            <button className="main__show-more-btn" onClick={loadMoreFlights}>
                Показать еще
            </button>
        </main>
    )
}
