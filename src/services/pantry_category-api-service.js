import config from '../config';
import TokenService from './token-service';

const PantryCategoryApiService = {
    getCategories() {
        return fetch(`${config.APIT_ENDPOINT}/pantry-categories`, {
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
    getCategory(categoryId) {
        return fetch(`${config.APIT_ENDPOINT}/pantry-categories/${categoryId}`, {
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
    postCategory(newCategory) {
        return fetch(`${config.APIT_ENDPOINT}/pantry-categories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default PantryCategoryApiService;