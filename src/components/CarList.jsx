import Wrapper from "../assets/wrappers/CarsList";
import { CarCard } from "./CarCard";

export const CarList = ({ cars }) => {
  return (
    <Wrapper>
      {cars.map((car) => {
        return <CarCard key={car.id} {...car} />;
      })}
    </Wrapper>
  );
};
