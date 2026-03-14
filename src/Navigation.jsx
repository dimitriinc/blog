import './Navigation.css'

const apiHost = import.meta.env.VITE_API_HOST
console.log('API base: ' + apiHost)

async function getCategories() {
    const res = await fetch(apiHost + '/categories')
    const data = await res.json()
    return data
}

function Navigation() {
    const data = getCategories()

    return (
        <>
            <nav>
                <ul>
                    {data.array.forEach((category) => (
                        <li>category.name</li>
                    ))}
                    {/* <li>Being</li>
                    <li>Theory</li>
                    <li>Write-Ups</li>
                    <li>Course</li>
                    <li>Art</li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navigation
