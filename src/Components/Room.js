import React, { useState, useEffect } from "react";
import "./css/bootstrap.min.css";
import imag from '../Assets/Images/room-2.png'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';

const RoomItem = ({
  imgSrc,
  price,
  title,
  rating,
  bedInfo,
  bathInfo,
  wifi,
  description,
}) => (
  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="room-item shadow rounded overflow-hidden">
      <div className="position-relative">
        <img className="img-fluid" src={imgSrc} alt="" />
        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
          {price}
        </small>
      </div>
      <div className="p-4 mt-2">
        <div className="d-flex justify-content-between mb-3">
          
          <h5 className="mb-0 text-center">{title}</h5>
          <div className="ps-2">
            {Array.from({ length: rating }, (_, index) => (
              <small key={index} className="fa fa-star text-primary"></small>
            ))}
          </div>
        </div>
        <div className="d-flex mb-3">
          <small className="border-end me-3 pe-3">
            <i className="fa fa-bed text-primary me-2"></i>
            {bedInfo}
          </small>
          <small className="border-end me-3 pe-3">
            <i className="fa fa-bath text-primary me-2"></i>
            {bathInfo}
          </small>
          <small>
            <i className="fa fa-wifi text-primary me-2"></i>
            {wifi}
          </small>
        </div>
        <p className="text-body mb-3">{description}</p>
        <div className="d-flex justify-content-between">
          <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">
            Voir Détails
          </a>
          <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
            Reserver
          </a>
        </div>
      </div>
    </div>
  </div>
);



const Room = () => {
  const {id} = useParams();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9090/hotels/${id}/rooms`
        );
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    
    fetchRooms();
  }, [id]);
  
  return (
    <div className="container-xxxl bg-white p-0">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase fs-4">
              Nos Chambres
            </h6>
            <h1 className="mb-5 fs-20">
              Explorer Nos{" "}
              <span className="text-primary text-uppercase">Chambres</span>
            </h1>
          </div>
          <div className="row g-4">
            {rooms.map((room) => (
              <RoomItem
                key={room.id}
                imgSrc={`data:image/png;base64,${room.imageBase64}`}
                price={`${room.prix}DH/Nuit`}
                title={room.type}
                rating={5}
                bedInfo={`${room.capacite} Personnes`}
                bathInfo="2 Salles de bain"
                wifi="Wifi"
                description=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
  


export default Room;
