import { useEffect } from "react";

function ProposOnglet(){
    useEffect(()=>{
        let links = document.querySelector('.navLink');
        links.setAttribute('class', '.navLink');
        document.getElementById('acceuilMiniLink').setAttribute('class', 'navLink');
        document.getElementById('proposMiniLink').setAttribute('class', 'navLink');
        document.getElementById('ressourcesMiniLink').setAttribute('class', 'navLink');
        document.getElementById('proposLink').setAttribute('class', 'navLink navSelected');
        document.getElementById('proposMiniLink').setAttribute('class', 'navLink navSelected');
    }, []);
    return (
        <div>
            ProposOnglet
        </div>
    );
}

export default ProposOnglet;