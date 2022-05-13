import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/auth/Login";
import HomeScreen from "./screens/HomeScreen";

const App: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Header />
          <Routes>
            <Route path="/signIn" element={<Login />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
