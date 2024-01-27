import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Card1 from "./Card1";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous d'importer le fichier CSS de Bootstrap
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import axios from "axios";

const Slider1 = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  //
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hotels");
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
      id: hotel.id,
      image: `data:image/jpeg;base64,${hotel.imageBase64}`,
      nom: hotel.nom,
      adresse: hotel.adresse,
      ville: hotel.ville,
    };
  };

  const productTemplate = (element) => {
    return (
      <Card1
        key={element.id}
        image={element.image}
        nom={element.nom}
        adresse={element.adresse}
        ville={element.ville}
        id={element.id}
      />
    );
  };

  //
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="m-5 "
      style={{ marginTop: "50px", backgroundColor: "white" }}
    >
      <h2 className='d-flex justify-content-center align-items-center pt-3'>NOS HOTELS</h2>
      <Slider
        className="d-block ms-5 ps-5 me-5 pe-5"
        ref={sliderRef}
        {...settings}
      >
        {elements.map((ele) => productTemplate(ele))}
      </Slider>

      <div className="text-center mt-3 ">
        <button
          className="btn  mr-2"
          onClick={previous}
          // Couleur personnalisée pour le bouton "Previous"
        >
          <GrFormPrevious size={30} className="text-success" />
        </button>
        <button
          className="btn  "
          onClick={next}
          // Couleur personnalisée pour le bouton "Next"
        >
          <MdNavigateNext size={30} className="text-danger" />
        </button>
      </div>
    </div>
  );
};

export default Slider1;
