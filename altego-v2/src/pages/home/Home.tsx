import data from "../../data/NewsData.json";
import NewsArticelListPreview from "../../layout/components/articel/NewsArticelListPreview";
import Button from "../../layout/components/Button";

const Home = () => {
    return (
        <div>
            <div className="articel-header">Die X-Reihe</div>
            <hr className="neon-glow-v" />
            <img src="/animation/x4-steam2023-1.gif" alt="X-Series" style={{ width: "100%" }} />
            <p>HANDLE, KÄMPFE, BAUE, DENKE ist die gemeinsame Schlagzeile aller X-Spiele. Die Einzigartigkeit der X-Spiele liegt in ihrer Tiefe – sie simulieren ein riesiges, echtes bottom up Universum voller NPC-Schiffe und -Stationen, einschließlich einer realistischen Wirtschaft.</p>

            <div className="only-mobile">
                <img src="/images/X_Rebirth.jpg" alt="screenshot" className="ad-img-2" />
                <img src="/images/X4_Foundations.jpg" alt="screenshot" className="ad-img-2" />
            </div>

            <div className="only-mobile">
                <div className="flex-row-end">
                    <p>Kaufe das Spiel online auf</p>
                    <img src="/ui/steam-logo.png" alt="screenshot" style={{ height: "40px" }} />
                </div>
            </div>

            <div className="articel-header">Neuste News</div>
            <hr className="neon-glow-v" />
            <NewsArticelListPreview data={data} /><br />

            <div className="only-mobile">
                <div className="articel-header">Community</div>
                <hr className="neon-glow-v" />
                <p>Users: 366141<br />
                    Logged in: 12</p>
                Der neuste Screenshot:<br />
                <img src="/screens/x4_screen_172.jpg" alt="screenshot" className="ad-img-1" />
                <p>{" "}</p>
            </div>

            <div id="X1">
                <div className="articel-header">X: Beyond The Frontier</div>
                <hr className="neon-glow-v" />
                <img src="/images/x1.png" style={{ width: "100%" }} alt="x1" />
                <p><em>X: Beyond The Frontier</em> ist der erste Teil der X-Reihe von Egosoft. Kyle Brennan strandet mit einem experimentellen Shuttle in einem unbekannten Teil des Universums, der über alte Sprungtore verbunden ist. Dort gerät er in Schulden bei einem Alien und wird von Agenten verfolgt, die ein Geheimnis wahren wollen: Ihre Rasse stammt von Menschen ab, die einst vor den Angriffen der von ihnen selbst geschaffenen Terraformer geflohen sind.</p>
                <div>
                    <strong>Weitere Spiele und DLCs:</strong>
                    <ul>
                        <li>X-Tension</li>
                        <li>X-Gold</li>
                        <li>X-Rebirth</li>
                        <li>X-Rebirth VR</li>
                    </ul>
                </div>
                <div className="flex-row-end">
                    <Button to="/games/x1">mehr erfahren</Button>
                </div>
            </div><br />

            <div id="X2">
                <div className="articel-header">X&sup2;: Die Bedrohung</div>
                <hr className="neon-glow-v" />
                <img src="/images/x2.png" style={{ width: "100%" }} alt="x1" />
                <p><em>X&sup2;: Die Bedrohung</em> setzt die Geschichte mit Julian Gardna fort und präsentiert eine überarbeitete Grafikengine mit neuen Schiffen und Stationen, die das Universum lebendiger wirken lässt. Über 130 Sektoren mit Nebeln und Asteroiden laden zum Erkunden und Abbauen ein. Mehr als 60 Schiffstypen – vom Scout bis zum Trägerschiff – können mit Erweiterungen und neuen Waffen wie Ionendisruptor oder Projektilkanone ausgerüstet werden, um ein eigenes Imperium aufzubauen.</p>
                <div className="flex-row-end">
                    <Button to="/games/x2">mehr erfahren</Button>
                </div>
            </div><br />

            <div id="X3">
                <div className="articel-header">X&sup3;: Reunion</div>
                <hr className="neon-glow-v" />
                <img src="/images/x3.png" style={{ width: "100%" }} alt="x1" />
                <p><em>X&sup3;: Reunion</em> knüpft an <em>X²: Die Bedrohung</em> an und erweitert das Universum um eine neue Story, neue Schiffe und ein deutlich komplexeres Gameplay. NPCs bauen eigene Fabriken, handeln frei und führen Kriege, die spürbare Auswirkungen auf das gesamte Universum haben. Die Geschichte dreht sich um eine verstreute argonische Flotte, ständige Angriffe der Khaak und das plötzliche Auftauchen eines neuen Feindes – verbunden mit einem geheimnisvollen Schiff, dem Yaki-Piratenclan und einer uralten Maschine.</p>
                <div>
                    <strong>Weitere Spiele und DLCs:</strong>
                    <ul>
                        <li>X3-Terran Conflict</li>
                        <li>X3-Albion Prelude</li>
                        <li>X3-Farnham's Legacy</li>
                    </ul>
                </div>
                <div className="flex-row-end">
                    <Button to="/games/x3">mehr erfahren</Button>
                </div>
            </div><br />

            <div id="X4">
                <div className="articel-header">X<sup>4</sup>: Foundations</div>
                <hr className="neon-glow-v" />
                <img src="/images/x4.png" style={{ width: "100%" }} alt="x1" />
                <p><em>X<sup>4</sup>: Foundations</em> führt die Stärken der Serie konsequent fort und erweitert sie um entscheidende Neuerungen. Der nahtlose Wechsel zwischen Schiffen, ein flexibler modularer Stationsbau und eine vollständig simulierte Wirtschaft bilden das Herz des Spiels. Ob als Pirat, Händler, Flottenkommandant oder Stationsbetreiber – in X<sup>4</sup> hat der Spieler die völlige Freiheit, seinen Weg zu wählen und das Universum nach eigenen Vorstellungen zu formen.</p>
                <div>
                    <strong>Weitere Spiele und DLCs:</strong>
                    <ul>
                        <li>X4-Hyperion</li>
                        <li>X4-Timelines</li>
                        <li>X4-Gezeiten der Habgier</li>
                        <li>X4-Wiege der Menschheit</li>
                    </ul>
                </div>
                <div className="flex-row-end">
                    <Button to="/games/x4">mehr erfahren</Button>
                </div>
            </div>

        </div>
    );
};

export default Home;
