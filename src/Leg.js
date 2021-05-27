import React from 'react'

export default function Leg() {
    return (
        <div className="Leg">
            <p className="cities">
                Москва, ШЕРЕМЕТЬЕВО <span className="blue-text">(SVO) → </span>
                ЛОНДОН, Лондон, Хитроу <span className="blue-text">(LHR)</span>
            </p>
            <div className="grey-line"></div>
            <div className="flight-time">
                <span className="flight-time-one">
                    20:40 <span className="blue-text">18 авг. вт</span>
                </span>
                <span className="flight-time-two">14 ч 45 мин</span>
                <span className="flight-time-three">
                    <span className="blue-text">19 авг. ср</span> 09:25
                </span>
            </div>
            <div className="line-transfer">1 пересадка</div>
            <p className="airline-name">
                Рейс выполняет: Аэрофлот - российские авиалинии
            </p>
        </div>
    )
}
