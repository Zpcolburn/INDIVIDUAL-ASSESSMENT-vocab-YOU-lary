import renderToDOM from '../../utils/renderToDom';
import clearDOM from '../../utils/clearDom';
import selectLanguage from './selectLanguage';
// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (uid, obj = {}) => {
  clearDOM();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  <div class="form-group">
    <label for="title" class="form-label">Title</label>
    <input class="form-control" id="title" value="${obj.title || ''}"required>
  </div>
  <div class="form-select" id="select-language">Language
    </div>
  <div class="form-group">
  <label for="definition" class="form-label">Definition</label>
  <input class="form-control" id="definition" value="${obj.definition || ''}"required>
</div>
  <button id="submit-card" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Vocab' : 'Submit Vocab'}</button>
</form> 
  `;
  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.language || ''}`, uid);
};
export default addVocabForm;
