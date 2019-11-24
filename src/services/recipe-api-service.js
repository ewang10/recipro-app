import config from '../config';
import TokenService from './token-service';

const RecipeApiService = {
    getRecipes() {
        return fetch(`${config.APIT_ENDPOINT}/recipes`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getRecipe(recipeId) {
        return fetch(`${config.APIT_ENDPOINT}/recipes/${recipeId}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postItem(newRecipe) {
        return fetch(`${config.APIT_ENDPOINT}/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteItem(recipeId) {
        return fetch(`${config.APIT_ENDPOINT}/recipes/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
            })
    }
}

export default RecipeApiService;