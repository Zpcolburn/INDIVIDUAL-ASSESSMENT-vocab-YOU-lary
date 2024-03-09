import renderToDom from '../utils/renderToDom';
import { getLanguage } from '../api/languageData';
import clearDOM from '../utils/clearDom';

const emptyVocab = () => {
  const domString = '<h1> Out of Luck!</h1>';
  renderToDom('#cards-container', domString);
};

const showVocab = async (array, uid) => {
  clearDOM();
  if (array.length === 0) {
    emptyVocab();
  } else {
    let domString = '';
    const languages = await getLanguage(uid);
    array.forEach((item) => {
      const singleLanguage = languages.find((lang) => lang.firebaseKey === item.language_id);
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 id="title" class="card-title">${item.title}</h5>
          <h6 id="language" class="card-subtitle">${singleLanguage.language}</h6>
          <p id="definition" class="card-text">${item.definition}</p>
          <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"><span class="fas fa-edit"></span></i>
          <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"><span class="fas fa-trash-alt"></span></i>
        </div>
      </div>`;
    });

    renderToDom('#cards-container', domString);
  }
};

export default showVocab;
