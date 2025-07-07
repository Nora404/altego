// TODO - In echt müssen die Bilder dynamisch geladen werden!

const ScreensPreview = () => {
    return (
        <div className="toggleRowToColumn">
            <img src="/screens/x4_screen_004.jpg" alt="Screenshot 1" className="screen-img-big" />
            <img src="/screens/x4_screen_044.png" alt="Screenshot 2" className="screen-img-big" />
            <img src="/screens/x4_screen_172.jpg" alt="Screenshot 3" className="screen-img-big" />
            <div className="flex-col-space h-full">
                <div className="flex-row">
                    <img src="/screens/x4_screen_175.jpg" alt="Screenshot 4" className="screen-img-small" />
                    <img src="/screens/x4_screen_205.jpg" alt="Screenshot 5" className="screen-img-small" />
                </div>
                <div className="flex-row">
                    <img src="/screens/x4_screen_206.jpg" alt="Screenshot 6" className="screen-img-small" />
                    <img src="/screens/x4_screen_210.jpg" alt="Screenshot 7" className="screen-img-small" />
                </div>
                <button className="w-full" style={{ margin: 0 }}>Alle Screenshots</button>
            </div>
        </div>
    );
}
export default ScreensPreview;