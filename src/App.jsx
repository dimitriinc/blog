import { useState } from 'react'
import './App.css'
import Navigation from './Navigation'

function App() {
    const [count, setCount] = useState(0)


    return (
        <>
            <h1>Blog</h1>
            <Navigation />
            <p>{connectionString}</p>
        </>
    )
}

export default App
