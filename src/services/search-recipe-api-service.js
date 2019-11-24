import config from '../config';

const SearchRecipeApiService = {
    formatQueryString(params) {
        const queryItems = Object.keys(params).map(key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        );
        return queryItems.join('&');
    },
    getRecipes(searchTerm) {
        const params = {
            app_id: config.EDAMAM_ID,
            app_key: config.EDAMAM_KEY,
            q: searchTerm.value.split(",")
        }

        const queryString = SearchRecipeApiService.formatQueryString(params);
        let searchUrl = 'https://api.edamam.com/search?' + queryString;

        return fetch(searchUrl)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default SearchRecipeApiService;