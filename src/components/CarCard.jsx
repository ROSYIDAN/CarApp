import React from "react";
import Wrapper from "../assets/wrappers/CarCard";
import { Link, useOutletContext } from "react-router-dom";

export const CarCard = ({ car }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={car.image} alt="" className="img-card" />
      </div>
      <div className="footer">
        <h4>{car.model}</h4>
        <h5>{car.make}</h5>
        <Link className="btn" to={`/car/${car.make}`} state={car}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
};
