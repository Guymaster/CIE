import { useEffect } from "react";
import {useState} from 'react';
import '../../../styles/AcceuilDashOnglet.css';
import ActualiteItem from "../../components/ActualiteItem";
import SectionItem from "../../components/SectionItem";
const Rive = require('@rive-app/webgl');

var riveCanvas;

function AcceuilDashOnglet(){
    const [actualites, setActualites] = useState([
        {texte: 'Blabla bla bla', image: '#', date: '25/02/2022'},
        {texte: 'Blabla bla bla', image: '#', date: '26/02/2023'}
    ]);
    const sections = [
        {
            nom: 'Dévéloppement Mobile',
            description: "J'ai pas Inspi",
            logo: '#'
        }
    ];
    useEffect(()=>{
        let links = document.querySelector('.navLink');
        links.setAttribute('class', '.navLink');
        document.getElementById('acceuilMiniLink').setAttribute('class', 'navLink');
        document.getElementById('proposMiniLink').setAttribute('class', 'navLink');
        document.getElementById('ressourcesMiniLink').setAttribute('class', 'navLink');
        document.getElementById('acceuilMiniLink').setAttribute('class', 'navLink navSelected');
        document.getElementById('acceuilLink').setAttribute('class', 'navLink navSelected');
        riveCanvas = new Rive.Rive({
            src: "animinfo.riv",
            canvas: document.getElementById("riveCanvas"),
            autoplay: true,
            onLoad: () => {
                riveCanvas.resizeDrawingSurfaceToCanvas();
              },

            stateMachines: ['ClubMachine']
        });
    }, []);
    return (
        <>
            <div className="welcomeBox">
            <div className="welcomeTexte">
                Club Informatique <span>ESATIC</span>
            </div>
                <canvas id="riveCanvas" style={{width: 563, height: 363}}></canvas>
            </div>
            <div className="partNom">Quoi de Neuf?</div>
            <div className="partBox">
                {
                    (actualites.length > 0)?
                        actualites.map((value, index, array)=>{
                            return (
                                <ActualiteItem texte={value.texte} image={value.image} droite={(index%2 != 0)? true : false}/>
                            );
                        })
                    :
                        <div>Aucune Actualité Pour le Moment</div>
                }
            </div>
            <div className="partNom">Découvrez nos Sections</div>
            <div className="partBox">
                {
                    sections.map((value, index, array)=>{
                        return (
                            <SectionItem nom={value.nom} description={value.description} logo={value.logo}/>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AcceuilDashOnglet;