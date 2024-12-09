import Header from "./components/Header"
import Body from "./components/Body"
import {BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
import ResturantDetail from "./components/ResturantDetail";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";


function App() {
  return (
    <div className="App font-sans">
      <Provider store={appStore}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Body/>} />
            <Route path="/rest/:id" element={<ResturantDetail/>} />
            <Route path="/cart" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
