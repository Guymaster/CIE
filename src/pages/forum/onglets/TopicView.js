import "../../../styles/TopicView.css";
import EditorJS from '@editorjs/editorjs';
import { useEffect } from "react";

const LinkTool = require('@editorjs/link');
const CodeTool = require('@editorjs/code');
const SimpleImage = require('@editorjs/simple-image');

function TopicView(){
    const EnableDisableEditor = ()=>{
        let box = document.querySelector('.writeBox');
        box.setAttribute('class', (box.getAttribute('class')=='writeBox')?'writeBox writeBoxActive':'writeBox');
    };
    const editor = new EditorJS({
        placeholder: "Ecrivez votre Réponse",
        holder: 'editorBox',
        tools: {
            linkTool: LinkTool,
            image: SimpleImage,
            code: CodeTool
        }
    });
    useEffect(()=>{
        
    }, []);
    return (
        <>
            <div className="writeBoxEcrireBTN" onClick={()=>{EnableDisableEditor()}}>Répondre</div>
            <div className="topicEntete">
                <div className="topicEnteteTitre">
                    BLA BLA VNVEV CZNCJNE ECVNEV KNVEKNKV KENVVNE
                </div>
                <div className="topicEnteteDate">25/02/2022 à 10H30</div>
                <div className="topicEnteteDescription"></div>
            </div>
            <div className="writeBox">
                <div className="writeBoxHead">
                    <div className="writeBoxCancelBTN" onClick={()=>{EnableDisableEditor()}}>Fermer</div>
                </div>
                <div id="editorBox"></div>
                <div className="confirmRow">
                    <div className="writeBoxConfirmBTN">Envoyer</div>
                </div>
            </div>
        </>
    );
}

export default TopicView;