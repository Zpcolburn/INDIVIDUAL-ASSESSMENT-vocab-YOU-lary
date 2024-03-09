import { createVocab, updateVocab, getVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        language_id: document.querySelector('#selectLanguage').value,
        definition: document.querySelector('#definition').value,
        uid
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A Vocab
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language_id: document.querySelector('#selectLanguage').value,
        definition: document.querySelector('#definition').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocab(vocab, uid));
      });
    }
  });
};

export default formEvents;
