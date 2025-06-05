import { Banner } from "./Banner";
import { Plattform } from "./Plattform";

const LeftSide = () => {
    return (
        <div>
            <Plattform title="Buy X-Series online">
                <img src="/ui/steam-logo.png" alt="screenshot" className="ad-img-1" />
            </Plattform>

            <Plattform title="Games Showcase">
                <div className="flex-row-center banner-parent">
                    <Banner text="Buy Now" angle={-10} />
                    <img src="/images/X_Rebirth.jpg" alt="screenshot" className="ad-img-2"
                        style={{ margin: "5px", height: "100%" }} />
                    <img src="/images/X4_Foundations.jpg" alt="screenshot" className="ad-img-2"
                        style={{ margin: "5px", height: "100%" }} />
                </div>
            </Plattform>
        </div>
    );
};

export default LeftSide;
