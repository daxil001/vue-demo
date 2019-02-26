import axios from 'axios';
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/';
const LIMIT = 10;
const getParamsURL = (params: any = {}) => {
    let paramsURL: string = '';
    let index: number = 0;
    if (!params.hasOwnProperty('_limit')) {
        params._limit = LIMIT;
    }
    Object.keys(params).map((property) => {
        if (params.hasOwnProperty(property)) {
            if (index === 0) {
                paramsURL += '?';
            } else {
                paramsURL += '&';
            }
            paramsURL += property + '=' + params[property];
        }
        index++;
    });
    return paramsURL;
};
const AppService = {
    getAlbums: () => {
        return axios.get(API_ENDPOINT + 'albums' + getParamsURL());
    },
    getPhotosForAlbum: (params: any) => {
        return axios.get(API_ENDPOINT + 'photos' + getParamsURL(params));
    },
    getPosts: () => {
        return axios.get(API_ENDPOINT + 'posts' + getParamsURL());
    },
    getCommentsForPost: (params: any) => {
        return axios.get(API_ENDPOINT + 'comments' + getParamsURL(params));
    },
    addComment: (params: any) => {
        return axios.post(API_ENDPOINT + 'comments', params);
    },
    getUserDetails: () => {
        return axios.get(API_ENDPOINT + 'users' + getParamsURL());
    },
    getTodoList: (params: any) => {
        return axios.get(API_ENDPOINT + 'todos' + getParamsURL(params));
    },
    addTodoItem: (params: any) => {
        return axios.post(API_ENDPOINT + 'todos', params);
    },
};
export default AppService;
