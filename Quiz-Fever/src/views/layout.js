import { html } from '../lib/lib.js';

export const layoutTemplate = (userData, content) => html`
    <header id="titlebar">
        <nav>
            <a class="logotype" href="/"
                ><i class="fas fa-question-circle"></i><i class="merge fas fa-check-circle"></i><span>Quiz Fever</span></a
            >
            <div class="navigation">
                <a class="nav-link" href="/browse">Browse</a>

                ${userData
                    ? html` <div id="user-nav">
                          <a class="nav-link" href="/create">Create</a>
                          <a class="nav-link profile-link" href="#"><i class="fas fa-user-circle"></i></a>
                          <a id="logoutBtn" class="nav-link" href="javascript:void(0)">Logout</a>
                      </div>`
                    : html` <div id="guest-nav">
                          <a class="nav-link" href="/login">Sign in</a>
                      </div>`}
            </div>
        </nav>
    </header>

    <main id="content">
        <!-- Dynamic content here -->

        ${content}
    </main>

    <footer id="footer">Viktor Kostadinov &copy; 2021</footer>
`;
