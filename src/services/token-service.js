import jwtDecode from 'jwt-decode';
import config from '../config';

let timeoutId;
const tenMs = 10000;

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token);
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY);
    },
    hasAuthToken() {
        return !!this.getAuthToken();
    },
    parseJWT(jwt) {
        return jwtDecode(jwt);
    },
    readJWT() {
        return TokenService.parseJWT(TokenService.getAuthToken());
    },
    getMsUntilExpiry(payload) {
        return (payload * 1000) - Date.now();
    },
    queueCallbackBeforeExpiry(callback) {
        const msUntilExpiry = TokenService.getMsUntilExpiry(TokenService.readJWT());
        timeoutId = setTimeout(callback, msUntilExpiry - tenMs);
    },
    clearCallbackBeforeExpiry() {
        clearTimeout(timeoutId);
    }
};

export default TokenService;