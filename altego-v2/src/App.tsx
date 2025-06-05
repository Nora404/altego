import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { routes } from "./routing"

import Header from "./layout/header/Header"
import Content from "./layout/main/Content"
import Menu from "./layout/navigation/Menu"
import { menuData } from "./data/MenuData";
import LeftSide from "./layout/sidebars/LeftSide"
import RightSide from "./layout/sidebars/RightSide"
import NeonSwitcher from "./layout/components/NeonSwitcher"

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="layout-header">
          <Header />
        </div>
        <div className="layout-menu">
          <Menu data={menuData} />
          <NeonSwitcher />
        </div>
        <div className="layout-sidebar-left">
          <div className="sticky">
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
          <div className="sticky">
            <RightSide />
          </div>
        </div>
        <div className="layout-footer"></div>
      </div>
    </BrowserRouter>
  )
}

export default App
