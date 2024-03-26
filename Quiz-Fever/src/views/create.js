import { html, render } from '../lib/lib.js';
import { editorQuestionTemplate } from './partials/editorQuestionTemplate.js';

const createTemplate = (onAddPress) => html`
    <section id="editor">
        <header class="pad-large">
            <h1>New quiz</h1>
        </header>

        <div class="pad-large alt-page">
            <form>
                <label class="editor-label layout">
                    <span class="label-col">Title:</span>
                    <input class="input i-med" type="text" name="title"
                /></label>
                <label class="editor-label layout">
                    <span class="label-col">Topic:</span>
                    <select class="input i-med" name="topic">
                        <option value="all">All Categories</option>
                        <option value="it">Languages</option>
                        <option value="hardware">Hardware</option>
                        <option value="software">Tools and Software</option>
                    </select>
                </label>
                <input class="input submit action" type="submit" value="Save" />
            </form>
        </div>

        <header class="pad-large">
            <h2>Questions</h2>
        </header>

        <div class="pad-large alt-page">
            <div id="add-question"></div>
            <article class="editor-question">
                <div class="editor-input">
                    <button class="input submit action" @click=${onAddPress}>
                        <i class="fas fa-plus-circle"></i>
                        Add question
                    </button>
                </div>
            </article>
        </div>
    </section>
`;

export function showCreatePage(ctx) {
    ctx.render(createTemplate(onAddPress));

    function onAddPress() {
        render(editorQuestionTemplate(onCancel), document.getElementById('add-question'));

        function onCancel(event) {
            event.target.parentElement.parentElement.parentElement.remove();
        }
    }
}
