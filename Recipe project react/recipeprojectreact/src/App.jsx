import Search from './components/Search'
import { useState } from "react"
import FoodList from './components/FoodList'
import Nav from './components/Nav'
import './App.css'
import Container from './components/Container'
import InnerConatiner from './components/InnerContainer'
import FoodDetail from './components/FoodDetail'


function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState('658615')

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/* <FoodList foodData={foodData} /> */}
      <Container>
        <InnerConatiner>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerConatiner>
        <InnerConatiner>
          <FoodDetail foodId={foodId} />
        </InnerConatiner>

      </Container>
    </>
  )
}

export default App
