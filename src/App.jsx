import { useState } from 'react'
import './App.css'
import Content from './Content'
import Schema from './Schema'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Schema />
      <Content />
    </>
  )
}

export default App
