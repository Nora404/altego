import "./Plattform.css";

export const Plattform = () => {
    return (
        <div className="flex-col-center float-y-animation" style={{ width: "100%" }}>
            <div className="plattform-ad hologram-background">Hallo</div>
            <div className="platform">
                <img src="/assets/plattform.svg" alt="ad" className="plattform-img" />
            </div>
        </div>
    );
};
