import { fetchRecipes } from "./recipeFetcher.js";

const ingredientInput = document.getElementById("ingredient");
const searchButton = document.getElementById("searchButton");
const recipesContainer = document.getElementById("recipes");

searchButton.addEventListener('click', async () => {
    const ingredient = ingredientInput.value.trim();
    if (ingredient) {
        recipesContainer.innerHTML = '<p>Loading...</p>';
        const recipes = await fetchRecipes(ingredient);
        displayRecipes(recipes);
    } else {
        recipesContainer.innerHTML = '<p>Please enter an ingredient.</p>';
    }
});

function displayRecipes(recipes) {
    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipesContainer.innerHTML = '';
    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeEl = document.createElement('div');
        recipeEl.classList.add('recipe');
        recipeEl.innerHTML = `
            <h2>${recipe.label}</h2>
            <img src="${recipe.image}" alt="${recipe.label}">
            <p><strong>Ingredients:</strong> ${recipe.ingredientLines.join(', ')}</p>
            <p><strong>Calories:</strong> ${Math.round(recipe.calories)}</p>
            <a href="${recipe.url}" target="_blank">View Recipe</a>
        `;
        recipesContainer.appendChild(recipeEl);
    });
}

