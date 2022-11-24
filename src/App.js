import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Details from './pages/Details';
import Main from './pages/Main';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/details/:cityId"
            element={<Details />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
