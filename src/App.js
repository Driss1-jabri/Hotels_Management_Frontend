import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HotelView from "./Components/HotelView";
import Card from "./Components/Cards/Card";
import Card1 from "./Components/Cards/Card1";
import Card2 from "./Components/Cards/Card2";
import Hotel from "./Components/Hotel"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar";
import Room from "./Components/Room";
import Reservation from "./Components/Reservation";
import TestComponent from "./Components/TestComponent";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Router>
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
          <Route path="/test" element={<TestComponent />} />
          <Route exact path="/reservation/hotel/:hotelId/room/:roomId/personnes/:personnes" element={
            <Reservation />
        } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
