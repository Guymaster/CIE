import { useEffect } from "react";

function RessourcesOnglet(){
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
        <div>
            RessourcesOnglet
        </div>
    );
}

export default RessourcesOnglet;