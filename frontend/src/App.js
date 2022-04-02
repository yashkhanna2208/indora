import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to={"/"}>indora</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
