import { getLanguage } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (uid, language) => {
  let domString = '<select id="selectLanguage">';

  getLanguage(uid).then((languageArray) => {
    languageArray.forEach((lang) => {
      domString += `
      <option value=${lang.firebaseKey}
      ${language === lang.firebaseKey ? 'selected' : ''}>${lang.language}</option>`;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};
export default selectLanguage;
