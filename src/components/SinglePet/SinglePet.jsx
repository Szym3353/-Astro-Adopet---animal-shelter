import React from "react";

import "./single-pet.css";

const SinglePet = ({ gender, name, age, src, slider = false }) => {
  return (
    <div
      className="single-pet flex flex-col-reverse shadow-md"
      style={{ borderRight: !slider ? "none" : "1px solid rgba(0,0,0,0.23)" }}
    >
      <div className="single-pet__info p-5 text-stone-900 flex justify-between items-center">
        <div>
          <h2 className="single-pet__name text-3xl font-medium">{name}</h2>
          <div className="flex">
            <p className="single-pet__gender pr-3">{gender}</p>
            <p className="single-pet__age">{age}</p>
          </div>
        </div>
        <button
          aria-label="More info about pet."
          className="single-pet__more p-2"
        >
          More
        </button>
      </div>
      <img src={src} alt="Single pet photo" className="single-pet__image" />
    </div>
  );
};

export default SinglePet;
