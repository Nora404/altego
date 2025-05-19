import { Outlet } from "react-router-dom";
import "./Content.css"
import { Plattform } from "./Plattform";

const Content = () => {
    return (
        <div className="flex-row-center w-full">

            <Plattform title="Neuster Screenshot">
                <img src="/assets/x4_screen_205.jpg" alt="screenshot" className="ad-img" />
            </Plattform>

            <div className="content-grid">
                <div className="corner top-left" />
                <div className="edge-top" />
                <div className="corner top-right" />
                <div className="edge-left" />
                <div className="content glass-dark">
                    <Outlet />
                </div>
                <div className="edge-right" />
                <div className="corner bottom-left" />
                <div className="edge-bottom" />
                <div className="corner bottom-right" />
            </div>
            <Plattform>Hallo</Plattform>
        </div>
    );
};
export default Content;