import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import config from "../datas/appConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getFirestore, collection, query, where, getDocs, getDoc } from "firebase/firestore"; 

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
const auth = getAuth();
const store = getFirestore();

export async function inscription(email, password, matricule, nomComplet, pseudo, tel, description){
    return new Promise(async resolve => {
        let usersRef = collection(store, 'utilisateurs');
        let pseudoQuery = query(usersRef, where('pseudo', '==', pseudo));
        let pseudoQuerySnap = await getDocs(pseudoQuery);
        if(pseudoQuerySnap.empty){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setDoc(doc(store, "utilisateurs", userCredential.user.uid), {
                    nomComplet: nomComplet,
                    pseudo: pseudo,
                    matricule: matricule,
                    telephone: tel,
                    type: 'Invité',
                    description: description
                }).then(()=>{
                    resolve({success: true, result: userCredential});
                }).catch((e)=>{
                    resolve({success: false, result: null, error: 'Echec! Réessayez ultérieurement'});
                })
            })
            .catch((error) => {
                resolve({success: false, result: null, error: 'Echec! Réessayez avec une autre adresse E-mail'});
            });
        }
        else{
            resolve({success: false, result: null, error: 'Echec! Ce Pseudo est déjà pris'});
        }
    });
}

export async function connexion(email, mdp){
    return new Promise(async resolve => {
        signInWithEmailAndPassword(auth, email, mdp).then(async(userCred)=>{
            if(userCred){
                const userRef = doc(store, "utilisateurs", userCred.user.uid);
                const userSnap = await getDoc(userRef);
                resolve({
                    email: email,
                    id: userCred.user.uid,
                    description: userSnap.data().description,
                    nomComplet: userSnap.data().nomComplet,
                    matricule: userSnap.data().matricule,
                    pseudo: userSnap.data().pseudo,
                    type: userSnap.data().type,
                    telephone: userSnap.data().telephone
                });
            }
            else{
                resolve(null);
            }
        }).catch((e)=>{
            resolve(null);
        });
    });
}

export async function getUserData(user){
    return new Promise(async resolve => {
        const userRef = doc(store, "utilisateurs", user.uid);
        const userSnap = await getDoc(userRef);
        resolve({
            email: user.email,
            id: user.uid,
            description: userSnap.data().description,
            nomComplet: userSnap.data().nomComplet,
            matricule: userSnap.data().matricule,
            pseudo: userSnap.data().pseudo,
            type: userSnap.data().type,
            telephone: userSnap.data().telephone
        });
    });
}

export async function getUserDataById(userId){
    return new Promise(async resolve => {
        const userRef = doc(store, "utilisateurs", userId);
        const userSnap = await getDoc(userRef);
        resolve({
            id: userId,
            description: userSnap.data().description,
            nomComplet: userSnap.data().nomComplet,
            matricule: userSnap.data().matricule,
            pseudo: userSnap.data().pseudo,
            type: userSnap.data().type,
            telephone: userSnap.data().telephone
        });
    });
}

export async function desQueArrive(callback){
    onAuthStateChanged(auth, async (user)=>{
        let userObj = await getUserData(user);
        callback(userObj);
    });
}