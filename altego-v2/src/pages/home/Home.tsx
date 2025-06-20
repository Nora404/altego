import data from "../../Data/NewsData.json";
import ArticelListPreview from "../news/ArticelListPreview";

const Home = () => {
    return (
        <div>
            <div className="articel-header">Die X-Reihe</div>
            <hr className="neon-orange" />
            <img src="/animation/x4-steam2023-1.gif" alt="X-Series" style={{ width: "100%" }} />
            <p>HANDLE, KÄMPFE, BAUE, DENKE ist die gemeinsame Schlagzeile aller X-Spiele. Die Einzigartigkeit der X-Spiele liegt in ihrer Tiefe – sie simulieren ein riesiges, echtes bottom up Universum voller NPC-Schiffe und -Stationen, einschließlich einer realistischen Wirtschaft.</p>

            <div>
                <img src="/images/X_Rebirth.jpg" alt="screenshot" className="ad-img-2" />
                <img src="/images/X4_Foundations.jpg" alt="screenshot" className="ad-img-2" />
            </div>

            <div className="flex-row-end">
                <p>Kaufe das Spiel online auf</p>
                <img src="/ui/steam-logo.png" alt="screenshot" style={{ height: "40px" }} />
            </div>

            <div className="articel-header">Neuste News</div>
            <hr className="neon-orange" />
            <ArticelListPreview data={data} /><br />

            <div className="articel-header">Community</div>
            <hr className="neon-orange" />
            <p>Users: 366141<br />
                Logged in: 12</p>
            Der neuste Screenshot:<br />
            <img src="/screens/x4_screen_172.jpg" alt="screenshot" className="ad-img-1" />

        </div>
    );
};

export default Home;
