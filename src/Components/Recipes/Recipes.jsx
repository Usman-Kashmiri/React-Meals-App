import React from 'react'
import Recipe from './Recipe'

function Recipes({mealsData}) {
  return (
    <>
        <Recipe meals={mealsData} />
    </>
  )
}

export default Recipes