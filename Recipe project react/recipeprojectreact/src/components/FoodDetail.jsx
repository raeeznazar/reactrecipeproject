import React, { useEffect, useState } from 'react'
import styles from './foodDetails.module.css'
import ItemList from './ItemList'

function FoodDetail({ foodId }) {
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = '39f9d25f7d2541588ac6f5444abf53b3'

    const [food, setFood] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setLoading(false)
        } fetchFood()
    }, [foodId])
    return (
        <>
            <div className={styles.recipeCard}>

                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />

                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏱️{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>🧑‍🤝‍🧑Serves {food.servings}</strong>
                    </span>
                    <span>{food.vegan ? "🐄 Vegan" : ''}</span>
                    <span>
                        <strong>{food.vegetarian ? ' 🥕 vegetarian' : '🥩 Non-vegetarian'}</strong>
                    </span>

                </div>
                <div>
                    <span>${food.pricePerServing / 100} per serving</span>
                </div>

                <div>
                    <h2>Ingredients</h2>

                    {isLoading ? <p>Loading...</p> : <ItemList food={food} />}

                    <ol>
                        <h2 >Instructions</h2>
                        <div className={styles.recipeInstructions}>
                            {isLoading ? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step) => (
                                <li key={step.step}>{step.step}</li>
                            )
                            )}
                        </div>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default FoodDetail