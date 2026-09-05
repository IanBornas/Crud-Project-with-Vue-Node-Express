const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
let serviceAccount;

// 1. Check if we are running in Vercel (using the Env Variable)
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} 
// 2. Otherwise, use the local file for local development
else {
  serviceAccount = require("./serviceAccountKey.json");
}

//  Initialize Firebase
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = {db}