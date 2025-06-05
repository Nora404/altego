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
import { Banner } from "./Layout/Content/Banner";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Menu data={menuData} />

      <div className="layout scroll-y">        {/* ⬅︎ neu */}
        <div className="article left">
          <Plattform title="Buy X-Series online">
            <img src="/assets/steam-logo.png" alt="screenshot" className="ad-img-1" />
          </Plattform>


          <Plattform title="Games Showcase">
            <div className="flex-row-center banner-parent">
              <Banner text="Buy Now" angle={-10} />
              <img src="/assets/X_Rebirth.jpg" alt="screenshot" className="ad-img-2"
                style={{ margin: "5px", height: "100%" }} />
              <img src="/assets/X4_Foundations.jpg" alt="screenshot" className="ad-img-2"
                style={{ margin: "5px", height: "100%" }} />
            </div>
          </Plattform>
        </div>

        <div className="scroll-y">
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
          <Plattform title="Logindata">
            Nora404<br />
            Edit Profile
            <div style={{ width: "500px" }}></div>
          </Plattform>

          <Plattform title="Community">
            Users: 366141<br />
            Logged in: 12
            <div style={{ width: "500px" }}></div>
          </Plattform>

          <Plattform title="Neuster Screenshot">
            <img src="/assets/x4_screen_205.jpg" alt="screenshot" className="ad-img-1" />
          </Plattform>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
