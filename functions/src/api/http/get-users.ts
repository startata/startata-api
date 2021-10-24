import { https } from 'firebase-functions';

export const getUser = https.onCall((data, context) => {
  return 'ok';
});
