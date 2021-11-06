import axios from "axios";
const baseHost = window.location.protocol + '//' + window.location.hostname;


class WrappedApi {
    constructor() {
        let host;
        if (process.env.NODE_ENV !== 'production') {
           //
        }
        const innerApi = axios.create({
            baseURL: baseHost,
            timeout: 60000,
        });

        // innerApi.defaults.headers.post['Content-Type'] = 'application/json';
        // innerApi.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        this.innerApi = innerApi;
    }

    get(url, params) {
        return this.innerApi.get(url, params);
    }

    getByUrl(url) {
        return this.innerApi.get(url);
    }

    post(url, data, config) {
        return this.innerApi.post(url, data, config);
    }

    delete(url, config) {
        return this.innerApi.delete(url, config);
    }

    put(url, data, config) {
        return this.innerApi.put(url, data, config);
    }
}

export const api = new WrappedApi();
