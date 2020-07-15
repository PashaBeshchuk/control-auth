import api from './api';

export const apiUsers = {
    getUsers: () => {
        return api.get('/api/?results=50');
        //return fetch('https://randomuser.me/api/?results=50').then(response => response.json()).then(result => result)
    }
}