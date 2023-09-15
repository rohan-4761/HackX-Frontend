import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar";

function App() {
  const [count, setCount] = useState(0);
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route />
    //   </Routes>
    // </BrowserRouter>
    <Appbar />
  );
}

export default App;
