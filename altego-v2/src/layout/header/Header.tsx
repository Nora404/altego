// Header.tsx
import "./header.css";
import TVNoise from "./TVNoise";

const Header = () => {
  return (
    <header className="custom-header">
      <TVNoise src={"ui/x4-header.png"} running />

      <div className="top-bar bl-bottom" />
      <div className="top-right-deco">DE - Login - Register</div>

      <div className="content">
        <img src="ui/x4-logo.png" className="logo" />
        <img src="ui/egosoft.gif" className="egosoft-logo" />
      </div>

      <div className="bottom-left-deco" />
      <div className="bottom-bar bl-top" />
    </header>
  );
};

export default Header;
