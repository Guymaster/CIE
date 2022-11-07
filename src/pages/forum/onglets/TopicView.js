import "../../../styles/TopicView.css";
import EditorJS from '@editorjs/editorjs';
import { useEffect, useState } from "react";
import ReponseItem from "../../components/ReponseItem";
import EditorConfigs from "../../../utils/editorConfig";
import { useLocation } from "react-router-dom";

function TopicView(){
    const [editor, setEditor] = useState(null);
    const [question, setQuestion] = useState({});
    const [reponseListe, setReponseListe] = useState([]);
    const location = useLocation();
    const questionID = location.pathname.split('/')[location.pathname.split('/').length - 1];
    const EnableDisableEditor = ()=>{
        let box = document.querySelector('.writeBox');
        box.setAttribute('class', (box.getAttribute('class')=='writeBox')?'writeBox writeBoxActive':'writeBox');
    };
    const fetchQuestion = async () => {

    };
    const fetchReponses = async () => {

    };
    useEffect(()=>{
        console.log('loc ', questionID)
        setEditor(new EditorJS({
            placeholder: "Ecrivez Ici",
            holder: 'inputReponseBox',
            tools: EditorConfigs.tools,
            i18n: EditorConfigs.i18n,
        }));
    }, []);
    return (
        <>
            <div className="writeBoxEcrireBTN" onClick={()=>{EnableDisableEditor()}}>Répondre</div>
            <div className="topicEntete">
                <div className="topicEnteteTitre">
                    BLA BLA VNVEV CZNCJNE ECVNEV KNVEKNKV KENVVNE
                </div>
                <div className="topicEnteteDate">25/02/2022 à 10H30</div>
                <div className="topicEnteteDescription">
                </div>
            </div>
            <div className="repBox">
                <ReponseItem/>
            </div>
            <div className="writeBox">
                <div className="writeBoxEntete"> 
                    <div className="writeBoxCancelBTN" onClick={()=>{EnableDisableEditor(); editor.clear()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </div>
                    <div className="writeBoxEnteteTitre">Répondre</div>
                </div>
                <div id="inputReponseBox"></div>
                <div className="confirmRow">
                    <div className="writeBoxConfirmBTN">Envoyer</div>
                </div>
            </div>
        </>
    );
}

export default TopicView;