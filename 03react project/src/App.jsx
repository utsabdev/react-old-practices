import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>just the demo</h1>
      <Card username=" ramri didi" btn=
      "ramro lagyo?"/>
      <Card username="arki ramri didi" btn=" ki nai"/>

    </>
  )
}

export default App
