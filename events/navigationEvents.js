import { getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';

const navigationEvents = (uid) => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });

  document.querySelector('#create').addEventListener('click', () => {
    addVocabForm(uid);
  });
};
export default navigationEvents;
