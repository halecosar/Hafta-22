import { useState } from 'react'
import NbaTeam from './components/nbateam.jsx'
import CruiseShip from './components/cruiseship.jsx'

function App() {
  const [balance, setBalance] = useState(10000)

  // State'i değiştirecek fonksiyon
  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  return (

    <>
      <div>
        Bill Gate bakiyesi {balance}
        <NbaTeam updateBalance={updateBalance} />
        <CruiseShip updateBalance={updateBalance} />

      </div>
    </>
  )
}

export default App  