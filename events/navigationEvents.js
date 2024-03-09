import { getVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const navigationEvents = () => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    getVocab().then(showVocab);
  });
};

export default navigationEvents;
