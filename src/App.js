import Header from "./components/Header/Header";
import Import from "./import";
import Catalog from "./components/Catalog";
import Main from "./components/Main.js/Main";
import { Routes, Route } from "react-router-dom";

function App(props) {
  let user = [
    {
      name1: "Каталог",
      name2: "Wharhammer",
      name3: "Мероприятия",
      name4: "О центре",
      name5: "Контакты",
    },
  ];
  return (
    <div>
      <Header />
      <Main name={user} />
      <Routes>
        <Route path="/" element={<Import />} />
        <Route path="/about" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
