import React, { useState } from 'react'
import RoutesPage from './components/Routes'
import { store } from './context/cartContext'

const App = () => {

  const [cartData, setCartData] = useState([]);

  return (
    <>
      <store.Provider value={{ cartData, setCartData }}>
        <RoutesPage />
      </store.Provider>
    </>
  )
}

export default App