import React, { useRef } from "react";
import Slider from "react-slick";
import Card1 from "./Card1";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous d'importer le fichier CSS de Bootstrap
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious} from "react-icons/gr";
const Slider1 = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

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
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }}
    ]
  };

  return (
    <div className=" m-5">
      <Slider className="d-flex m-2" ref={sliderRef} {...settings}>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        <Card1></Card1>
        
      </Slider>

      <div className="text-center mt-3 ">
        <button
          className="btn  mr-2"
          onClick={previous}
         // Couleur personnalisée pour le bouton "Previous"
        >
          <GrFormPrevious className="text-primary" />
        </button>
        <button
          className="btn "
          onClick={next}
           // Couleur personnalisée pour le bouton "Next"
        >
          <MdNavigateNext className="text-primary"/>
        </button>
      </div>
    </div>
  );
};

export default Slider1;
