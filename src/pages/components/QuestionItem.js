import '../../styles/QuestionItem.css';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { timeStampToFamiliar } from '../../utils/dateFormat';
import { SupprQuestionContext } from './contextRegistry';
import { useContext } from 'react';

export default function QuestionItem({titre, id, nbReponses, date, tags, section, owner, onSupprClick}){
    const Navigate = useNavigate();
    return (<>
        <div className="questBox" onClick={()=>{Navigate('/forum/topic/'+id)}}>
            <div className="questTitre">
                {titre}
            </div>
            <div className="questTagsRow">
                <div className="questTag questSection"> {section} </div>
                {
                    (tags)?
                        tags.map(
                            (value, index, array)=>{
                                return (<div className="questTag" key={index}> {value} </div>)
                            }
                        )
                    :
                        <></>
                }
            </div>
            <div className="questInfoRow">
                <div className="questRep"> {nbReponses} Réponses </div>
                <div className="questDate"> {timeStampToFamiliar(date/1000)} </div>
            </div>
            {
                (owner==true)?
                    <div className='supprItemBTN' onClick={(e)=>{e.stopPropagation(); onSupprClick();}}>Supprimer</div>
                :
                    <></>
            }
        </div>
    </>);
}