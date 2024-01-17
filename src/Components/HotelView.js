import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Button } from 'react-bootstrap';
import { FaWifi, FaCar, FaSwimmingPool, FaDog, FaBath, FaHome, FaExclamationTriangle } from 'react-icons/fa';
import { LuBedDouble, LuBedSingle } from "react-icons/lu";
import { GiWashingMachine } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../Assets/Images/gallery-1.png';
import image2 from '../Assets/Images/gallery-2.png';
import image3 from '../Assets/Images/gallery-3.png';
import './HotelView.css';
import { Modal } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AmenitiesPopup from './AmenitiesPopup';
import { useParams } from "react-router-dom";

const RoomCard = ({ roomNumber, bedConfig }) => {
    
    return (
      <div className="card mb-3">
        <div className="card-body d-flex flex-column justify-content-start">
          <div className="d-flex">
            <LuBedSingle size={30} className="me-2" />
            <LuBedDouble size={30} />
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <h5 className="card-title"><strong>Chambre {roomNumber}</strong></h5>
            <p className="card-text">{bedConfig}</p>
          </div>
        </div>
      </div>
    );
  };

const HotelView = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const { nom, adresse, ville } = useParams();
  return (
    <div className="container mt-5">
      <div className="card-group border shadow-lg p-3 mb-5 bg-white rounded">
        {/* Carousel Card */}
        <div className="card h-100">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Amenities Card */}
        <div className="card border-0">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              {/*TOP*/}

              <div>
                <h1 className="card-title">{nom}</h1>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  eget tortor risus.
                </p>
                <p className="card-text">Address: {adresse}</p>
                <p className="card-text">Ville: {ville}</p>
              </div>
            </div>

            <div>
              {/*BOTTOM*/}

              <div className="card border-0 mb-3 mt-4">
                {/*SlIDES OF MULTIPLE OF THESE CARDS*/}
                <table>
                  <thead className="d-flex" style={{ paddingLeft: "70px" }}>
                    <strong>Où vous dormirez</strong>
                  </thead>
                  <tbody className=" text-white bg-dark">
                    <Carousel>
                      <Carousel.Item>
                        <div className="card-body d-flex flex-column justify-content-start ">
                          <div className="d-flex justify-content-center">
                            <LuBedDouble size={30} />
                            <LuBedSingle size={30} />
                            <LuBedSingle size={30} />
                            <LuBedSingle size={30} />
                            <LuBedSingle size={30} />
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre 1</strong>
                            </h5>
                            <p className="card-text">
                              1 lit double 4 lits simples
                            </p>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="card-body d-flex flex-column justify-content-start ">
                          <div className="d-flex justify-content-center">
                            <LuBedDouble size={30} />
                            <LuBedDouble size={30} />
                            <LuBedSingle size={30} />
                            <LuBedSingle size={30} />
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre 2</strong>
                            </h5>
                            <p className="card-text">
                              2 lits doubles 2 lits simples
                            </p>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="card-body d-flex flex-column justify-content-start ">
                          <div className="d-flex justify-content-center">
                            <LuBedDouble size={30} />
                            <LuBedSingle size={30} />
                            <LuBedSingle size={30} />
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre 3</strong>
                            </h5>
                            <p className="card-text">
                              1 lit double 2 lits simples
                            </p>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </tbody>
                </table>
              </div>

              <div className="d-flex flex-column w-100">
                {/*SERVICE*/}
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <td>
                        <strong>Ce que propose ce Hotel</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <FaWifi size={25} /> Wifi
                      </td>
                      <td>
                        <FaCar size={25} /> Parking gratuit sur place
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FaSwimmingPool size={25} /> Piscine Privé
                      </td>
                      <td>
                        <FaDog size={25} /> Animaux acceptés
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GiWashingMachine size={25} /> Lave-linge
                      </td>
                      <td>
                        <FaBath size={25} /> Baignoire
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-outline-info"
                  onClick={handleShowPopup}
                >
                  {" "}
                  Afficher les autres services
                </button>
                <AmenitiesPopup
                  show={showPopup}
                  handleClose={handleClosePopup}
                ></AmenitiesPopup>
              </div>
              {/*BUTTONS*/}
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-outline-danger">Go Back</button>
                <button className="btn btn-outline-success">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelView;
