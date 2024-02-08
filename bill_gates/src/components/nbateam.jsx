import { useState } from 'react'

function NbaTeam(props) {
    const nbaTeamPrice = 5000;

    // Ana componentten gelen prop'u al
    const buy = () => {
        props.updateBalance(x => x - nbaTeamPrice);
    };

    const sell = () => {
        props.updateBalance(x => x + nbaTeamPrice);
    };

    return (

        <>
            <div>
                <h1>NBA Team</h1>
                <button onClick={buy}>BUY</button>
                <button onClick={sell}>SELL</button>
            </div>
        </>
    )
}

export default NbaTeam  