import { html } from '../../lib/lib.js';

export const editorQuestionTemplate = (onCancel) => html`
    <article class="editor-question">
        <div class="layout">
            <div class="question-control">
                <button class="input submit action"><i class="fas fa-check-double"></i> Save</button>
                <button class="input submit action"><i class="fas fa-times" @click=${onCancel}></i> Cancel</button>
            </div>
            <h3>Question 1</h3>
        </div>
        <form>
            <textarea class="input editor-input editor-text" name="text" placeholder="Enter question"></textarea>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="0" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-0" />
                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="1" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-1" />
                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="2" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-2" />
                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">
                <button class="input submit action">
                    <i class="fas fa-plus-circle"></i>
                    Add answer
                </button>
            </div>
        </form>
    </article>
`;
