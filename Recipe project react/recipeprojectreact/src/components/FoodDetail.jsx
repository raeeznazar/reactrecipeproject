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

            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt="" />
            </div>

            <span>
                <strong>⏱️{food.readyInMinutes} Minutes</strong>
            </span>
            <span>
                <strong>🧑‍🤝‍🧑Serves {food.servings}</strong>
            </span>
            <span>{food.vegan ? "🐄 Vegan" : ''}</span>
            <span>
                {food.vegetarian ? ' 🥕 vegetarian' : '🥩 Non-vegetarian'}
            </span>

            <div>
                $ <span>{food.pricePerServing / 100} per serving</span>
            </div>

            <div>
                <h2>Instructions</h2>
                {food.analyzedInstructions[0.]}
            </div>

        </>
    )
}

export default FoodDetail