import { login } from '../data/users.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const loginTemplate = (onLogin) => html`
    <section id="login">
        <div class="pad-large">
            <div class="glass narrow">
                <header class="tab layout">
                    <h1 class="tab-item active">Login</h1>
                    <a class="tab-item" href="/register">Register</a>
                </header>
                <form class="pad-med centered" @submit=${onLogin}>
                    <label class="block centered">Email: <input class="auth-input input" type="text" name="email" /></label>
                    <label class="block centered"
                        >Password: <input class="auth-input input" type="password" name="password"
                    /></label>
                    <input class="block action cta" type="submit" value="Sign In" />
                </form>
                <footer class="tab-footer">Don't have an account? <a class="invert" href="/register">Create one here</a>.</footer>
            </div>
        </div>
    </section>
`;

export function showLoginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {
        if (!email || !password) {
            return alert('All fields are required!');
        }

        await login(email, password);
        form.reset();
        ctx.goTo('/');
    }
}
