import "./App.css";
import HologramPanel from "./HologramPanel";

function App() {
  return (
    <div
      className="flex-row metall"
      style={{ height: "40px", margin: 0, width: "100%" }}
    >
      <HologramPanel title="DE" chevron={false} panelWidth={60}>
        <div style={{ padding: "10px", textAlign: "left" }}>
          <div className="blue-bg">DE</div>
          <div className="blue-bg">EN</div>
          <div className="blue-bg">FR</div>
          <div className="blue-bg">XY</div>
        </div>
      </HologramPanel>
      <HologramPanel title="News" panelWidth={180}>
        <div style={{ padding: "10px", textAlign: "left" }}>
          <div className="blue-bg">Aktuell</div>
          <div className="blue-bg">Archiv</div>
        </div>
      </HologramPanel>
      <HologramPanel title="Spiele" panelWidth={180}>
        <div style={{ padding: "10px", textAlign: "left" }}>
          <div className="blue-bg">X4</div>
          <div className="blue-bg">X3</div>
          <div className="blue-bg">X2</div>
          <div className="blue-bg">X</div>
        </div>
      </HologramPanel>
      <HologramPanel title="Community" panelWidth={180}>
        <div style={{ padding: "10px", textAlign: "left" }}>
          <div className="blue-bg">Forum</div>
          <div className="blue-bg">Wiki</div>
          <div className="blue-bg">Links</div>
          <div className="blue-bg">Chat</div>
          <div className="blue-bg">Developer Network</div>
        </div>
      </HologramPanel>
      <HologramPanel title="Downloads" panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Hilfe" panelWidth={180}>
        <div style={{ padding: "10px", textAlign: "left" }}>
          <div className="blue-bg">Wiki DE</div>
          <div className="blue-bg">Wiki EN</div>
          <div className="blue-bg">FAQs</div>
          <div className="blue-bg">Forum</div>
        </div>
      </HologramPanel>
      <HologramPanel title="Shop" panelWidth={180}>
        <div style={{ padding: "10px", textAlign: "left" }}>
          <div className="blue-bg">English Shop</div>
          <div className="blue-bg">Deutsch Shop</div>
        </div>
      </HologramPanel>
    </div>
  );
}

export default App;
