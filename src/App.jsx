import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const connectionString = import.meta.env.VITE_DB_CONNECTION


  return (
    <>
      <h1>Blog</h1>
      <p>{connectionString}</p>
    </>
  )
}

export default App
