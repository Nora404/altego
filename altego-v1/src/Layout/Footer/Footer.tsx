import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="left-deco" />
            <div className="right-deco">
                <img src="assets/facebookklon.png" alt="icon" style={{ width: "24px", height: "24px" }} />
                <img src="assets/xklon.png" alt="icon" style={{ width: "24px", height: "24px" }} />
                <img src="assets/youtubeklon.png" alt="icon" style={{ width: "24px", height: "24px" }} />
                <img src="assets/twitchklon.png" alt="icon" style={{ width: "24px", height: "24px", paddingRight: "10px" }} />
            </div>
            <footer className="footer-fixed">
                {/* Inhalt */}
                <p style={{ margin: 0 }}>Kontakt - Jobs - Impressum - Datenschutz</p>
            </footer>
        </>
    );
};
export default Footer;