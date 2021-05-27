import React from 'react'
import Leg from './Leg'

export default function Card(props) {
    const flights = props.flights
    const topLeg = 0
    const bottomLeg = 1
    const totalPrice = flights.result.flights[0].flight.price.total.amount

    return (
        <div className="Card">
            <div className="cardhead">
                <p className="total-price">{totalPrice} ₽</p>
                <p>Стоимость для одного взрослого пассажира</p>
            </div>
            <Leg legId={topLeg} />
            <div className="line"></div>
            <Leg legId={bottomLeg} />
            <button className="choiceButton">ВЫБРАТЬ</button>
        </div>
    )
}
