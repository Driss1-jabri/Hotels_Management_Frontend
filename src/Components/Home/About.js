import React from "react";
import about from "../../Assets/Images/about.png";

const About = () => {
  return (
    
        <div className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="titlepage">
                  <h2>À propos de nous</h2>
                  <p>
                    DyafaToCom est une plateforme qui vous permet de réserver
                    des chambres dans les meilleurs hôtels du Maroc, à des prix
                    exclusifs. Nous sommes dédiés à vous offrir une expérience
                    de réservation simple, efficace et abordable pour rendre vos
                    séjours inoubliables.{" "}
                  </p>
                  <a className="read_more" href="Javascript:void(0)">
                    {" "}
                    Réserver
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="about_img" style={{ maxHeight: "80%" }}>
                  <figure>
                    <img src={about} alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default About;
