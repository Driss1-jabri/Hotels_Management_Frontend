import React from "react";


const Footer = () => {
  return (
    
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
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
  );
};

export default Footer;
