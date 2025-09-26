import React from "react";
import Wrapper from "../assets/wrappers/CarCard";
import { Link, useOutletContext } from "react-router-dom";

export const CarCard = ({
  id,
  make,
  model,
  cylinders,
  drive,
  fueltype1,
  trany,
  vclass,
  year,
  image,
}) => {
  const carData = {
    make,
    model,
    cylinders,
    drive,
    fueltype1,
    trany,
    vclass,
    year,
    image,
  };
  // console.log(data);

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" className="img-card" />
      </div>
      <div className="footer">
        <h4>{model}</h4>
        <h5>{make}</h5>
        <Link className="btn" to={`/car/${make}`} state={carData}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
};
