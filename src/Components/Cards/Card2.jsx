import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import Card1 from "./Card1";
import axios from "axios";

export default function Card2() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:9090/hotels"); 
        const hotels = response.data;
        console.log(hotels);
        setElements(hotels.map((hotel) => mapHotelToElement(hotel)));
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  const mapHotelToElement = (hotel) => {
    return {
      id : hotel.id,
      image: `data:image/jpeg;base64,${hotel.imageBytes}`, 
      nom: hotel.nom,
      adresse: hotel.adresse,
      ville: hotel.ville,
    };
  };

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 4,
      numScroll: 1,
    },
  ];

  const productTemplate = (element) => {
    return (
      <Card1
        key={element.type}
        image={element.image}
        nom={element.nom}
        adresse={element.adresse}
        ville={element.ville}
        id = {element.id}
      />
    );
  };

  return (
    <div className="card m-3" style={{ margin: "0px", padding: "0px" }}>
      <Carousel
        value={elements}
        numScroll={1}
        numVisible={4}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
