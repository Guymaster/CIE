import { useEffect } from "react";
import { useState } from "react";
import RessourceItem from "../../components/RessourceItem";
import '../../../styles/RessourcesOnglet.css';

function RessourcesOnglet(){
    const [addActive, setAddActive] = useState(true);
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
    }, []);
    return (
        <div className="corps">
            <div className='modifSaveBTN' onClick={()=>{}}>
                +
            </div>
            <input type='search' className="searchBar" placeholder="Recherchez avec des Mots-clés"/>
            <div className="resultBox">
            {
                ressources.map((value, index, array)=>{
                    return (
                        <RessourceItem key={index} type={value.type} titre={value.titre} lien={value.lien} auteurNom={value.auteurNom} auteurID={value.auteurID} date={value.date}/>
                    );
                })
            }
            </div>
        </div>
    );
}

export default RessourcesOnglet;