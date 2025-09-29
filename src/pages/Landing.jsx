import { json, useLoaderData } from "react-router-dom";
import { SearchForm } from "../components/SearchForm";

import axios from "axios";
import { CarList } from "../components/CarList";
import { createCarImage } from "../utils/CreateCarImage";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const BASE_URL =
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records";
export const fetchCars = async ({ searchCar }) => {
  let carQuery = searchCar || "nissan";
  let carLimit = 10;

  let offset = 0;
  let matchedCars = [];
  const seenModels = new Set();
  let maxTries = 5;
  while (matchedCars.length < carLimit && maxTries > 0) {
    const res = await axios.get(BASE_URL, {
      params: {
        where: `(search("${carQuery}"))`,
        carLimit,
        offset,
      },
    });
    const cars = res.data.results;
    if (!cars || cars.length === 0) break;

    for (const car of cars) {
      const shortModel = car.model ? car.model.split(" ")[0] : "";
      const shortMake = car.make ? car.make.split(" ")[0].toLowerCase() : "";

      if (shortMake === searchCar && !seenModels.has(shortModel)) {
        seenModels.add(shortModel);
        seenModels.add(shortMake);
        matchedCars.push({
          ...car,
          model: shortModel,
          make: shortMake,
          image: createCarImage(car, ""),
        });
      }
      if (matchedCars.length === carLimit) break;
    }
    offset += carLimit;
    maxTries--;
  }
  return { cars: matchedCars };
};

export const loader = async () => {
  const cars = await fetchCars({ searchCar: "nissan" });
  return { carsLoader: cars };
};
export const useSearchCars = (searchCar) => {
  return useQuery({
    queryKey: ["cars", searchCar || "nissan"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return fetchCars({ searchCar });
    },
    enabled: !!searchCar,
  });
};

const Landing = () => {
  const { carsLoader } = useLoaderData();
  const [searchCar, setSearchCar] = useState("");
  const [searchTrigger, setSearchTrigger] = useState("");
  const { data, isFetching, isError } = useSearchCars(searchTrigger);

  const carsToDisplay = searchTrigger ? data?.cars : carsLoader.cars;
  if (isFetching) {
    return (
      <div style={{ display: "grid", justifyContent: "center" }}>
        <div className="loading" />
      </div>
    );
  }
  return (
    <>
      <SearchForm
        searchCar={searchCar} // controlled input
        setSearchCar={setSearchCar} // setter for typing
        setSearchTrigger={setSearchTrigger} // pass to handle submit
      />
      <CarList cars={carsToDisplay} />;
    </>
  );
};
export default Landing;
