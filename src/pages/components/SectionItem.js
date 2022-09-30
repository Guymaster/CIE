import './../../styles/SectionItem.css';

export default function SectionItem({nom, description, logo}){

    return (<>
        <div className='sectionItemBox'>
            <img className='sectionItemLogo' src={logo}/>
            <div className='sectionItemNom'> {nom} </div>
            <div className='sectionItemDesc'> {description} </div>
        </div>
    </>);
}