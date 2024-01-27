import React from "react";
import gallery1 from "../../Assets/Images/gallery-1.png"
import gallery2 from "../../Assets/Images/gallery-2.png";
import gallery3 from "../../Assets/Images/gallery-3.png";
import gallery4 from "../../Assets/Images/gallery-4.png"
import gallery5 from "../../Assets/Images/gallery1.jpg";
import gallery6 from "../../Assets/Images/gallery2.jpg";
import gallery7 from "../../Assets/Images/gallery7.jpg";
import gallery8 from "../../Assets/Images/gallery8.jpg";

const Gallery = () => {
  return (
    
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
      
  );
};

export default Gallery;
