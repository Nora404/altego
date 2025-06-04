import HologramMask from "../../../Layout/Componernts/Holotest/Holo";
import myIcon from "../../../Layout/Componernts/Holotest/test.svg";

const Archiv = () => {
  return (
    <div>
      <h2>Archiv</h2>
      <p>Der Inhalt dieser Sektion ist noch nicht fertiggestellt.</p>
      <hr className="neon-orange" />

      <div>
        {/* width/height passen optional zur Originalgröße des SVG */}
        <HologramMask
          icon={myIcon}
          color="rgba(0,255,255)"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Archiv;
