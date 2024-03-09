import client from '../utils/client';

const endpoint = client.databaseURL;

// GET Language
const getLanguage = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json(uid))
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getLanguage;
