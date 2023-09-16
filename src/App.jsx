import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar";
import Login from "./components/Login";
import Dashboard from "./dashboard/Dashboard";
import RequestItems from "./components/RequestItems";
import EditProfile from "./components/EditProfile";
import Notifications from "./components/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requestItems" element={<RequestItems />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
