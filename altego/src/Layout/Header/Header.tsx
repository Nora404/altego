// Header.tsx
import "./Header.css";
import TVNoise from "./TVNoise";

const Header = () => {
  return (
    <header className="custom-header">
      <TVNoise src={"assets/x4-header2.png"} running/>
      <div className="top-bar bl-bottom" />
      <div className="top-right-deco">DE - Login - Register</div>
      <div className="content">
        <img src="assets/x4-logo_200px.png" className="logo" />
        {/* <img src="assets/text.png" className="text" /> */}
        <img src="assets/Egosoft.gif" className="logo2" />
      </div>
      <div className="bottom-left-deco" />
      <div className="bottom-bar bl-top" />
    </header>
  );
};

export default Header;
