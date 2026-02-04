const firebaseConfig = {
  apiKey: "AIzaSyDPsmszltW5cksKnjXF96__B3OclWaiGgA",
  authDomain: "lik-app-e1d76.firebaseapp.com",
  projectId: "lik-app-e1d76"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
