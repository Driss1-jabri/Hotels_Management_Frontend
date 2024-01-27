import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HotelView from "./Components/HotelView";
import Card from "./Components/Cards/Card";
import Card1 from "./Components/Cards/Card1";
import Card2 from "./Components/Cards/Card2";
import Hotel from "./Components/Hotel"
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import Room from "./Components/Room";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Card2 />} />
          <Route
            path="/hotel/:id"
            element={
                <HotelView />
            }
          />
          <Route path="/hotelroom/:id" element={<Room />} />
          <Route path="/hot" element={<Hotel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
