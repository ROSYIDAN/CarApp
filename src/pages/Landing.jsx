import { json, useLoaderData } from "react-router-dom";
import { SearchForm } from "../components/SearchForm";

import axios from "axios";
import { CarList } from "../components/CarList";
import { createCarImage } from "../utils/CreateCarImage";

const BASE_URL =
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchCar = url.searchParams.get("make") || "nissan";
  const limit = parseInt(url.searchParams.get("limit") || "10");
  let offset = 0;
  let matchedCars = [];
  const seenModels = new Set();

  while (matchedCars.length < limit) {
    const res = await axios.get(BASE_URL, {
      params: {
        where: `(search("${searchCar}"))`,
        limit,
        offset,
      },
    });
    const cars = res.data.results;
    if (!cars || cars.length === 0) break;

    for (const car of cars) {
      const carMake = car.make?.toLowerCase() || "";
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
      if (matchedCars.length === limit) break;
    }
    offset += limit;
  }
  return { cars: matchedCars, searchCar };
};

const Landing = () => {
  const { cars } = useLoaderData();
  // console.log(cars);

  return (
    <>
      <SearchForm />
      <CarList cars={cars} />
      {/* <CocktailList drinks={drinks} /> */}
    </>
  );
};
export default Landing;
