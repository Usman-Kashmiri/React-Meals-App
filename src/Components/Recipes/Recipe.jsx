import React from 'react'

function Recipe({ meals }) {
    return (
        <>
            <div className='container d-flex flex-wrap gap-5 justify-content-center py-5'>
                {
                    meals.map((e) => {
                        return (
                            <div key={e.idMeal} className="card" style={{ width: "20rem" }}>
                                <img src={e.strMealThumb} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5 className="card-title">{e.strMeal}</h5>
                                        <span className={"far fa-heart text-danger"}></span>
                                    </div>
                                    <p className="card-text">{e.strInstructions.slice(0, 120)}...</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Recipe