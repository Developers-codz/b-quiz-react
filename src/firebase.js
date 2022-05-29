import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {doc,getFirestore,setDoc} from "@firebase/firestore"

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID
})

export const db = getFirestore(app);
export const auth = getAuth(app);


export const createUserDocument = async (user, details) => {
    if (!user) return;
  
    if (doc(db, "users", user.uid)) {
      try {
        await setDoc(doc(db, "users", user.uid), details);
      } catch (error) {
        console.log({ error });
      }
    }
  };
export default app