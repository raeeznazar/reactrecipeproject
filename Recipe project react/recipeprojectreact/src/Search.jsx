import { useEffect } from "react"
import { useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = 'aa5e488c0195434db9d11eeb84ec9769'
export default function Search({ foodData, setFoodData }) {

    const [query, setQuery] = useState('pizza')

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data.results)
            setFoodData(data.results)

        }
        fetchFood()
    }, [query])
    return (
        <>
            <input type="text" style={{ marginTop: '20px' }} value={query} onChange={(e) => setQuery(e.target.value)} />
        </>
    )
}