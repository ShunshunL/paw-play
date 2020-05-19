import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzAYF2nlwiwhAp-NnYCLP9tv6YHAFGZyM",
  authDomain: "best-friends-82ee1.firebaseapp.com",
  databaseURL: "https://best-friends-82ee1.firebaseio.com",
  projectId: "best-friends-82ee1",
  storageBucket: "best-friends-82ee1.appspot.com",
  messagingSenderId: "766302367225",
  appId: "1:766302367225:web:f1fd2b9cd2e9c907fba128",
  measurementId: "G-NP57K7KE94"
};

firebase.initializeApp(firebaseConfig);

export const createUser = async (userObj, otherData) => {
  if (!userObj) {
    return 
  }  
  const user = firestore.doc(`users/${userObj.uid}`)
  const snapShot = await user.get()
  if(!snapShot.exists) {
    const { displayName, email } = userObj
    const created = new Date()

    try {
      await user.set({
        displayName, email, created, ...otherData
      })
    } catch (err) {
      console.log('error during user creation', err.message)
    }
  }

  return user
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
