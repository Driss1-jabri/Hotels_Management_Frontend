import React from 'react'

import logo from "../../Assets/Images/Black Gold Modern Circle Monoline Hotel Branding Logo (2).png";
import Welcom from './Welcom';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import Card2 from "../Cards/Card2"
import Slider1 from '../Cards/Slider1';
import about from "../../Assets/Images/about.png";
import gallery1 from "../../Assets/Images/gallery-1.png";
import gallery2 from "../../Assets/Images/gallery-2.png";
import gallery3 from "../../Assets/Images/gallery-3.png";
import gallery4 from "../../Assets/Images/gallery-4.png";
import gallery5 from "../../Assets/Images/gallery1.jpg";
import gallery6 from "../../Assets/Images/gallery2.jpg";
import gallery7 from "../../Assets/Images/gallery7.jpg";
import gallery8 from "../../Assets/Images/gallery8.jpg";
import NavBar from '../NavBar';
export default function Home() {
  return (
    <div>
      <NavBar />
      
        <div className="container-fluid bg-primary py-5 mb-0 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                  Trouvez votre lieu idéal, pour vos prochaines destinations
                </h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                  Des séjours simples, des moments mémorables - Réservez
                  maintenant !
                </p>
              </div>
            </div>
          </div>
        </div>
      
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>À propos de nous</h2>
                <p>
                  DyafaToCom est une plateforme qui vous permet de réserver des
                  chambres dans les meilleurs hôtels du Maroc, à des prix
                  exclusifs. Nous sommes dédiés à vous offrir une expérience de
                  réservation simple, efficace et abordable pour rendre vos
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
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Gallerie</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery1} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery2} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery3} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery4} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery5} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery6} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery7} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={gallery8} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider1 />
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contacter Nous</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Nom"
                      type="text"
                      name="Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Numéro de Telephone"
                      type="text"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="Message"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <img
                    src={logo}
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: "0", marginLeft: "200px", width: "80%" }}
                    allowFullScreen=""
                    alt="Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Contacter Nous</h3>
              <ul className="conta">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Addresse
                </li>
                <li>
                  <i className="fa fa-mobile" aria-hidden="true"></i>{" "}
                  06666666666
                </li>
                <li>
                  {" "}
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="#"> DyafaToCom@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Menu </h3>
              <ul className="link_menu">
                <li className="active">
                  <a href="#">Accueil</a>
                </li>
                <li>
                  <a href="about.html"> À propos</a>
                </li>
                <li>
                  <a href="room.html">Nos Hotels</a>
                </li>
                <li>
                  <a href="gallery.html">Gallerie</a>
                </li>

                <li>
                  <a href="contact.html">Contacter Nous</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>réseaux sociaux</h3>
              <form className="bottom_form">
                <input
                  className="enter"
                  placeholder="Enter your email"
                  type="text"
                  name="Enter your email"
                />
                <button className="sub_btn">subscribe</button>
              </form>
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <Welcom />
        <About />
        <Gallery />
        <Slider1 />
        <Contact />
        <Footer /> */}
    </div>
  );
}
