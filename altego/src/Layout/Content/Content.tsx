import { Outlet } from "react-router-dom";
import "./Content.css"
import { Plattform } from "./Plattform";

const Content = () => {
    return (
        <div className="flex-row-center w-full">

            <Plattform />
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
            <Plattform />
        </div>
    );
};
export default Content;