import { logout } from './data/users.js';
import { page } from './lib/lib.js';

import { addGoTo } from './middlewares/redirectMiddleware.js';
import { addRender } from './middlewares/renderMiddleware.js';
import { session } from './middlewares/session.js';
import { showBrowsePage } from './views/browse.js';
import { showCreatePage } from './views/create.js';
import { showLoginPage } from './views/login.js';
import { loading } from './views/partials/loading.js';
import { showProfile } from './views/profile.js';
import { showRegisterPage } from './views/register.js';

import { showHome } from './views/welcome.js';

//middlewares
page(session());
page(addRender(document.getElementById('container')));
page(addGoTo());

page('/index.html', '/');
page('/', loading(), showHome);
page('/browse', loading(), showBrowsePage);
page('/profile', loading(), showProfile);
page('/create', showCreatePage);
page('/login', showLoginPage);
page('/register', showRegisterPage);
page('/logout', loading(), logoutAction);

page.start();

async function logoutAction(ctx) {
    await logout();
    ctx.goTo('/');
}
