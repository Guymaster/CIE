import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import config from "../datas/appConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getFirestore, collection, query, where, getDocs, getDoc, addDoc, orderBy, limit, deleteDoc } from "firebase/firestore"; 

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
const auth = getAuth();
const store = getFirestore();

/***
 * AUTENTIFICATION
 ***/

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
                let userRef = doc(store, "utilisateurs", userCred.user.uid);
                let userSnap = await getDoc(userRef);
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
        let userRef = doc(store, "utilisateurs", user.uid);
        let userSnap = await getDoc(userRef);
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
        let userRef = doc(store, "utilisateurs", userId);
        let userSnap = await getDoc(userRef);
        resolve({
            id: userId,
            description: userSnap.data().description,
            nomComplet: userSnap.data().nomComplet,
            matricule: userSnap.data().matricule,
            pseudo: userSnap.data().pseudo,
            type: userSnap.data().type,
            telephone: userSnap.data().telephone,
            email: userSnap.data().email,
        });
    });
}

export async function modifUserData(id, description, nomComplet, telephone, email){
    return new Promise(async resolve => {
        setDoc(doc(store, 'utilisateurs', id, {
            description: description,
            nomComplet: nomComplet,
            telephone: telephone,
            email: email,
          })).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}

export async function desQueArrive(callback){
    onAuthStateChanged(auth, async (user)=>{
        let userObj = await getUserData(user);
        callback(userObj);
    });
}

/***
 * FORUM
 ***/

export async function addQuestion(titre, description, section, tags, auteurID){
    return new Promise(async resolve => {
        addDoc(collection(store, "questions"), {
            titre: titre,
            description: description,
            section: section,
            tags: tags,
            date: Date.now(),
            auteurID: auteurID
          }).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}

export async function getQuestionAll(){
    return new Promise(async resolve => {
        let liste = [];
        let questionsRef = collection(store, "questions");
        const q = query(questionsRef, orderBy("date", "desc"), limit(20));
        getDocs(q).then((snaps)=>{
            let i = 1;
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    titre: snap.data().titre,
                    date: snap.data().date,
                    description: snap.data().description,
                    tags: snap.data().tags,
                    auteurID: snap.data().auteurID,
                    section: snap.data().section,
                    nbReponses: await getNbReponseForQuestion(snap.id)
                };
                liste.push(obj);
                if(i==snaps.size){
                    console.log('fin');
                    resolve([ ...liste]);
                }
                i++;
            });
        })
    });
}

export async function getQuestionByAuteur(auteurID){
    return new Promise(async resolve => {
        let liste = [];
        let questionsRef = collection(store, "questions");
        const q = query(questionsRef, where("auteurID", "==", auteurID), orderBy("date", "desc"));
        getDocs(q).then((snaps)=>{
            let i = 1;
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    titre: snap.data().titre,
                    date: snap.data().date,
                    description: snap.data().description,
                    tags: snap.data().tags,
                    auteurID: snap.data().auteurID,
                    section: snap.data().section,
                    nbReponses: await getNbReponseForQuestion(snap.id)
                };
                liste.push(obj);
                if(i==snaps.size){
                    console.log('fin');
                    resolve([ ...liste]);
                }
                i++;
            });
        })
    });
}

export async function getQuestionAllByTag(tags){
    return new Promise(async resolve => {
        let liste = [];
        let questionsRef = collection(store, "questions");
        const q = query(questionsRef, where('tags', 'array-contains-any', tags));
        getDocs(q).then((snaps)=>{
            let i = 1;
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    titre: snap.data().titre,
                    date: snap.data().date,
                    description: snap.data().description,
                    tags: snap.data().tags,
                    auteurID: snap.data().auteurID,
                    section: snap.data().section,
                    nbReponses: await getNbReponseForQuestion(snap.id)
                };
                liste.push(obj);
                if(i==snaps.size){
                    console.log('fini', liste)
                    resolve([...liste]);
                }
                i++;
            });
        })
    });
}

export async function getQuestionBySection(section){
    return new Promise(async resolve => {
        let liste = [];
        let questionsRef = collection(store, "questions");
        const q = query(questionsRef, where("section", "==", section), orderBy('date', 'desc'));
        getDocs(q).then((snaps)=>{
            console.log('appzelé')
            if(snaps.empty){
                console.log('empty')
                resolve([...liste])
            }
            else{
                console.log('not empty')
                let i = 1;
                snaps.forEach(async (snap)=>{
                    let obj = {
                        id: snap.id,
                        titre: snap.data().titre,
                        date: snap.data().date,
                        description: snap.data().description,
                        tags: snap.data().tags,
                        auteurID: snap.data().auteurID,
                        section: snap.data().section,
                        nbReponses: await getNbReponseForQuestion(snap.id)
                    };
                    console.log(section, obj)
                    liste.push(obj);
                    if(i==snaps.size){
                        console.log('fini', liste)
                        resolve([...liste]);
                    }
                    i++;
                });
            }
        })
    });
}

