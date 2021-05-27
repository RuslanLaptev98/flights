import Card from './Card'
import Filter from './Filter'

function App() {
    return (
        <div className="App">
            <Filter />
            <div className="main">
                <Card />
                <button className="show">Показать еще</button>
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
