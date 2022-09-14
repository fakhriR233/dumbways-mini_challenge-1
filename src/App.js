import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Render/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./Render/SecondPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/account/:id" exact element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
