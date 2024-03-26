import { html } from '../../lib/lib.js';

const loadingTemplate = () => html` <p>Loading &hellip;</p> `;

export function loading() {
    return function (ctx, next) {
        ctx.render(loadingTemplate());
        next();
    };
}
