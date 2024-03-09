import { getSingleVocab } from './vocabData';
import { getSingleLanguage } from './languageData';

const getDetails = async (firebaseKey) => {
  const vocabObject = await getSingleVocab(firebaseKey);
  const languagesObject = await getSingleLanguage(vocabObject.language);
  return { ...vocabObject, languagesObject };
};
export default getDetails;
