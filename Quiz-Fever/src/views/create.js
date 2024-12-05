import { html, render } from '../lib/lib.js';
import { createSubmitHandler } from '../utils/formHelper.js';
import { editorAddedQuestionTemplate } from './partials/editorAddedQuestionTemplate.js';
import { editorAddQuestionTemplate } from './partials/editorAddQuestionTemplate.js';

const createTemplate = (isAddingQuestion, onSaveQuiz, questionFunctionality) => html`
    <section id="editor">
        <header class="pad-large">
            <h1>New quiz</h1>
        </header>

        <div class="pad-large alt-page">
            <form @submit=${onSaveQuiz}>
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
            <!-- to add question -->

            ${isAddingQuestion
                ? html`
                      ${editorAddQuestionTemplate(questionFunctionality.onSaveQuestion, questionFunctionality.onCancelQuestion)}
                  `
                : null}

            <!-- added question -->
            <article class="editor-question">
                <div class="layout">
                    <div class="question-control">
                        <button class="input submit action"><i class="fas fa-edit"></i> Edit</button>
                        <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
                    </div>
                    <h3>Question 2</h3>
                </div>
                <form>
                    <p class="editor-input">This is the second question.</p>
                    <div class="editor-input">
                        <label class="radio">
                            <input class="input" type="radio" name="question-2" value="0" disabled />
                            <i class="fas fa-check-circle"></i>
                        </label>
                        <span>Answer 0</span>
                    </div>
                    <div class="editor-input">
                        <label class="radio">
                            <input class="input" type="radio" name="question-2" value="1" disabled />
                            <i class="fas fa-check-circle"></i>
                        </label>
                        <span>Answer 1</span>
                    </div>
                    <div class="editor-input">
                        <label class="radio">
                            <input class="input" type="radio" name="question-2" value="2" disabled />
                            <i class="fas fa-check-circle"></i>
                        </label>
                        <span>Answer 2</span>
                    </div>
                </form>
            </article>

            <article class="editor-question">
                <div class="editor-input">
                    <button class="input submit action" @click=${questionFunctionality.onAddQuestion}>
                        <i class="fas fa-plus-circle"></i>
                        Add question
                    </button>
                </div>
            </article>
        </div>
    </section>
`;

export function showCreatePage(ctx) {
    let isAddingQuestion = false;

    async function onSaveQuiz({ title, topic }, form) {
        if (!title) {
            return alert('Please enter a title.');
        } else if (!topic) {
            return alert('Please select a topic.');
        }

        // send createquiz request
        form.reset();
    }

    const questionFunctionality = createQuestionFunctionality();

    update();

    function update() {
        ctx.render(createTemplate(isAddingQuestion, createSubmitHandler(onSaveQuiz), questionFunctionality));
    }

    function createQuestionFunctionality() {
        return {
            onAddQuestion,
            onSaveQuestion,
            onCancelQuestion,
        };

        function onAddQuestion() {
            isAddingQuestion = true;
            update();
        }

        function onSaveQuestion() {
            isAddingQuestion = false;
            update();
        }

        function onCancelQuestion() {
            isAddingQuestion = false;
            update();
        }
    }
}
