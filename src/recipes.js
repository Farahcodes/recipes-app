import React, { useState, useEffect } from 'react'

const url ='https://www.themealdb.com/api/json/v1/1/search.php?f=a';


const Recipes = () => {
    const [recipes,setRecipes]= useState([]);
    const getRecipes = async()=>{
        const response = await fetch(url);
        const recipes = await response.json();
        setRecipes(recipes.meals);
    }

    useEffect(()=>{
        getRecipes();
    },[])
    return (
        <>
            <h3>Recipes </h3>
            <ul className='users'>
                {recipes.map((recipe)=>{
                    const{idMeal,strMeal,strCategory,strMealThumb,strYoutube}=recipe
                    return <li key={idMeal}>
                        <img src={strMealThumb} alt={strMeal} />
                        <div>
                            <h3>{strMeal}</h3>
                            <h4>{strCategory}</h4>
                            <a href={strYoutube}>Watch Youtube recipe</a>
                        </div>

                    </li>
                })}
            </ul>
        </>
    )
}

export default Recipes
