import '../../../styles/ProfilOnglet.css';

function ProfilOnglet(){
    return (
        <>
            <div className='profilContent'>
                <div className="avatarBox">

                </div>
                <div className="infoBox">
                    <div className='infoProfil'>
                        <div className='infoPart'>Profil</div>
                        <div className='infoRow'>
                            <div className='infoTitre'>Nom Complet</div>
                            <div className='infoVal'>KONAN Yaya</div>
                            <input type='texte'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilOnglet;