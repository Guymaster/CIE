import '../../styles/QuestionItem.css';

export default function QuestionItem({titre, id, nbReponses, date, tags, section}){
    return (<>
        <div className="questBox">
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
                <div className="questDate">25/02/2022 - 15H34</div>
            </div>
        </div>
    </>);
}