import "./App.css";
import HologramPanel from "./HologramPanel";

function App() {
  return (
    <HologramPanel
      title="News"
      panelHeight={100}
      panelWidth={200}
      roundedTopRight
    >
      Holo Text
    </HologramPanel>
  );
}

export default App;
