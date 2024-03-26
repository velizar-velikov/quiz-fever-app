import { clearUserData, setUserData } from '../utils/userHelper.js';
import * as api from './api.js';

const host = 'https://parseapi.back4app.com';

const endpoints = {
    register: '/users',
    login: '/login',
    logout: '/logout',
};

export async function login(username, password) {
    const responseData = await api.post(host + endpoints.login, { username, password });
    setUserData(responseData);
}

export async function register(username, email, password) {
    const responseData = await api.post(host + endpoints.register, { username, email, password });
    setUserData(responseData);
}

export async function logout() {
    await api.post(host + endpoints.logout);
    clearUserData();
}
