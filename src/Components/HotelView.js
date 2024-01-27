import React, { useState , useEffect } from 'react';
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
import { Navigate, useNavigate, useParams } from "react-router-dom";


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import NavBar from './NavBar';

const HotelView = () => {

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [personnes, setPersonnes] = useState(1);
  const [children, setChildren] = useState(0);
  const [hotelImage, setHotelImage] = useState(null);
  const [carouselItems, setCarouselItems] = useState([]);
  const [hotelDetails, setHotelDetails] = useState({
    nom: '',
    adresse: '',
    ville: '',
  });
  const [images, setImages] = useState([]);
  const { bookingDetails, setBooking } = useState({
    checkInDate,
    checkOutDate,
  });

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleReturn = () => {
    navigate("/");
  };
  
  const generateImageURLs = (nomhotel, numImages = 10) => {
    const imageArray = [];
    for (let i = 1; i <= numImages; i++) {
      let k = nomhotel;
      if (k === "") {
        console.log("HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA TBH IDK WHY EMPTY");
      }
      else
      {
        const imageURL = require(`../Assets/Images/${k}_image_ (${i}).png`);
        imageArray.push(imageURL);
      }
    }
    return imageArray;
  };
  
  
  

  const fetchHotelData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/hotels/${id}`);
      const { nom, adresse, ville, imageBase64 } = response.data;
  
      const byteCharacters = atob(imageBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const imageBlob = new Blob([byteArray], { type: 'image/png' });
  
      const hotelImageUrls = generateImageURLs(nom);
  
      setHotelImage(imageBlob);
      const hotelImages = generateImageURLs(hotelDetails.nom);
      setImages(hotelImages);
  
      const combinedImages = [
        {
          id: 0,
          image: URL.createObjectURL(imageBlob),
          altText: `Hotel ${nom} - Image 0`,
        },
        ...hotelImageUrls.map((url, index) => ({
          id: index + 1,
          image: url,
          altText: `Hotel ${nom} - Image ${index + 1}`,
        })),
      ];

      setCarouselItems(combinedImages);

      console.log('hotelImageUrls:', hotelImageUrls);
      console.log('carouselItems:', carouselItems);
  
      setHotelDetails({ nom, adresse, ville });
    } catch (error) {
      console.error('Error fetching hotel data', error);
    }
  };

  const {id} = useParams();

  useEffect(() => {
    fetchHotelData();
  }, [id]);

  useEffect(() => {
    console.log('carouselItems:', carouselItems);
  }, [carouselItems]);

  const bookRoom = async () => {
    try {
      const existingBookings = await axios.get(`http://localhost:8080/bookings`);
      
      if (existingBookings.data.length > 0) {
        // If there are existing bookings, delete them
        await axios.delete(`http://localhost:8080/bookings`);
      }
  
      // Create a new booking
      const newBooking = {
        checkInDate,
        checkOutDate,
      };
  
      const response = await axios.post(`http://localhost:8080/bookings`, newBooking);
  
      console.log('Booking Details:', newBooking);
      console.log('Booking created:', response.data);
  
      navigate(`/hotelroom/${encodeURIComponent(id)}?personnes=${encodeURIComponent(personnes)}`);
    } catch (error) {
      // Handle the case where fetching existing bookings results in NOT_FOUND
      if (error.response && error.response.status === 404) {
        try {
          // Retry creating a new booking after handling NOT_FOUND
          const newBooking = {
            checkInDate,
            checkOutDate,
          };
  
          const response = await axios.post(`http://localhost:8080/bookings`, newBooking);
  
          console.log('Booking Details:', newBooking);
          console.log('Booking created:', response.data);
  
          navigate(`/hotelroom/${encodeURIComponent(id)}?personnes=${encodeURIComponent(personnes)}`);
        } catch (createError) {
          console.error('Error creating a new booking after handling NOT_FOUND', createError);
        }
      } else {
        console.error('Error handling booking', error);
      }
    }
  };
  
  
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center container mt-5">
      <NavBar />
      <div className="card-group card-group-hotel-view border shadow-lg p-3 mb-5 bg-white rounded " style={{ margin: '100px' }}>
        {/* Carousel Card */}
        <div className="card">
        <Carousel>
            {carouselItems.map((item) => (
              console.log(item),
              <Carousel.Item key={item.id}>
                <img className="carousel-image" src={item.image} alt={item.altText} />
              </Carousel.Item>  
            ))}
          </Carousel>
        </div>

        {/* Amenities Card */}
        <div className="card border-0">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              {/*TOP*/}

              <div>
                <h1 className="card-title title">
                  Hotel {hotelDetails.nom}
                </h1>
                <p className="card-text component-check-label">
                Welcome to Hotel {hotelDetails.nom}! Our hotel is located in the heart of {hotelDetails.ville}, offering a cozy and comfortable stay. Enjoy the convenience of our central address at {hotelDetails.adresse} and explore the vibrant surroundings. Whether you're here for business or leisure, we strive to make your stay memorable.
                </p>
                <p className="card-text component-label">Address: {hotelDetails.adresse}</p>
                <p className="card-text component-label">Ville: {hotelDetails.ville}</p>
              </div>
            </div>

            <div>
              {/*BOTTOM*/}

              <div className="card border-0 mb-3 mt-4">
                {/*SlIDES OF MULTIPLE OF THESE CARDS*/}
                <table>
                <thead className="d-flex p-2">
                  <th>
                    <h5>Où vous dormirez</h5>
                  </th>
                </thead>
                  <tbody className=" text-white bg-room-card">
                    <Carousel>
                      <Carousel.Item>
                        <div className="card-body d-flex flex-column justify-content-start ">
                          <td className="d-flex justify-content-center">
                            <LuBedDouble size={30} />
                          </td>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre Single</strong>
                            </h5>
                            <p className="card-text">
                              pour 1 personne
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
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre Triple</strong>
                            </h5>
                            <p className="card-text">
                            pour 3 personnes
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
                            <LuBedSingle size={30} />
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre Familiale</strong>
                            </h5>
                            <p className="card-text">
                              pour 5 personnes
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
                            <LuBedSingle size={30} />
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h5 className="card-title ">
                              <strong>Chambre Suite</strong>
                            </h5>
                            <p className="card-text">
                              pour 5 personnes
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
                              <strong>Chambre Standard</strong>
                            </h5>
                            <p className="card-text">
                              pour 4 personnes
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
                  <thead className='d-flex'>
                    <tr>
                      <td>
                        <h5>Ce que propose ce Hotel</h5>
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
              {/*BUTTONS
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-outline-danger">Go Back</button>
                <button
                  className="btn btn-outline-success"
                  onClick={bookRoom}
                >
                  Book Now
                </button>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* FILL OUT INFO */}
      <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container">
    <div className="d-flex flex-row gap-3 justify-content-center bg-white shadow" style={{ padding: '30px' }}>
    <div className="d-flex justify-content-center align-items-end col-md-2" style={{ marginRight: '30px' }}>
            <button className=" btn btn-outline-danger w-100" onClick={handleReturn}>
            Return
          </button>
          </div>
            <div className="col-md-2">
              <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
              <DatePicker
                id="checkInDate"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select Check-in Date"
                className="form-control"
                minDate={new Date()}
              />
            </div>  
            <div className="col-md-3">
              <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
              <DatePicker
                id="checkOutDate"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select Check-out Date"
                className="form-control"
                minDate={checkInDate || new Date()}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="numberOfPeople" className="form-label">Select Number of People</label>
              <select
                id="numberOfPeople"
                className="form-select"
                value={personnes}
                onChange={(e) => setPersonnes(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="d-flex justify-content-center align-items-end col-md-2" style={{ marginLeft: '30px' }}>
            <button className=" btn btn-outline-primary w-100" onClick={bookRoom}>
            Book Now
          </button>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HotelView;
