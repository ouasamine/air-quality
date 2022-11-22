import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
