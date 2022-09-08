import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../styles/RegisterPage.css';
import '../../datas/firebase.js';
import {useState} from 'react';

function RegisterPage(){
    const [esaticien, setEsaticien] = useState(false);
    function tenterInscription(){
        console.log('on tente?')
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
                <div className='errBox'>
                    jnnqnvq qv vnq vqnvqnv qn vj 
                </div>
            </form>
        </>
    );
}

export default RegisterPage;