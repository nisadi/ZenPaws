import { useState } from 'react'
import Cart from './Components/Cart';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cart/>
    </>
  )
}

export default App
