import config from './appConfig';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
const store = getFirestore();
const auth = getAuth();

async function registerUser(email, mdp, userData){
    return Promise.resolve(()=>{
        createUserWithEmailAndPassword(auth, email, mdp, userData)
        .then(async (userCredential) => {
            await setDoc(doc(store, "utilisateur", userCredential.user.uid), userData);
            return {success: true, data: userCredential.user};
        })
        .catch((error) => {
            return {success: false, code: error.code, msg: error.message};
        });
    });
}