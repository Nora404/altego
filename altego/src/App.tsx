import "./App.css";
import HologramPanel from "./HologramPanel";

function App() {
  return (
    <div
      className="flex-row metall"
      style={{ height: "40px", margin: 0, width: "100%" }}
    >
      <HologramPanel title="DE" chevron={false} panelWidth={60}>
        <div style={{ padding: "10px 10px 15px 10px", textAlign: "center" }}>
          DE <br /> EN
        </div>
      </HologramPanel>
      <HologramPanel title="News" panelWidth={180}>
        <div style={{ padding: "10px 15px 15px 30px", textAlign: "left" }}>
          Aktuell
          <br />
          Archiv
        </div>
      </HologramPanel>
      <HologramPanel title="Spiele" panelWidth={180}>
        <div style={{ padding: "10px 15px 15px 30px", textAlign: "left" }}>
          X4
          <br />
          X3
          <br />
          X2
          <br />X
        </div>
      </HologramPanel>
      <HologramPanel title="Community" panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Downloads" panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Hilfe" panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Shop" panelWidth={180}>
        Holo Text
      </HologramPanel>
    </div>
  );
}

export default App;
