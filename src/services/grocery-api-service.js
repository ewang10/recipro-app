import config from '../config';
import TokenService from './token-service';

const GroceryApiService = {
    getGroceries() {
        return fetch(`${config.APIT_ENDPOINT}/groceries`, {
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
    deleteGrocery(groceryId) {
        return fetch(`${config.APIT_ENDPOINT}/groceries/${groceryId}`, {
            method: 'DELETE',
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
    postGrocery(grocery) {
        return fetch(`${config.APIT_ENDPOINT}/groceries`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(grocery)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default GroceryApiService;