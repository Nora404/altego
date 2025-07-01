import FeatureBanner from "../../layout/components/FeatureBanner";

const X1Start = () => {
    return (
        <div>
            <div className='articel-header'>X: Beyond The Frontier</div>
            <hr className='neon-orange' />
            <img src="/animation/x4-steam2023-1.gif" alt="X-Series" style={{ width: "100%" }} />

            <p><em>X: Beyond The Frontier</em> ist der erste Teil der X-Reihe von Egosoft. Kyle Brennan strandet mit einem experimentellen Shuttle in einem unbekannten Teil des Universums, der über alte Sprungtore verbunden ist. Dort gerät er in Schulden bei einem Alien und wird von Agenten verfolgt, die ein Geheimnis wahren wollen: Ihre Rasse stammt von Menschen ab, die einst vor den Angriffen der von ihnen selbst geschaffenen Terraformer geflohen sind.</p>

            <div className='articel-header'>Features</div>
            <hr className='neon-orange' />
            <FeatureBanner
                feature="Handel"
                description="Treiben Sie in über 50 Sektoren mit über 50 verschiedenen Gütern Handel und verbessern Sie Ihre Raumschiffe mit Dutzenden an verfügbaren Upgrades von 5 verschiedenen Rassen."
                img="/ui/banner4.png" />
            <FeatureBanner
                feature="Kampf"
                description="Lokalisieren Sie die feindlichen Piraten und überleben Sie die Angriffe der Xenon."
                img="/ui/banner2.png" />
            <FeatureBanner
                feature="Errichtung"
                description="Bauen Sie verschiedene Stationen zur Errichtung Ihres eigenes Produktionsreiches."
                img="/ui/banner5.png" />
            <FeatureBanner
                feature="Denken"
                description="Passen Sie Ihr Handelsreich den wirtschaftlichen Bedürfnissen jedes einzelnen Sektors an."
                img="/ui/banner3.png" />

            <div className='articel-header'>Weitere Spiele und DLCs</div>
            <hr className='neon-orange' />
            <div className="spaceY">
                <ul>
                    <li>X-Tension</li>
                    <li>X-Gold</li>
                    <li>X-Rebirth</li>
                    <li>X-Rebirth VR</li>
                </ul>
            </div>

            <div className='articel-header'>Media und Community</div>
            <hr className='neon-orange' />
            <div className="spaceY">
                blabla
            </div>

            <div className='articel-header'>Systemvorraussetzungen</div>
            <hr className='neon-orange' />
            <div className="spaceY">
                blabla
            </div>

            <div className='articel-header'>Download</div>
            <hr className='neon-orange' />
            <div className="spaceY">
                blabla
            </div>

            <div className='articel-header'>Starte dein Abendteuer</div>
            <hr className='neon-orange' />
            <div className="spaceY">
                blabla
            </div>
        </div>
    );
};

export default X1Start;