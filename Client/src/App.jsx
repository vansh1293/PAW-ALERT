import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage";
import Form from "./Components/Form";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App
