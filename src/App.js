import logo from "./logo.svg";
import Navbar from "./Comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="favorite">
            <Route index element={<Favorite />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
