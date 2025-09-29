import React from "react";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

export const SearchForm = ({ searchCar, setSearchCar, setSearchTrigger }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTrigger(searchCar);
    console.log(searchCar);
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="make"
          value={searchCar}
          className="form-input"
          onChange={(e) => setSearchCar(e.target.value)}
          placeholder="Search a car brand"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </form>
    </Wrapper>
  );
};
