import React from "react";

const Welcom = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
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
    </div>
  );
};

export default Welcom;
