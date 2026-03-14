import './Navigation.css'
import { useState, useEffect } from 'react'

const apiHost = import.meta.env.VITE_API_HOST

function Navigation() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch(apiHost + '/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
                console.log(data)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading categories...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <nav>
                <ul>
                    {categories.map(category => 
                        (<li key={category.category_id}>
                            {category.name}
                        </li>)
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navigation