export async function getQuestionBySectionByTags(section, tags){
    return new Promise(async resolve => {
        let liste = [];
        let questionsRef = collection(store, "questions");
        const q = query(questionsRef, where("section", "==", section), where('tags', 'array-contains-any', tags));
        getDocs(q).then((snaps)=>{
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    titre: snap.data().titre,
                    date: snap.data().date,
                    description: snap.data().description,
                    tags: snap.data().tags,
                    auteurID: snap.data().auteurID,
                    section: snap.data().section,
                    nbReponses: await getNbReponseForQuestion(snap.id)
                };
                liste.push(obj);
            });
            resolve(liste);
        })
    });
}

async function getNbReponseForQuestion(id){
    return new Promise(async resolve => {
        let reponsesRef = collection(store, "reponses");
        let q = query(reponsesRef, where("idQuestion", "==", id));
        getDocs(q).then((snaps)=>{
            resolve(snaps.size);
        }).catch((e)=>{
            resolve(0);
        });
    });
}

export async function modifQuestion(id, titre, description, section, tags){
    return new Promise(async resolve => {
        setDoc(doc(store, 'questions', id, {
            titre: titre,
            description: description,
            section: section,
            tags: tags,
          })).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}

export async function supprQuestion(id){
    return new Promise(async resolve => {
        deleteDoc(doc(store, 'questions', id)).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}

/***
 * ACTUALITES
 ***/

 export async function getActualiteAll(){
    return new Promise(async resolve => {
        let liste = [];
        let actualitesRef = collection(store, "actualites");
        const q = query(actualitesRef, orderBy("date", "desc"), limit(20));
        getDocs(q).then((snaps)=>{
            let index = 0;
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    texte: snap.data().texte,
                    date: snap.data().date,
                    lienImage: snap.data().lienImage,
                    droite: (index%2==0)? false : true
                };
                liste.push(obj);
                index++;
            });
            resolve(liste);
        })
    });
}

/***
 * RESSOURCES
 ***/

 export async function getRessourceAll(){
    return new Promise(async resolve => {
        let liste = [];
        let ressourcesRef = collection(store, "ressources");
        const q = query(ressourcesRef, orderBy("date", "desc"), limit(20));
        getDocs(q).then((snaps)=>{
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    titre: snap.data().titre,
                    lien: snap.data().lien,
                    date: snap.data().date,
                    type: snap.data().type,
                    auteurID: snap.data().auteurID,
                    auteurNom: snap.data().auteurNom,
                };
                liste.push(obj);
            });
            resolve(liste);
        })
    });
}

export async function getRessourceByTags(tags){
    return new Promise(async resolve => {
        let liste = [];
        let ressourcesRef = collection(store, "ressources");
        const q = query(ressourcesRef, where('tags', 'array-contains-any', tags), orderBy("date", "desc"), limit(50));
        getDocs(q).then((snaps)=>{
            snaps.forEach(async (snap)=>{
                let obj = {
                    id: snap.id,
                    titre: snap.data().titre,
                    lien: snap.data().lien,
                    date: snap.data().date,
                    type: snap.data().type,
                    auteurID: snap.data().auteurID,
                    auteurNom: snap.data().auteurNom,
                };
                liste.push(obj);
            });
            resolve(liste);
        })
    });
}

export async function addRessource(id, titre, lien, auteurNom, auteurID, date, type){
    return new Promise(async resolve => {
        addDoc(collection(store, "ressources"), {
            id: id,
            titre: titre,
            lien: lien,
            auteurNom: auteurNom,
            auteurID: auteurID,
            date: Date.now(),
            type: type
          }).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}

export async function supprRessource(id){
    return new Promise(async resolve => {
        deleteDoc(doc(store, 'ressources', id)).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}

export async function modifRessource(id, titre, lien, type){
    return new Promise(async resolve => {
        setDoc(doc(store, 'questions', id, {
            titre: titre,
            lien: lien,
            type: type
          })).then(()=>{
            resolve(true);
          }).catch(()=>{
            resolve(false);
          });
    });
}