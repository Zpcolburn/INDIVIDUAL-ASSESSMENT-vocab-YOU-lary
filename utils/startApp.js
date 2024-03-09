import { getVocab } from '../api/vocabData';
// import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import showVocab from '../pages/vocab';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  // domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  // logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getVocab(uid).then((vocab) => showVocab(vocab, uid));
};

export default startApp;
