import { useEffect } from "react";
import {useState} from 'react';
import '../../../styles/AcceuilDashOnglet.css';
import ActualiteItem from "../../components/ActualiteItem";
import SectionItem from "../../components/SectionItem";
const Rive = require('@rive-app/webgl');

var riveCanvas;

function AcceuilDashOnglet(){
    const [actualites, setActualites] = useState([
        {texte: 'Blabla bla bla', image: '#'},
        {texte: 'Blabla bla bla', image: '#'}
    ]);
    const sections = [];
    useEffect(()=>{
        let links = document.querySelector('.navLink');
        links.setAttribute('class', '.navLink');
        document.getElementById('acceuilMiniLink').setAttribute('class', 'navLink');
        document.getElementById('proposMiniLink').setAttribute('class', 'navLink');
        document.getElementById('ressourcesMiniLink').setAttribute('class', 'navLink');
        document.getElementById('acceuilMiniLink').setAttribute('class', 'navLink navSelected');
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
            <div className="partBox">
                {
                    sections.map((value, index, array)=>{
                        return (
                            <SectionItem nom={value.nom} description={value.description} rivePath={value.rivePath}/>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AcceuilDashOnglet;