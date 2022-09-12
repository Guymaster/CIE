import Header from "../components/Header";
import AcceuilDashOnglet from "./onglets/AcceuilDashOnglet";
import ArticleshOnglet from "./onglets/ArticlesOnglet";
import ParamsOnglet from "./onglets/ParamsOnglet";
import ProfilOnglet from "./onglets/ProfilOnglet";
import ProposOnglet from "./onglets/ProposIOnglet";
import RessourcesOnglet from "./onglets/RessourcesOnglet";
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import '../../styles/DashPage.css';
import logoImg from '../../assets/logoClubInfo.svg';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashPage(){
    document.addEventListener('scroll', (ev)=>{onScroll(window.pageYOffset)})
    useEffect(()=>{
        addListeners();
    }, []);
    const navigate = useNavigate();
    function VersTab(tab){
        navigate(tab)
    }    
    return (
        <>  
            <header id='header'>
                <div id="logo">
                    <img src={logoImg}/>
                    <div id='typo'>
                        CI<span id='e'>E</span> <span id='admin'>SATIC</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="navLink" onClick={()=>{VersTab('/acceuil')}} id="acceuilLink">Acceuil</li>
                        <li className="navLink" onClick={()=>{VersTab('/ressources')}} id="ressourcesLink">Ressources</li>
                        <li className="navLink" onClick={()=>{VersTab('/propos')}} id="proposLink">A Propos</li>
                        <li className="navLink" onClick={()=>{VersTab('/forum')}}>Forum</li>
                    </ul>
                </nav>
                <div className='compte'>
                    <div className='compteNom'>@Guymaster</div>
                    <img className='compteProfil'/>
                    <div className="drawer" id="drawerBTN">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
                    </div>
                </div>
                <div className="miniBar">
                    <ul>
                        <li className="navLink" id="acceuilMiniLink" onClick={()=>{VersTab('/acceuil')}}>Acceuil</li>
                        <li className="navLink" id="ressourcesMiniLink" onClick={()=>{VersTab('/ressources')}}>Ressources</li>
                        <li className="navLink" id="proposMiniLink" onClick={()=>{VersTab('/propos')}}>A Propos</li>
                        <li className="navLink" onClick={()=>{VersTab('/forum')}}>Forum</li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="test">
                    <Outlet/>
                </div>
            </main>
            <footer>
                <div className="footBox">
                    <div className="footBoxTitre">CONTACTS</div>
                </div>
                <div className="footBox">
                    <div className="footBoxTitre">MENTIONS</div>
                </div>
                <div className="footBox">
                    <div className="footBoxTitre">PARTENAIRES</div>
                </div>
            </footer>
        </>
    );
}

const tabList = [
    'acceuil',
    'ressources',
    'realisations',
    'propos',
    'forum'
]

function onScroll(scrollY){
    if(scrollY>10){
        document.getElementById('header').setAttribute('class', 'deplace');
    }
    else{
        document.getElementById('header').setAttribute('class', '');
    }
}

function toggleMiniBar(){
    let miniBar = document.querySelector('.miniBar');
    let miniBarExtend = document.querySelector('.miniBarExtend');
    if(miniBarExtend){
        miniBarExtend.setAttribute('class', 'miniBar');
    }
    else if(miniBar){
        miniBar.setAttribute('class', 'miniBar miniBarExtend');
    }
}

function onTabClick(e, i){
    console.log(tabList[i], i)
}

function addListeners(){
    document.getElementById('drawerBTN').addEventListener('click', ()=>{
        toggleMiniBar();
    });
}

export default DashPage;