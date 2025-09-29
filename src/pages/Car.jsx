import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
export const loader = async ({ params }) => {
  const { brand, model } = params;
  console.log(brand, model);

  return { car: "hello" };
};
const Car = () => {
  const { car } = useLoaderData();
  const location = useLocation();
  const carData = location.state;
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
  } = carData;

  console.log(carData);
  if (!carData) return <Navigate to={"/"} />;
  return (
    <Wrapper>
      <header>
        <Link to={"/"} className="btn">
          Back Home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt={"name"} className="img" />
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
