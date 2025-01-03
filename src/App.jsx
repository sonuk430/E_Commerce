import { Children } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home>{Children}</Home>
    </>
  );
}

export default App;
