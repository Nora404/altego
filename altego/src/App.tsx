import "./App.css";
import HologramPanel from "./HologramPanel";

function App() {
  return (
    <div
      className="flex-row metall"
      style={{ height: "40px", margin: 0, width: "100%" }}
    >
      <HologramPanel title="News" panelHeight={100} panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Spiele" panelHeight={100} panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Community" panelHeight={100} panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Downloads" panelHeight={100} panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Hilfe" panelHeight={100} panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Shop" panelHeight={100} panelWidth={180}>
        Holo Text
      </HologramPanel>
    </div>
  );
}

export default App;
