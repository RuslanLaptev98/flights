import React from 'react'
import flights from './flights.json'

export default function Leg(props) {
    const legId = props.legId
    const flight = props.flight
    console.log()

    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    let months = [
        'янв.',
        'фев.',
        'мар.',
        'апр.',
        'май',
        'июн.',
        'июл.',
        'авг.',
        'сен.',
        'окт.',
        'ноя.',
        'дек.',
    ]
    let lastSegment = flight.flight.legs[legId].segments.length - 1

    let departureCity =
        flight.flight.legs[legId].segments[0].departureCity.caption
    let arrivalCity =
        flight.flight.legs[legId].segments[lastSegment].arrivalCity.caption
    let departureAirport =
        flight.flight.legs[legId].segments[0].departureAirport.caption
    let departureAirportCode =
        flight.flight.legs[legId].segments[0].departureAirport.uid
    let arrivalAirport =
        flight.flight.legs[legId].segments[lastSegment].arrivalAirport.caption
    let arrivalAirportCode =
        flight.flight.legs[legId].segments[lastSegment].arrivalAirport.uid
    function timeConvert(n) {
        var num = n
        var hours = num / 60
        var rhours = Math.floor(hours)
        var minutes = (hours - rhours) * 60
        var rminutes = Math.round(minutes)
        return rhours + ' ч ' + rminutes + ' мин'
    }
    let travelTime = timeConvert(flight.flight.legs[legId].duration)
    let airlines = flight.flight.legs[legId].segments[0].airline.caption

    let numberOfTransfers = flight.flight.legs[legId].segments.length - 1

    function forCorrectTimeFormatting(num) {
        return num < 10 ? '0' + num.toString() : num.toString()
    }

    /* Departure */
    let departure = new Date(
        flight.flight.legs[legId].segments[0].departureDate
    )
    let departureHours = forCorrectTimeFormatting(departure.getUTCHours() + 3)
    let departureMinutes = forCorrectTimeFormatting(departure.getUTCMinutes())
    let departureDate = departure.getUTCDate()
    let departureDay = days[departure.getUTCDay()]
    let departureMonth = months[departure.getUTCMonth()]

    /* Arrival */
    let arrival = new Date(
        flight.flight.legs[legId].segments[lastSegment].arrivalDate
    )
    let arrivalHours = forCorrectTimeFormatting(arrival.getUTCHours() + 3)
    let arrivalMinutes = forCorrectTimeFormatting(arrival.getUTCMinutes())
    let arrivalDate = arrival.getUTCDate()
    let arrivalDay = days[arrival.getUTCDay()]
    let arrivalMonth = months[arrival.getUTCMonth()]

    return (
        <div className="Leg">
            <p className="cities">
                {departureCity}, {departureAirport}{' '}
                <span className="blue-text">({departureAirportCode}) → </span>
                {arrivalCity}, {arrivalAirport}{' '}
                <span className="blue-text">({arrivalAirportCode})</span>
            </p>
            <div className="grey-line"></div>
            <div className="flight-time">
                <span className="flight-time-one">
                    {departureHours}:{departureMinutes}{' '}
                    <span className="blue-text">
                        {departureDate} {departureMonth} {departureDay}
                    </span>
                </span>
                <span className="flight-time-two">{travelTime}</span>
                <span className="flight-time-three">
                    <span className="blue-text">
                        {arrivalDate} {arrivalMonth} {arrivalDay}
                    </span>{' '}
                    {arrivalHours}:{arrivalMinutes}
                </span>
            </div>
            <div className="line-transfer">Пересадок: {numberOfTransfers}</div>
            <p className="airline-name">Рейс выполняет: {airlines}</p>
        </div>
    )
}
