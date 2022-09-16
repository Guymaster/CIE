import '../../styles/RessourceItem.css';
import { identiconSvg } from '../../utils/avatar.js';

export default function RessourceItem({titre, lien, auteurNom, auteurID, date, type}){
    return (<>
        <a href={lien}>
        <div className="ressourBox">
            <div className="ressourBoxTitre">
                {titre}
            </div>
             <div className="ressourInfoBox">
                <div className="ressourType">{type}</div>
                <div className="date">{date}</div>
            </div>
            <div className="auteurBox">
                <div className="auteurNom">{auteurNom}</div>
                <div className='auteurProfil'><identicon-svg username={auteurNom}></identicon-svg></div>
            </div>
        </div>
        </a>
    </>);
}