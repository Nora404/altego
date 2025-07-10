import FeatureBanner from "../../layout/components/FeatureBanner";
import data from "../../Data/DownloadData.json";
import DownLoadListPreview from "../../layout/components/download/DownLoadListPreview";
import type { DownLoadArticel } from "../../layout/components/download/DownLoadList";
import ScreensPreview from "../../layout/components/screens/screensPreview";

const X1Start = () => {
    const downloadData: DownLoadArticel[] = data.filter((item) => item.game === "X1");

    return (
        <div>
            <div className='articel-header'>X: Beyond The Frontier</div>
            <hr className='neon-glow-v' />
            <img src="/animation/x4-steam2023-1.gif" alt="X-Series" style={{ width: "100%" }} />

            <p><em>X: Beyond The Frontier</em> ist der erste Teil der X-Reihe von Egosoft. Kyle Brennan strandet mit einem experimentellen Shuttle in einem unbekannten Teil des Universums, der über alte Sprungtore verbunden ist. Dort gerät er in Schulden bei einem Alien und wird von Agenten verfolgt, die ein Geheimnis wahren wollen: Ihre Rasse stammt von Menschen ab, die einst vor den Angriffen der von ihnen selbst geschaffenen Terraformer geflohen sind.</p>
            <div className="spaceY" style={{ color: "transparent" }}>.</div>

            <div className='articel-header'>Features</div>
            <hr className='neon-glow-v' />
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
            <div className="spaceY" style={{ color: "transparent" }}>.</div>


            <div className='articel-header'>Media und Community</div>
            <hr className='neon-glow-v' />
            <div className="spaceY">
                <strong>Neuste Screenshots</strong><br />
                <ScreensPreview />
                <div className="spaceY" style={{ color: "transparent" }}>.</div>
            </div>

            <div className='articel-header'>Systemvorraussetzungen</div>
            <hr className='neon-glow-v' />
            <div className="spaceY toggleRowToColumn">
                <div>
                    MINIMUM:<br />
                    <table className="table-striped" style={{ color: "#bbb" }}>
                        <tr>
                            <td>Betriebssystem:</td>
                            <td>Windows 95 oder höher</td>
                        </tr>
                        <tr>
                            <td>Prozessor:</td>
                            <td>200 MHz Pentium II</td>
                        </tr>
                        <tr>
                            <td>Speicher:</td>
                            <td>32 MB RAM</td>
                        </tr>
                        <tr>
                            <td>Grafik:</td>
                            <td>4 MB DirectX-kompatible Grafikkarte</td>
                        </tr>
                        <tr>
                            <td>DirectX®:</td>
                            <td>DirectX 7.0 oder höher</td>
                        </tr>
                        <tr>
                            <td>Festplatte:</td>
                            <td>360 MB frei</td>
                        </tr>
                        <tr>
                            <td>Sound:</td>
                            <td>DirectX-kompatible Soundkarte</td>
                        </tr>
                    </table>
                </div>
                <div>
                    EMPHOLEN:<br />
                    <table className="table-striped" style={{ color: "#bbb" }}>
                        <tr>
                            <td>Betriebssystem:</td>
                            <td>Windows 95 oder höher</td>
                        </tr>
                        <tr>
                            <td>Prozessor:</td>
                            <td>200 MHz Pentium II</td>
                        </tr>
                        <tr>
                            <td>Speicher:</td>
                            <td>32 MB RAM</td>
                        </tr>
                        <tr>
                            <td>Grafik:</td>
                            <td>4 MB DirectX-kompatible Grafikkarte</td>
                        </tr>
                        <tr>
                            <td>DirectX®:</td>
                            <td>DirectX 7.0 oder höher</td>
                        </tr>
                        <tr>
                            <td>Festplatte:</td>
                            <td>360 MB frei</td>
                        </tr>
                        <tr>
                            <td>Sound:</td>
                            <td>DirectX-kompatible Soundkarte</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="spaceY" style={{ color: "transparent" }}>.</div>

            <div className='articel-header'>Neuste Downloads</div>
            <hr className='neon-glow-v' />
            <DownLoadListPreview data={downloadData} />
            <div className="spaceY" style={{ color: "transparent" }}>.</div>

            <div className='articel-header'>Weitere Spiele und DLCs</div>
            <hr className='neon-glow-v' />
            <div className="spaceY toggleRowToColumn">
                <div className="flex-col"><img src="/ui/x1-tension.png" alt="tension" /><br /><button>X-Tension</button></div>
                <div className="flex-col"><img src="/ui/x1-gold.png" alt="gold" /><br /><button>X-Gold</button></div>
                <div className="flex-col"><img src="/ui/x1-rebirth.png" alt="rebirth" /><br /><button>X-Rebirth</button></div>
                <div className="flex-col"><img src="/ui/x1-rebirthVR.png" alt="rebirthVR" /><br /><button>X-Rebirth VR</button></div>
            </div>

            {/* <div className='articel-header'>Starte dein Abendteuer</div>
            <hr className='neon-glow-v' />
            <div className="spaceY">
                blabla
            </div> */}
        </div>
    );
};

export default X1Start;