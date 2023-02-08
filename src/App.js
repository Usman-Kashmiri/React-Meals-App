import './App.css';
import { useEffect, useState } from 'react';
import Recipes from './Components/Recipes/Recipes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader';

function App() {

  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [meals, setMeals] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchMeals = async () => {
    setLoader(true);
    const response = await fetch(API_URL)
    const data = await response.json()
    setMeals(await data.meals)
    console.log(await data.meals);
    setLoader(false);
  }

  const searchHandler = (searchTerm) => {
    setSearch(searchTerm)
    if (searchTerm !== "") {
      const searched = meals.filter((meal) => {
        return Object.values(meal).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(searched);
    } else {
      setSearchResult(meals);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <>
      <Header term={search} searchHandler={searchHandler}/>
      { loader && <Loader/> }
      <Recipes mealsData={search.length < 1 ? meals : searchResult}/>
      <Footer/>
    </>
  );
}

export default App;
