import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../styles/RegisterPage.css';
import '../../datas/firebase.js';
import {useState} from 'react';
import {inscription} from '../../firebase/operations.js';
import { useNavigate } from 'react-router-dom';

function RegisterPage(){
    const Navigate = useNavigate();
    const [esaticien, setEsaticien] = useState(false);
    function tenterInscription(){
        let nomComplet = document.getElementById('nomComplet').value;
        let pseudo = document.getElementById('pseudo').value;
        let tel = document.getElementById('tel').value;
        let email = document.getElementById('email').value;
        let desc = document.getElementById('desc').value;
        let mdp = document.getElementById('mdp').value;
        let cmdp = document.getElementById('cmdp').value;
        let errBox = document.getElementById('errBox');
        let matricule = document.getElementById('matricule').value;
        if(cmdp!=mdp){
            errBox.innerText = 'Les 2 Mots de Passe doivent être égaux'
        }
        else{
            inscription(email, mdp, (esaticien?matricule:null), nomComplet, pseudo, tel, desc).then((rep)=>{
                if(rep.success){
                    Navigate('/connexion');
                }
                else{
                    errBox.innerText = rep.error;
                }
            });
        }
    }
    return (
        <>  
            <form>
                <div className='formTitre'>INSCRIPTION</div>
                <label>Etes-vous un Etudiant de l'ESATIC?</label>
                <div className={(esaticien==true)? 'radBox enable':'radBox disabled'}>
                    <div id='rad' onClick={()=>{if (esaticien==true) setEsaticien(false); else setEsaticien(true); console.log(esaticien)}}>
                        {esaticien? <>OUI</>:<>NON</>}
                    </div>
                </div>
                {
                    (esaticien==true)?
                    <>
                        <label htmlFor='matricule'>Entrez votre Matricule</label>
                        <input type='text' placeholder='Ex: 20-ESATIC0107AG' id='matricule'/>
                    </>
                    :
                    <></>
                }
                <label htmlFor='nomComplet'>Nom et Prénoms</label>
                <input type='text' id='nomComplet'/>
                <label htmlFor='pseudo'>Choisissez un Pseudo</label>
                <input type='text' placeholder='Ex: Guymaster25' id='pseudo'/>
                <label htmlFor='tel'>Numéro de Téléphone</label>
                <input type='text' id='tel'/>
                <label htmlFor='email'>Adresse E-Mail</label>
                <input type='text' id='email'/>
                <label htmlFor='desc'>Brève Description</label>
                <textarea maxLength='100' id='desc'></textarea>
                <label htmlFor='mdp'>Mot de Passe</label>
                <input type='password' id='mdp'/>
                <label htmlFor='cmdp'>Confirmer Mot de Passe</label>
                <input type='password' id='cmdp'/>
                <button id='validBTN' onClick={(ev)=>{ev.preventDefault(); tenterInscription();}}>Valider</button>
                <div className='errBox' id='errBox'>
                </div>
            </form>
        </>
    );
}

export default RegisterPage;