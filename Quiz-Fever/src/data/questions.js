import { del, get, post, put } from './api.js';

const host = 'https://parseapi.back4app.com';

const endpoints = {
    questions: '/classes/Questions',
    questionById: (id) => `/classes/Questions/${id}`,
};

export async function getAllQuestions() {
    return await get(host + endpoints.questions);
}

export async function getQuestionById(objectId) {
    return await get(host + endpoints.questionById(objectId));
}

export async function createQuestion(data) {
    return await post(host + endpoints.questions, data);
}

export async function editQuestion(objectId, data) {
    return await put(host + endpoints.questionById(objectId), data);
}

export async function deleteQuestion(objectId) {
    return await del(host + endpoints.questionById(objectId));
}
