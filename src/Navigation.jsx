import './Navigation.css'

const apiHost = import.meta.env.VITE_API_HOST
console.log('API base: ' + apiHost)

async function getCategories() {
    const res = await fetch(apiHost + '/categories')
    const data = await res.json()
    console.log(data)
}

function Navigation() {
    getCategories()

    return <>
        <nav>
            <ul>
                <li>Being</li>
                <li>Theory</li>
                <li>Write-Ups</li>
                <li>Course</li>
                <li>Art</li>
            </ul>
        </nav>
    </>
}

export default Navigation