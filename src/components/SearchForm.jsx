import React from "react";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

export const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          // onChange={(e) => setSearchCar(e.target.value)}
          defaultValue={searchTerm}
          placeholder="Search a car brand"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};
