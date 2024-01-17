import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HotelView from "./Components/HotelView";
import Card from "./Components/Cards/Card";
import Card1 from "./Components/Cards/Card1";
import Card2 from "./Components/Cards/Card2";
import HotelList from "./Components/HotelList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Card2 />} />
          <Route path="/hotel/:nom/:adresse/:ville" element={<HotelView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
