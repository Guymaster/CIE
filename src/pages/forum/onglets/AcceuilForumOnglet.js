import "../../../styles/ForumPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import EditorJS from '@editorjs/editorjs';
import logoImg from '../../../assets/logoClubInfo.svg';


const LinkTool = require('@editorjs/link');
const CodeTool = require('@editorjs/code');
const SimpleImage = require('@editorjs/simple-image');

function AcceuilForumOnglet(){
    var editor;
    const Navigate = useNavigate();
    const [addQuest, setAddQuest] = useState(false);
    const [addQuestTitre, setAddQuestTitre] = useState("");
    const [addQuestDesc, setAddQuestDesc] = useState("");
    const [addQuestSection, setAddQuestSection] = useState("");
    const [addQuestTags, setAddQuestTags] = useState([]);
    const [questions, setQuestions] = useState([
        {
            titre: 'COMMENT NE PLUS ETRE BETE', id: 'QUEST001a', auteurNom: 'Guymaster', auteurID: '001', date: '010456', tags: ['avc', 'bepc', 'esatic', 'oeuf', 'tomate', 'salade', 'garba'], section: 'Badding', nbReponses: 23
        },
        {
            titre: 'COMMENT NE PLUS ETRE BETE', id: 'QUEST002', auteurNom: 'Guymaster', auteurID: '001', date: '010456', tags: ['avc', 'bepc', 'esatic'], section: 'Badding', nbReponses: 23
        }
    ]);
    
    const [selectedSection, setSelectedSection] = useState('TOUT');
    useEffect(()=>{
        editor = new EditorJS({
            placeholder: "Ecrivez Ici",
            holder: 'addQuestDesc',
            tools: {
                linkTool: LinkTool,
                image: SimpleImage,
                code: CodeTool
            },
            minHeight: 40,
        });
    }, []);
    return (
        <main className="forumMain">
            <div className={(addQuest)?"addQuestBox addQuestBoxActive":"addQuestBox"}>
                <div className="addQuestContent">
                    <div className="addQuestBoxTitre"> 
                        Ajouter une Question
                    </div>
                    <label htmlFor="addQuestTitre">Titre de la Question</label>
                    <input type='text' id="addQuestTitre" placeholder="Soyez clair" onChange={(e)=>{setAddQuestTitre(e.target.value)}}/>
                    <label htmlFor="addQuestDesc" onChange={(e)=>{setAddQuestDesc(e.target.value)}}>Ajoutez une Description</label>
                    <div id="addQuestDesc"></div>
                    <label htmlFor="addQuestSection" >Sélectionnez une Section</label>
                    <select onChange={(e)=>{setAddQuestSection(e.target.value)}}>
                        <option value="IA">Intelligence Artificielle</option>
                        <option value="Mobile">Développement Mobile</option>
                        <option value="Web">Développement Web</option>
                        <option value="IOT">IOT/Domotique</option>
                        <option value="Sécurité">Sécurité</option>
                        <option value="Big Data">Big Data</option>
                    </select>
                    <label htmlFor="addQuestTags">Ajoutez des Mots-clés</label>
                    <input onChange={(e)=>{setAddQuestTags(e.target.value.split(' '))}} type='text' id="addQuestTags" placeholder="Séparez les Tags par des espaces: Ex: html css php"/>
                    <div className="addConfirmRow">
                        <div className="addBoxCancelBTN" onClick={()=>{setAddQuest(false)}}>Annuler</div>
                        <div className="addBoxConfirmBTN">Confirmer</div>
                    </div>
                </div>
            </div>
            <div className="forumMenuBox">
                <img src={logoImg} className="logo" onClick={()=>{Navigate('/')}}/>
                <div className="forumTitre">Forum</div>
                <div className="forumTabLink formMenuSelected">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"/></svg>
                    <span>Rechercher une Question</span>
                </div>
                <div className="forumTabLink" onClick={()=>{Navigate('/forum/mestopics')}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>
                    <span>Mes Questions</span>
                </div>
                <div className="forumPlusBTN" onClick={()=>{setAddQuest(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                </div>
            </div>
            <div className="forumSearchBox">
            <img src="Forumbanner.png"  className="forumBanner"/>
            <input className="searchTopicInput" type="search" placeholder="Entrez un Mot-clé"/>
            <div className="indication"></div>
            <div className="sectionBox">
                <div onClick={()=>{setSelectedSection('TOUT')}} className={(selectedSection=='TOUT')?"sectionName sectionNameSelected":"sectionName"}>Tout</div>
                <div onClick={()=>{setSelectedSection('WEB')}} className={(selectedSection=='WEB')?"sectionName sectionNameSelected":"sectionName"}>Web</div>
                <div onClick={()=>{setSelectedSection('IA')}} className={(selectedSection=='IA')?"sectionName sectionNameSelected":"sectionName"}>IA</div>
                <div onClick={()=>{setSelectedSection('IOT')}} className={(selectedSection=='IOT')?"sectionName sectionNameSelected":"sectionName"}>IOT</div>
                <div onClick={()=>{setSelectedSection('SECU')}} className={(selectedSection=='SECU')?"sectionName sectionNameSelected":"sectionName"}>Sécurité</div>
                <div onClick={()=>{setSelectedSection('BD')}} className={(selectedSection=='BD')?"sectionName sectionNameSelected":"sectionName"}>Big Data</div>
                <div onClick={()=>{setSelectedSection('MOBILE')}} className={(selectedSection=='MOBILE')?"sectionName sectionNameSelected":"sectionName"}>Mobile</div>
            </div>
            <div className="questionBox">
                {
                    questions.map(
                        (value, index, array)=>{
                            return <QuestionItem key={value.id} nbReponses={value.nbReponses} id={value.id} tags={value.tags} section={value.section} titre={value.titre}/>
                        }
                    )
                }
            </div>
            </div>
            
            <div className="newQuestBTN">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
            </div>
        </main>
    );
}

export default AcceuilForumOnglet;