import { clearUserData, getUserData } from '../utils/userHelper.js';

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            if (response.status === 209) {
                //session token is no longer valid
                clearUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            //if status is ok but no body .json() throws exception
            const data = await response.json();
            return data;
        } catch (error) {
            return response;
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = 'GET', data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': 'zQyFSvBEbSXmeBWUFcdT31ejcpT9nzOH2QI3BEas',
            'X-Parse-JavaScript-Key': 'CZY6Mcm8Uc51hcsQ3wL8zN8asb9EtpWyBjWXvETS',
        },
    };

    const userData = getUserData();

    if (userData) {
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

export const get = (url) => request(url, createOptions());
export const post = (url, data) => request(url, createOptions('POST', data));
export const put = (url, data) => request(url, createOptions('PUT', data));
export const del = (url) => request(url, createOptions('DELETE'));

export function createPointer(className, objectId) {
    return {
        __type: 'Pointer',
        className,
        objectId,
    };
}
