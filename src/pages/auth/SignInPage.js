import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../styles/RegisterPage.css';

function SignInPage(){
    return (
        <>  
            <form>
                <div className='formTitre'>CONNEXION</div>
                <label htmlFor='pseudo'>Entrez votre Pseudo</label>
                <input type='text' placeholder='Ex: Guymaster25' id='pseudo'/>
                <label htmlFor='mdp'>Entrez votre Mot de Passe</label>
                <input type='password' id='mdp'/>
                <button id='validBTN'>Valider</button>
                <div className='errBox'>
                    jnnqnvq qv vnq vqnvqnv qn vj 
                </div>
            </form>
        </>
    );
}

export default SignInPage;