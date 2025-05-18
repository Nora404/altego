import "./App.css";
import Header from "./Header";
import HologramPanel from "./HologramPanel";

function App() {
  return (
    <>
      <Header />
      <div
        className="flex-row metall"
        style={{ height: "40px", margin: 0, width: "100%" }}
      >
        <HologramPanel title="News" panelWidth={180}>
          <div style={{ padding: "10px", textAlign: "left" }}>
            <div className="blue-bg outlined-text">Aktuell</div>
            <div className="blue-bg outlined-text">Archiv</div>
          </div>
        </HologramPanel>
        <HologramPanel title="Spiele" panelWidth={180}>
          <div style={{ padding: "10px", textAlign: "left" }}>
            <div className="blue-bg outlined-text">X4</div>
            <div className="blue-bg outlined-text">X3</div>
            <div className="blue-bg outlined-text">X2</div>
            <div className="blue-bg outlined-text">X</div>
          </div>
        </HologramPanel>
        <HologramPanel title="Community" panelWidth={180}>
          <div style={{ padding: "10px", textAlign: "left" }}>
            <div className="blue-bg outlined-text">Forum</div>
            <div className="blue-bg outlined-text">Wiki</div>
            <div className="blue-bg outlined-text">Links</div>
            <div className="blue-bg outlined-text">Chat</div>
            <div className="blue-bg outlined-text">Developer Network</div>
          </div>
        </HologramPanel>
        <HologramPanel title="Downloads" panelWidth={180}>
          Holo Text
        </HologramPanel>
        <HologramPanel title="Hilfe" panelWidth={180}>
          <div style={{ padding: "10px", textAlign: "left" }}>
            <div className="blue-bg outlined-text">Wiki DE</div>
            <div className="blue-bg outlined-text">Wiki EN</div>
            <div className="blue-bg outlined-text">FAQs</div>
            <div className="blue-bg outlined-text">Forum</div>
          </div>
        </HologramPanel>
        <HologramPanel title="Shop" panelWidth={180}>
          <div style={{ padding: "10px", textAlign: "left" }}>
            <div className="blue-bg outlined-text">English Shop</div>
            <div className="blue-bg outlined-text">Deutsch Shop</div>
          </div>
        </HologramPanel>
      </div>
    </>
  );
}

export default App;
