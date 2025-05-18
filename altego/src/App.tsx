import "./App.css";
import Content from "./Layout/Content/Content";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Menu from "./Layout/Header/Menu";

function App() {

  const menuData = [
    { title: 'News', entries: ['Aktuell', 'Archiv'] },
    { title: 'Spiele', entries: ['X4', 'X3', 'X2', 'X'] },
    { title: 'Community', entries: ['Forum', 'Wiki', 'Links', 'Chat', 'Developer Network'] },
    { title: 'Downloads', entries: ['Holo Text'] },
    { title: 'Hilfe', entries: ['Wiki DE', 'Wiki EN', 'FAQs', 'Forum'] },
    { title: 'Shop', entries: ['English Shop', 'Deutsch Shop'] },
  ];

  return (
    <>
      <Header />
      <Menu data={menuData} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
