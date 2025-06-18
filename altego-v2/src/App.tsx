import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import { routes } from "./routing";

import Header from "./layout/header/Header";
import Content from "./layout/main/Content";
import Menu from "./layout/navigation/Menu";
import { menuData } from "./data/MenuData";
import LeftSide from "./layout/sidebars/LeftSide";
import RightSide from "./layout/sidebars/RightSide";
import NeonSwitcher from "./layout/components/NeonSwitcher";
import ToDownHologram from "./layout/components/ToTopHologram";
import MobileMenu from "./layout/navigation/MobileMenu";

function App() {
  const [showLeft, setShowLeft] = useState<boolean>(false);
  const [showRight, setShowRight] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="layout-header">
          <Header />
        </div>
        <div className="layout-menu">
          <div id="desktop-menu">
            <Menu data={menuData} />
          </div>
          <div id="mobile-menu">
            <button onClick={() => setShowLeft((pre) => !pre)}>menu</button>
            <button>home</button>
            <button onClick={() => setShowRight((pre) => !pre)}>
              sidebars
            </button>
            <ToDownHologram open={showLeft}>
              <MobileMenu data={menuData} />
            </ToDownHologram>
            <ToDownHologram open={showRight}>Test2</ToDownHologram>
          </div>
        </div>
        <div className="layout-sidebar-left">
          <div className="sidebar-left">
            <LeftSide />
          </div>
        </div>
        <div className="layout-main">
          <Suspense fallback={<p>lädt …</p>}>
            <Routes>
              <Route element={<Content />}>
                {routes.map(({ path, component: Page }) => (
                  <Route key={path} path={path} element={<Page />} />
                ))}
              </Route>
            </Routes>
          </Suspense>
        </div>
        <div className="layout-sidebar-right">
          <div className="sidebar-right">
            <RightSide />
          </div>
        </div>
        <div className="layout-footer">
          {" "}
          <NeonSwitcher />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
