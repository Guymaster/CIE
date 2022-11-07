import "../../../styles/ForumPage.css";
import { getQuestionByAuteur, getQuestionBySection, supprQuestion } from "../../../firebase/operations";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImg from '../../../assets/logoClubInfo.svg';
import QuestionItem from "../../components/QuestionItem";
import { SupprQuestionContext, SupprQuestionContextProvider, UserContext } from "../../components/contextRegistry";
import { useContext } from "react";

function QuestionsOnglet(){
    const Navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [supprQuestID, setSupprQuestID] = useState(null);
    const [questions, setQuestions] = useState([]);


    async function fetchData(){
        if(user.id!=undefined){
            getQuestionByAuteur(user.id).then((q)=>{
                setQuestions(q);
            });
        }
    }
    useEffect(()=>{
        fetchData();
    }, [user]);
    return (
        <main className="forumMain">
            <div className={(supprQuestID)?"supprQuestBoxActive":"supprQuestBoxNotActive"}>
                <div className="supprQuestContent">
                    <div>Voulez-vous vraiment supprimer cette question?</div>
                <div className="addConfirmRow">
                    <div className="addBoxCancelBTN" onClick={()=>{setSupprQuestID(null);}}>Non</div>
                    <div className="addBoxConfirmBTN" onClick={()=>{supprQuestion(supprQuestID).then((v)=>{
                        setSupprQuestID(null);
                        if(v==true){alert('Question Supprimée');}
                        else{alert('Question Non Supprimée');}
                        fetchData();
                    })}}>Oui</div>
                </div>
                </div>
            </div>
            <div className="forumMenuBox">
                <img src={logoImg} className="logo" onClick={()=>{Navigate('/')}}/>
                <div className="forumTitre">Forum</div>
                <div className="forumTabLink" onClick={()=>{Navigate('/forum/')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"/></svg>
                    <span>Rechercher une Question</span>
                </div>
                <div className="forumTabLink formMenuSelected">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>
                    <span>Questions Posées</span>
                </div>
            </div>
            <div className="forumSearchBox">
                {
                    questions.map(
                        (value, index, array)=>{
                            return <QuestionItem key={value.id} nbReponses={value.nbReponses} id={value.id} tags={value.tags} section={value.section} titre={value.titre} date={value.date} owner={(value.auteurID==user.id)?true:false} onSupprClick={()=>{console.log('suppr'); setSupprQuestID(value.id);}}/>
                        }
                    )
                }
            </div>
        </main>
    );
}

export default QuestionsOnglet;