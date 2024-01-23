import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import WithoutCancelDemo from "./WithoutCancelDemo";

const Card1 = ({ image, nom, adresse, ville, id }) => {
  const navigate = useNavigate(); 

  const handleBookNowClick = () => {
    
     navigate(
       `/hotel/${encodeURIComponent(nom)}/${encodeURIComponent(
         adresse
       )}/${encodeURIComponent(ville)}/${encodeURIComponent(id)}`
     );
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={`Image of ${nom}`} />
      <Card.Body>
        <div
          className="text-uppercase p-1"
          style={{ textAlign: "left", fontSize: "20px", color: "#93c572" }}
        >
          <b>{nom}</b>
        </div>
        <WithoutCancelDemo></WithoutCancelDemo>
        <p className="mt-4">{adresse}</p>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            style={{ backgroundColor: "#93c572" }}
            className="text-uppercase btn border-0 me-2 text-light"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
          <div className="d-flex flex-column ">
            <span style={{ color: "#93c572" }}>{ville}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Card1;
