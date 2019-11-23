import config from '../config';
import TokenService from './token-service';
import IdleService from './idle-service';

const AuthApiService = {
    postUser(user) {
        return fetch(`${config.APIT_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postLogin({ user_name, password }) {
        return fetch(`${config.APIT_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user_name, password })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
                IdleService.registerIdleTimerResets();
                TokenService.queueCallbackBeforeExpiry(() => {
                    AuthApiService.postRefreshToken()
                });
                return res;
            })
    },
    postRefreshToken() {
        return fetch(`${config.APIT_ENDPOINT}/auth/refresh`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject())
                    : res.json()
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
            //    TokenService.queueCallbackBeforeExpiry(() => {
             //       AuthApiService.postRefreshToken()
             //   });
                return res;
            })
            .catch(error => console.error(error));
    }
};

export default AuthApiService;