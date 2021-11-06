// Config module aliases
import aliases from 'module-alias';
aliases.addAlias('~', __dirname);

// Initializing app
import * as admin from 'firebase-admin';
admin.initializeApp();

export * from './api/http/get-users';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
