import config from '../config';
import TokenService from './token-service';

const PantryItemApiService = {
    getItems() {
        return fetch(`${config.APIT_ENDPOINT}/pantry-items`, {
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
    getItem(itemId) {
        return fetch(`${config.APIT_ENDPOINT}/pantry-items/${itemId}`, {
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
    postItem(newItem) {
        return fetch(`${config.APIT_ENDPOINT}/pantry-items`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newItem)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteItem(itemId) {
        return fetch(`${config.APIT_ENDPOINT}/pantry-items/${itemId}`, {
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
    patchItem(itemId, item) {
        return fetch(`${config.APIT_ENDPOINT}/pantry-items/${itemId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(item)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default PantryItemApiService;