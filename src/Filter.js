import React from 'react'
import Airlines from './filters/Airlines'
import Price from './filters/Price'
import Sort from './filters/Sort'
import Transfer from './filters/Transfer'

export default function Filter() {
    return (
        <div className="Filter">
            <div className="grey-box" id="top-grey-box"></div>
            <div className="filter-content">
                <Sort />
                <Transfer />
                <Price />
                <Airlines />
            </div>
            <div className="grey-box" id="bottom-grey-box"></div>
        </div>
    )
}
