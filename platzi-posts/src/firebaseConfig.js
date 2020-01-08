import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}

const firebaseConfig = {
  apiKey: "AIzaSyBLUMUETi-qN_ZHy7PnptGNP81qT05SKrc",
  authDomain: "curso-cypress-platzi.firebaseapp.com",
  databaseURL: "https://curso-cypress-platzi.firebaseio.com",
  projectId: "curso-cypress-platzi",
  storageBucket: "curso-cypress-platzi.appspot.com",
  messagingSenderId: "702833800520",
  appId: "1:702833800520:web:f0380dfae632fe81106f7d",
  measurementId: "G-ER97L9HNZP"
};

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
