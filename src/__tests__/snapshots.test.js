import { render } from "@testing-library/react"
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Main from "../pages/Main";
import store from "../redux/configureStore";

describe("Testing Snapshot Of The App", () => {
  test("Main Snapshot Test", () => {
    const view = render(
      <Provider store={ store }>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/details/:cityId"
          element={<Details />}
        ></Route>
      </Routes>
    </BrowserRouter>
   </Provider>
    );
    expect(view).toMatchSnapshot();
  })

})