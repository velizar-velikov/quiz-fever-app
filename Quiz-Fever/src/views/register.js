import { register } from '../data/users.js';
import { html } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';

const registerTemplate = (onRegister) => html`
    <section id="register">
        <div class="pad-large">
            <div class="glass narrow">
                <header class="tab layout">
                    <a class="tab-item" href="/login">Login</a>
                    <h1 class="tab-item active">Register</h1>
                </header>
                <form class="pad-med centered" @submit=${onRegister}>
                    <label class="block centered">Username: <input class="auth-input input" type="text" name="username" /></label>
                    <label class="block centered">Email: <input class="auth-input input" type="text" name="email" /></label>
                    <label class="block centered"
                        >Password: <input class="auth-input input" type="password" name="password"
                    /></label>
                    <label class="block centered">Repeat: <input class="auth-input input" type="password" name="repass" /></label>
                    <input class="block action cta" type="submit" value="Create Account" />
                </form>
                <footer class="tab-footer">Already have an account? <a class="invert" href="/login">Sign in here</a>.</footer>
            </div>
        </div>
    </section>
`;

export function showRegisterPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ username, email, password, repass }, form) {
        if (!username || !email || !password) {
            return alert('All fields are required!');
        } else if (password !== repass) {
            // eslint-disable-next-line
            return alert("Passwords dont't match!");
        }

        await register(username, email, password);
        form.reset();
        ctx.goTo('/');
    }
}
