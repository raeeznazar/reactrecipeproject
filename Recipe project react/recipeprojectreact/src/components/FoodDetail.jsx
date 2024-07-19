import React, { useEffect, useState } from 'react'


function FoodDetail({ foodId }) {
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = '39f9d25f7d2541588ac6f5444abf53b3'

    const [food, setFood] = useState({})

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
        } fetchFood()
    }, [foodId])
    return (
        <>
            <div>FoodDetail {foodId}
                {food.title}
                <img src={food.image} alt="" />
            </div>
        </>
    )
}

export default FoodDetail