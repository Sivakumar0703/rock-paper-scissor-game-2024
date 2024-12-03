import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gaming from './components/Gaming'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gaming />
    </>
  )
}

export default App
