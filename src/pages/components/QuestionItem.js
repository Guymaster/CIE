import '../../styles/QuestionItem.css';
import { useNavigate } from 'react-router-dom';
import { timeStampToFamiliar } from '../../utils/dateFormat';

export default function QuestionItem({titre, id, nbReponses, date, tags, section}){
    const Navigate = useNavigate();
    return (<>
        <div className="questBox" onClick={()=>{Navigate('/forum/topic', {questionID: id})}}>
            <div className="questTitre">
                {titre}
            </div>
            <div className="questTagsRow">
                <div className="questTag questSection"> {section} </div>
                {
                    (tags)?
                        tags.map(
                            (value, index, array)=>{
                                return <>
                                    <div className="questTag" key={value}> {value} </div>
                                </>
                            }
                        )
                    :
                        <></>
                }
            </div>
            <div className="questInfoRow">
                <div className="questRep"> {nbReponses} Réponses </div>
                <div className="questDate"> {timeStampToFamiliar(date)} </div>
            </div>
        </div>
    </>);
}