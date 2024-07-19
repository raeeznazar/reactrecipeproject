import { useEffect } from "react"
import { useState } from "react"
import style from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = '39f9d25f7d2541588ac6f5444abf53b3'
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
            <div className={style.searchContainer}>
                <input className={style.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
        </>
    )
}