import React from 'react'
import Leg from './Leg'

export default function Card(props) {
    const flight = props.flight
    const topLeg = 0
    const bottomLeg = 1

    const totalPrice = flight.flight.price.total.amount

    return (
        <div className="card">
            <div className="card__head">
                <p className="card__total-price">{totalPrice} ₽</p>
                <p>Стоимость для одного взрослого пассажира</p>
            </div>
            <Leg legId={topLeg} flight={flight} />
            <div className="card__line"></div>
            <Leg legId={bottomLeg} flight={flight} />
            <button className="card__choice-button">ВЫБРАТЬ</button>
        </div>
    )
}
