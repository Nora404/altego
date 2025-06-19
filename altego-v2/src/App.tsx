import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
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
  const [showMenu, setShowMenu] = useState<boolean>(false);

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

            <div className="flex-row">
              <button onClick={() => setShowMenu((pre) => !pre)}>menu</button>
              <NavLink to="/" className="outlined-text"><button>home</button></NavLink>
            </div>

            <div className="flex-row">
              <button>DE</button>
              <button>Login</button>
            </div>

            <ToDownHologram open={showMenu}>
              <MobileMenu data={menuData} onClose={() => setShowMenu(false)} />
            </ToDownHologram>

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
