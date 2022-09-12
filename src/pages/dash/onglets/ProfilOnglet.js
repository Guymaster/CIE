import '../../../styles/ProfilOnglet.css';
import { identiconSvg } from '../../../utils/avatar.js';
import {useState} from 'react';

function ProfilOnglet(){
    const [modif, setModif] = useState(false);
    const [modifPassword, setModifPassword] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <>
            <div className='modifSaveBTN' onClick={()=>{if(modif){setModif(false);}else{setModif(true);}}}>
                {
                    (modif)?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/></svg>
                }
            </div>
            <div className='profilContent'>
                <div className="avatarBox">
                    <div>
                        <identicon-svg username="Guymaster"></identicon-svg>
                    </div>
                </div>
                <div className="infoBox">
                    <div className='infoProfil'>
                        <div className='infoPart'>Profil</div>
                        <div className='infoRow'>
                            <div className='infoTitre'>Nom Complet</div>
                            {
                                (modif)?
                                <input type='texte' className='infoVal'/>
                                :
                                <><div>A</div></>
                            }
                        </div>
                        <div className='infoRow'>
                            <div className='infoTitre'>Pseudo</div>
                            {
                                (modif)?
                                <input type='texte' className='infoVal'/>
                                :
                                <><div>A</div></>
                            }
                        </div>
                        <div className='infoRow'>
                            <div className='infoTitre'>Type</div>
                            {
                                (modif)?
                                <input type='texte' className='infoVal'/>
                                :
                                <><div>A</div></>
                            }
                        </div>
                        <div className='infoRow'>
                            <div className='infoTitre'>Section</div>
                            {
                                (modif)?
                                <input type='texte' className='infoVal'/>
                                :
                                <><div>A</div></>
                            }
                        </div>
                        <div className='deconnBTN' onClick={()=>{if(modifPassword){setModifPassword(false);}else{setModifPassword(true);}}}>
                            {
                                (modifPassword)?
                                <>Annuler Changement du Mot de Passe</>
                                :
                                <>Changer le Mot de Passe</>

                            }
                        </div>
                        {
                            (modifPassword)?
                            <>
                                <div className='infoPart'>Mot de Passe</div>
                                <div className='infoRow'>
                                    <div className='infoTitre'>Ancien</div>
                                    <input type='password' className='infoVal'/>
                                </div>
                                <div className='infoRow'>
                                    <div className='infoTitre'>Nouveau</div>
                                    <input type='password' className='infoVal'/>
                                </div>
                                <div className='infoRow'>
                                    <div className='infoTitre'>Confirmer Nouveau</div>
                                    <input type='password' className='infoVal'/>
                                </div>
                            </>
                            :
                            <></>
                        }
                    </div>
                    <div className='deconnBTN'>Déconnexion</div>
                </div>
            </div>
        </>
    );
}

export default ProfilOnglet;