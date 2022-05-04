import logo from "./logo.svg";
import Navbar from "./Comps/navbar/Navbar";
import { BrowserRouter, Routes, Route,HashRouter} from "react-router-dom";
import Favorite from "./Pages/Favorite";
import Home from "./Pages/Home";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="favorite">
            <Route index element={<Favorite />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
