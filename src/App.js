import React from "react";
//Import Pages
import AboutUs from "./pages/AboutUs";
//Global Styles
import GlobalStyle from "./components/GlobalStyle";
//Nav
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}
export default App;
