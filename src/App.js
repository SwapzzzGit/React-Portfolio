import React from "react";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Global Styles
import GlobalStyle from "./components/GlobalStyle";
//Nav
import Nav from "./components/Nav";
//Route
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/About" Component={AboutUs} />
        <Route path="/Contact" Component={ContactUs} />
        <Route path="/Work" Component={OurWork} />
      </Routes>
    </div>
  );
}
export default App;
