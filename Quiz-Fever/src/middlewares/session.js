import { getUserData } from '../utils/userHelper.js';

export function session() {
    return function (ctx, next) {
        next();
        ctx.user = getUserData();
    };
}
