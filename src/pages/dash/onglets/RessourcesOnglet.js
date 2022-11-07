import { useEffect } from "react";
import { useState } from "react";
import RessourceItem from "../../components/RessourceItem";
import { desQueArrive } from "../../../firebase/operations";
import '../../../styles/RessourcesOnglet.css';

function RessourcesOnglet(){
    const [addActive, setAddActive] = useState(true);
    const [user, setUser] = useState(null);
    const [ressources, setRessources] = useState([
        {
            titre: 'Les bases du HTML',
            lien: 'https://youtube.com',
            auteurNom: 'Guymaster',
            auteurID: 'KJCJCJ777G',
            date: '20/03/2022',
            type: 'Vidéo'
        },
        {
            titre: 'Les bases du HTML',
            lien: 'https://youtube.com',
            auteurNom: 'Guymaster',
            auteurID: 'KJCJCJ777G',
            date: '20/03/2022',
            type: 'Vidéo'
        }
    ]);
    useEffect(()=>{
        let links = document.querySelector('.navLink');
        links.setAttribute('class', '.navLink');
        document.getElementById('acceuilMiniLink').setAttribute('class', 'navLink');
        document.getElementById('proposMiniLink').setAttribute('class', 'navLink');
        document.getElementById('ressourcesMiniLink').setAttribute('class', 'navLink');
        document.getElementById('ressourcesLink').setAttribute('class', 'navLink navSelected');
        document.getElementById('ressourcesMiniLink').setAttribute('class', 'navLink navSelected');
        desQueArrive((userObj)=>{setUser(userObj)});
    }, []);
    return (
        <div className="corps">
            <div className='modifSaveBTN' onClick={()=>{}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
            </div>
            <input type='search' className="searchBar" placeholder="Recherchez avec des Mots-clés"/>
            <div className="resultBox">
            {
                ressources.map((value, index, array)=>{
                    return (
                        <RessourceItem key={index} type={value.type} titre={value.titre} lien={value.lien} auteurNom={value.auteurNom} auteurID={value.auteurID} date={value.date} owner={/*(user.id==value.auteurID)?true:false*/false}/>
                    );
                })
            }
            </div>
        </div>
    );
}

export default RessourcesOnglet;