import { Plattform } from "./Plattform";

const RightSide = () => {
    return (
        <div>
            <Plattform title="Logindata">
                <div>
                    Nora404<br />
                    Edit Profile

                </div>
            </Plattform>

            <Plattform title="Community">
                Users: 366141<br />
                Logged in: 12
            </Plattform>

            <Plattform title="Neuster Screenshot">
                <img src="/screens/x4_screen_172.jpg" alt="screenshot" className="ad-img-1" />
            </Plattform>
        </div>
    );
};

export default RightSide;
