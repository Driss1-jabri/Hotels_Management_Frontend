import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HotelView from "./Components/HotelView";
import Card from "./Components/Cards/Card";
import Card1 from "./Components/Cards/Card1";
import Card2 from "./Components/Cards/Card2";
import Hotel from "./Components/Hotel"

import NavBar from "./Components/NavBar";
import Room from "./Components/Room";
import Slider1 from "./Components/Cards/Slider1";


function App() {
  return (
    <div className="App" >

      
      

      {/* <NavBar /> */}
        
      <Router>
      
        <Routes>
          <Route exact path="/home" element={<Slider1 />} />
          <Route
            path="/hotel/:nom/:adresse/:ville/:id"
            element={<HotelView />}
          />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/hot" element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
