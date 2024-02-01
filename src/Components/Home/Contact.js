import React from "react";
import logo from "../../Assets/Images/Black Gold Modern Circle Monoline Hotel Branding Logo (2).png";

const Contact = () => {
  return (
    
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
     
  );
};

export default Contact;
