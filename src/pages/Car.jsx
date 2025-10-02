import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";

const Car = () => {
  const location = useLocation();
  const car = location.state;
  const {
    make,
    model,
    cylinders,
    drive,
    fueltype1,
    trany,
    vclass,
    year,
    image,
  } = car;

  console.log(car);
  if (!car) return <Navigate to={"/"} />;
  return (
    <Wrapper>
      <header>
        <Link to={"/"} className="btn">
          Back Home
        </Link>
      </header>
      <div className="drink">
        <div className="img-container" style={{ display: "flex" }}>
          <img
            src={image}
            alt={"name"}
            className="img"
            style={{ margin: "auto" }}
          />
        </div>
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span> {`${make} ${model}`}
          </p>
          <p>
            <span className="drink-data">Engine:</span> {cylinders} cylinders
          </p>
          <p>
            <span className="drink-data">Drive:</span> {drive}
          </p>
          <p>
            <span className="drink-data">Fuel:</span> {fueltype1}
          </p>
          <p>
            <span className="drink-data">Transmission:</span> {trany}
          </p>
          <p>
            <span className="drink-data">Class:</span> {vclass}
          </p>
          <p>
            <span className="drink-data">Released year:</span> {year}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Car;
