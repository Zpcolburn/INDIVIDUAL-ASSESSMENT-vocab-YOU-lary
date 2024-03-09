import getDetails from '../api/mergedData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';
import { deleteVocab, getVocab } from '../api/vocabData';

const domEvents = (uid) => {
  document.querySelector('#cards-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');

      getDetails(firebaseKey).then((cardObj) => {
        addVocabForm(uid, cardObj);
      });
    }

    if (e.target.id.includes('delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(uid).then((cards) => showVocab(cards, uid));
        });
      }
    }
  });
};

export default domEvents;
