import './App.css';
import { useEffect, useState } from 'react';
import Recipes from './Components/Recipes/Recipes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s";

  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    setMeals(await data.meals)
    console.log(await data.meals);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <>
      <Header/>
      <Recipes mealsData={meals}/>
      <Footer/>
    </>
  );
}

export default App;
