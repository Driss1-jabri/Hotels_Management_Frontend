import React from "react";

const HotelList = () => {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <div className="box-container">
        {tourPackages.map((tourPackage, index) => (
          <div className="box" key={index}>
            <img
              decoding="async"
              src={tourPackage.image}
              alt={tourPackage.location}
            />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt"></i> {tourPackage.location}
              </h3>
              <p>{tourPackage.description}</p>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < tourPackage.rating ? "fas fa-star" : "far fa-star"
                    }
                  ></i>
                ))}
              </div>
              <div className="price">
                ${tourPackage.price} <span>${tourPackage.discountedPrice}</span>
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Sample data for tour packages
const tourPackages = [
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Sydney",
    image: "img/p-2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  {
    location: "Mumbai",
    image: "img/p-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the farhan and typesetting industry.",
    rating: 4,
    price: 90.0,
    discountedPrice: 120.0,
  },
  // Add more tour packages as needed
];

export default HotelList;
