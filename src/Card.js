import React from 'react'
import Leg from './Leg'

export default function Card() {
    return (
        <div className="Card">
            <div className="cardhead">
                <p className="total-price">33111 ₽</p>
                <p>Стоимость для одного взрослого пассажира</p>
            </div>
            <Leg />
            <div className="line"></div>
            <Leg />
            <button className="choiceButton">ВЫБРАТЬ</button>
        </div>
    )
}
