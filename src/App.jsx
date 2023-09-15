import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar";
import Login from "./components/login";

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
