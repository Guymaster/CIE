import './../../styles/style_header.css';
import logoImg from '../../assets/logoClubInfo.svg';

export default function Header(){
    return (<header className='deplace'>
        <div id="logo">
            <img src={logoImg}/>
            <div id='typo'>
                CI<span id='e'>E</span> <span id='admin'>SATIC</span>
            </div>
        </div>
        <nav>
            <ul>
                <li>Acceuil</li>
                <li>Ressources</li>
                <li>Réalisations</li>
                <li>A Propos</li>
                <li>Forum</li>
            </ul>
        </nav>
        <div className='compte'>
            <div className='compteNom'>@Guymaster</div>
            <img className='compteProfil'/>
        </div>
    </header>);
}