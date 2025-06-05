const NeonSwitcher = () => {
    const setNeon = (varName: string) => {
        const root = document.documentElement;
        const value = getComputedStyle(root).getPropertyValue(varName).trim();
        root.style.setProperty("--neon-rgb", value);
    };

    return (
        <div style={{ display: "flex", gap: "1rem", paddingRight: "1rem" }}>
            <div
                className="led-button led-blue"
                onClick={() => setNeon("--neon-blue-rgb")}
            />
            <div
                className="led-button led-orange"
                onClick={() => setNeon("--neon-orange-rgb")}
            />
            <div
                className="led-button led-white"
                onClick={() => setNeon("--neon-white-rgb")}
            />
        </div>
    );
};

export default NeonSwitcher;
