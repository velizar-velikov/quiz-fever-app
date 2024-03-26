import { del, get, post, put } from './api.js';

const host = 'https://parseapi.back4app.com';

const endpoints = {
    solutions: '/classes/Solutions',
    solutionsById: (id) => `/classes/Solutions/${id}`,
};

export async function getAllSolutions() {
    return await get(host + endpoints.solutions);
}

export async function getSolutionById(objectId) {
    return await get(host + endpoints.solutionsById(objectId));
}

export async function createSolution(data) {
    return await post(host + endpoints.solutions, data);
}

export async function editSolution(objectId, data) {
    return await put(host + endpoints.solutionsById(objectId), data);
}

export async function deleteSolution(objectId) {
    return await del(host + endpoints.solutionsById(objectId));
}
