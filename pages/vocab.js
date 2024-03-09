import renderToDom from '../utils/renderToDom';

const showVocab = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 id="title" class="card-title">${item.title}</h5>
      <h6 id="language" class="card-subtitle">${item.language_id}</h6>
      <p id="definition" class="card-text">${item.definition}</p>
      <a href="#" id="edit" class="card-link">Edit</a>
      <a href="#" id="delete" class="card-link">Delete</a>
    </div>
  </div>`;
  });

  renderToDom('#cards-container', domString);
};

export default showVocab;
