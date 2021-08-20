import firebase from "firebase";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyArELG22qxJnW4FEaK_abbw_qcPfLt1-nY",
    authDomain: "mychat-1162b.firebaseapp.com",
    projectId: "mychat-1162b",
    storageBucket: "mychat-1162b.appspot.com",
    messagingSenderId: "170182554722",
    appId: "1:170182554722:web:fc336c0747a03b70234d3b"
}).auth();

/*{
    apiKey: "AIzaSyArtiV46CImtSjCMgguYv7a8OYqD4pDPto",
    authDomain: "intern-14c93.firebaseapp.com",
    projectId: "intern-14c93",
    storageBucket: "intern-14c93.appspot.com",
    messagingSenderId: "585229632272",
    appId: "1:585229632272:web:f3910fa64290a8fccd9b95"
  };*/