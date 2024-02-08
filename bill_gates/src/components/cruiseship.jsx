import { useState } from 'react'

function CruiseShip(props) {
    const cruiseShipPrice = 9300;

    const buy = () => {
        props.updateBalance(x => x - cruiseShipPrice)
    }

    const sell = () => {
        props.updateBalance(x => x + cruiseShipPrice)
    }

    return (

        <>
            <div>
                <h1>Cruise Ship</h1>
                <button onClick={buy}>BUY</button>
                <button onClick={sell}>SELL</button>
            </div>
        </>
    )
}

export default CruiseShip  