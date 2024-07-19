import Search from '../src/Search'
import { useState } from "react"

function App() {

  const [foodData, setFoodData] = useState([])

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      {
        foodData.map((food) => (
          <h1>{food.title}</h1>
        ))
      }
    </>
  )
}

export default App
