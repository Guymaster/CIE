import '../../styles/ActualiteItem.css';
import { timeStampToFamiliar } from '../../utils/dateFormat';

export default function ActualiteItem({texte, droite, lienImage, date}){
    return (<>
        <div className={(droite==true)?"actualiteItemBox actualiteItemDroite":"actualiteItemBox"}>
            <div className='actualiteItemBody'>
                <div className='actualiteItemTexte'> {texte} </div>
                <div className='actualiteItemDate'> {timeStampToFamiliar(date)} </div>
            </div> 
            <img className='actualiteItemImage' src={lienImage }/>
        </div>
    </>);
}