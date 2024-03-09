import { getVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const navigationEvents = (uid) => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });
};

export default navigationEvents;
