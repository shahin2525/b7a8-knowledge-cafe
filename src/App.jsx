import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Knowledge from "./components/Knowledge/Knowledge";
import Question from "./components/Question/Question";

function App() {
  return (
    <>
      <Header></Header>
      <Knowledge></Knowledge>
    </>
  );
}

export default App;
