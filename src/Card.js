import React from 'react'
import Leg from './Leg'

export default function Card(props) {
    const flight = props.flight
    const topLeg = 0
    const bottomLeg = 1

    const totalPrice = flight.flight.price.total.amount

    return (
        <div className="Card">
            <div className="cardhead">
                <p className="total-price">{totalPrice} ₽</p>

                <p>Стоимость для одного взрослого пассажира</p>
            </div>

            <Leg legId={topLeg} flight={flight} />
            <div className="line"></div>
            <Leg legId={bottomLeg} flight={flight} />
            <button className="choiceButton">ВЫБРАТЬ</button>
        </div>
    )
}
