import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Layout/Content/Content";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Menu from "./Layout/Header/Menu";
import { Suspense } from "react";
import { routes } from "./routing";
import { menuData } from "./Data/MenuData";
import { Plattform } from "./Layout/Content/Plattform";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Menu data={menuData} />

      <div className="layout">        {/* ⬅︎ neu */}
        <div className="article left">
          <Plattform title="Test">Hallo</Plattform>
          <Plattform title="Neuster Screenshot">
            <img src="/assets/x4_screen_205.jpg" alt="screenshot" className="ad-img" />
          </Plattform>
        </div>

        <div id="page">
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

        <div className="article right">
          <Plattform title="Test">Hallo</Plattform>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
