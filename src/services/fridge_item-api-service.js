import config from '../config';
import TokenService from './token-service';

const FridgeItemApiService = {
    getItems() {
        return fetch(`${config.APIT_ENDPOINT}/fridge-items`, {
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
        return fetch(`${config.APIT_ENDPOINT}/fridge-items/${itemId}`, {
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
        return fetch(`${config.APIT_ENDPOINT}/fridge-items`, {
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
        return fetch(`${config.APIT_ENDPOINT}/fridge-items/${itemId}`, {
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
    },
    patchItem(itemId, item) {
        return fetch(`${config.APIT_ENDPOINT}/fridge-items/${itemId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(item)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
            })
    }
}

export default FridgeItemApiService;