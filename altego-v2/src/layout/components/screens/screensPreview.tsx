// TODO - In echt müssen die Bilder dynamisch geladen werden!

const ScreensPreview = () => {
    return (
        <div className="toggleRowToColumn">
            <div className="flex-row w-full">
                <img src="/screens/x4_screen_004.jpg" alt="Screenshot 1" style={{ width: "26%" }} />
                <img src="/screens/x4_screen_044.png" alt="Screenshot 2" style={{ width: "26%" }} />
                <img src="/screens/x4_screen_172.jpg" alt="Screenshot 3" style={{ width: "26%" }} />
                <div className="flex-col-space h-full">
                    <div className="flex-row">
                        <img src="/screens/x4_screen_175.jpg" alt="Screenshot 4" style={{ width: "60px" }} />
                        <img src="/screens/x4_screen_205.jpg" alt="Screenshot 5" style={{ width: "60px" }} />
                    </div>
                    <div className="flex-row">
                        <img src="/screens/x4_screen_206.jpg" alt="Screenshot 6" style={{ width: "60px" }} />
                        <img src="/screens/x4_screen_210.jpg" alt="Screenshot 7" style={{ width: "60px" }} />
                    </div>
                    <button className="w-full" style={{ margin: 0 }}>Alle Screenshots</button>
                </div>
            </div>
        </div>
    );
}
export default ScreensPreview;