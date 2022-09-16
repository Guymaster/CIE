import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../styles/RegisterPage.css';
import {connexion} from '../../firebase/operations.js';
import { useNavigate } from 'react-router-dom';

function SignInPage(){
    const Navigate = useNavigate();
    function tenterConnexion(){
        let email = document.getElementById('email').value;
        let mdp = document.getElementById('mdp').value;
        let errBox = document.getElementById('errBox');
        connexion(email, mdp).then((rep)=>{
            if(rep){
                Navigate('/');
            }
            else{
                errBox.innerText('Identifiants Erronés');
            }
        });
    }
    return (
        <>  
            <form>
                <div className='formTitre'>CONNEXION</div>
                <label htmlFor='pseudo'>Entrez votre E-mail</label>
                <input type='email' id='email'/>
                <label htmlFor='mdp'>Entrez votre Mot de Passe</label>
                <input type='password' id='mdp'/>
                <button id='validBTN' onClick={(e)=>{e.preventDefault(); tenterConnexion()}}>Valider</button>
                <div className='errBox' id='errBox'>
                </div>
            </form>
        </>
    );
}

export default SignInPage;