import { Plattform } from "./Plattform";

const RightSide = () => {
    return (
        <div>
            {/* <Plattform title="Logindata">
                <div>
                    Nora404<br />
                    Edit Profile

                </div>
            </Plattform> */}

            <Plattform title="Community">
                <p>Users: 366141<br />
                    Logged in: 12</p>
                <img src="/ui/community.png" className="girl" alt="girl" />
            </Plattform>

            <Plattform title="Neuster Screenshot">
                <img src="/screens/x4_screen_172.jpg" alt="screenshot" className="ad-img-1" />
            </Plattform>
        </div>
    );
};

export default RightSide;
