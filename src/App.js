import jsonFlights from './flights.json'
import { useState, useEffect } from 'react'
import Filter from './Filter'
import Main from './Main'

function App() {
    const flights = jsonFlights
    const [flightsArray, setFlightsArray] = useState(
        flights.result.flights.map((flight) => flight)
    )
    const [radio, setRadio] = useState()
    useEffect(() => {}, [radio, flightsArray])
    return (
        <div className="app">
            <Filter
                flightsArray={flightsArray}
                setFlightsArray={setFlightsArray}
                radio={radio}
                setRadio={setRadio}
            />
            <Main flightsArray={flightsArray} />
        </div>
    )
}

export default App
