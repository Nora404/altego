import "./App.css";
import HologramPanel from "./HologramPanel";

function App() {
  return (
    <div
      className="flex-row metall"
      style={{ height: "40px", margin: 0, width: "100%" }}
    >
      <HologramPanel title="News" panelWidth={180}>
        Holo Text
      </HologramPanel>
      <HologramPanel title="Spiele" panelWidth={180}>
        Holo Text
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
