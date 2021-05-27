import React from 'react'
import Leg from './Leg'
import flights from './flights.json'

export default function Card() {
    let totalPrice = flights.result.flights[0].flight.price.total.amount
    return (
        <div className="Card">
            <div className="cardhead">
                <p className="total-price">{totalPrice} ₽</p>
                <p>Стоимость для одного взрослого пассажира</p>
            </div>
            <Leg />
            <div className="line"></div>
            <Leg />
            <button className="choiceButton">ВЫБРАТЬ</button>
        </div>
    )
}
