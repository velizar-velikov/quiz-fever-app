import { del, get, post, put } from './api.js';

const host = 'https://parseapi.back4app.com';

const endpoints = {
    quizzes: '/classes/Quizzes',
    quizById: (id) => `/classes/Quizzes/${id}`,
};

export async function getAllQuizzes() {
    return await get(host + endpoints.quizzes);
}

export async function getQuizById(objectId) {
    return await get(host + endpoints.quizById(objectId));
}

export async function createQuiz(data) {
    return await post(host + endpoints.quizzes, data);
}

export async function editQuiz(objectId, data) {
    return await put(host + endpoints.quizById(objectId), data);
}

export async function deleteQuiz(objectId) {
    return await del(host + endpoints.quizById(objectId));
}
