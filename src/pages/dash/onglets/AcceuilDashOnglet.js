import { useEffect } from "react";
import {useState} from 'react';
import '../../../styles/AcceuilDashOnglet.css';
import ActualiteItem from "../../components/ActualiteItem";
import SectionItem from "../../components/SectionItem";
const Rive = require('@rive-app/webgl');

var riveCanvas;

function AcceuilDashOnglet(){
    const [actualites, setActualites] = useState([
        {id: '1', texte: 'Blabla bla bla', image: '#', date: Date.now()},
        {id: '2', texte: 'Blabla bla bla', image: '#', date: Date.now()}
    ]);
    const sections = [
        {
            id: 'MOBILE',
            nom: 'DEVELOPPEMENT MOBILE',
            description: "Le développement d'applications mobiles est l'acte ou le processus par lequel une application mobile est développée pour les appareils mobiles, tels que les assistants numériques personnels, les assistants numériques d'entreprise ou les téléphones mobiles",
            logo: '#'
        },
        {
            id: 'WEB',
            nom: 'DEVELOPPEMENT WEB',
            description: "Le World Wide Web, la toile mondiale ou la toile, est un système hypertexte public fonctionnant sur Internet. Le Web permet de consulter, avec un navigateur, des pages accessibles sur des sites. L’image de la toile d’araignée vient des hyperliens qui lient les pages web entre elles.",
            logo: '#'
        },
        {
            id: 'IA',
            nom: 'INTELLIGENCE ARTIFICIELLE',
            description: "L'intelligence artificielle est « l'ensemble des théories et des techniques mises en œuvre en vue de réaliser des machines capables de simuler l'intelligence humaine ». Elle englobe donc un ensemble de concepts et de technologies, plus qu'une discipline autonome constituée.",
            logo: '#'
        },
        {
            id: 'IOT',
            nom: 'INTERNET DES OBJETS',
            description: "L'Internet des objets ou IOT est l'interconnexion entre l'Internet et des objets, des lieux et des environnements physiques. L'appellation désigne un nombre croissant d'objets connectés à Internet permettant ainsi une communication entre nos biens dits physiques et leurs existences numériques.",
            logo: '#'
        },
        {
            id: 'SECURITE',
            nom: 'SECURITE INFORMATIQUE',
            description: "La sécurité des systèmes d’information ou plus simplement sécurité informatique, est l’ensemble des moyens techniques, organisationnels, juridiques et humains nécessaires à la mise en place de moyens visant à empêcher les attaques informatiques et les fuites de données.",
            logo: '#'
        },
        {
            id: 'BD',
            nom: 'BIG DATA',
            description: "Le big data, les mégadonnées ou les données massives, désigne les ressources d’informations dont les caractéristiques en termes de volume, de vélocité et de variété imposent l’utilisation de technologies et de méthodes analytiques particulières pour générer de la valeur.",
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
        console.log(riveCanvas)
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
                                <ActualiteItem key={value.id} texte={value.texte} image={value.image} droite={(index%2 != 0)? true : false}/>
                            );
                        })
                    :
                        <div>Aucune Actualité Pour le Moment</div>
                }
            </div>
            <div className="partNom">Découvrez nos Sections</div>
            <div className="partBox sectionBox">
                {
                    sections.map((value, index, array)=>{
                        return (
                            <SectionItem key={value.id} nom={value.nom} description={value.description} logo={value.logo}/>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AcceuilDashOnglet;