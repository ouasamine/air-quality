import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Details from "./components/Details";
import Main from "./components/Main";

function App() {
  return (
   <Provider store={ store }>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;
